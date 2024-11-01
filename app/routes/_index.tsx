import React, {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {useMediaQuery, Grid, CircularProgress} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import ProductCard from '~/global/components/product-card/ProductCard';
import ProductTable from '~/global/components/product-table/ProductTable';

import {products as allProducts} from '~/data/products/products';

const Index: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const ITEMS_PER_PAGE = 20;

  const [items, setItems] = useState(allProducts.slice(0, ITEMS_PER_PAGE));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= allProducts.length) {
      setHasMore(false);

      return;
    }

    setTimeout(() => {
      const nextItems = allProducts.slice(items.length, items.length + ITEMS_PER_PAGE);
      setItems(prevItems => [...prevItems, ...nextItems]);
    }, 2000);
  };

  return (
    <div style={{padding: theme.spacing(2)}}>
      {isMobile ? (
        <InfiniteScroll
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <div style={{textAlign: 'center', padding: theme.spacing(2)}}>
              <CircularProgress />
            </div>
          }
          endMessage={
            <p style={{textAlign: 'center'}}>
              <b>You have seen all products</b>
            </p>
          }
        >
          <Grid container spacing={2} justifyContent="center">
            {items.map(product => (
              <Grid item xs={12} sm={6} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : (
        <ProductTable products={allProducts} />
      )}
    </div>
  );
};

export default Index;
