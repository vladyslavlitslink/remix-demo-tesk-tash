import React from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  styled,
  useMediaQuery,
} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import type {Product} from '~/data/products/products';

const StyledCard = styled(Card)(({theme}) => ({
  position: 'relative',
  transition: 'transform 0.2s, box-shadow 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('sm')]: {
    '&:hover': {
      transform: 'none',
      boxShadow: theme.shadows[1],
    },
  },
}));

const StyledMedia = styled(CardMedia)(({theme}) => ({
  height: 200,
  [theme.breakpoints.up('sm')]: {
    height: 300,
  },
}));

const Price = styled(Typography)(() => ({
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
}));

const OriginalPrice = styled('span')(({theme}) => ({
  textDecoration: 'line-through',
  color: theme.palette.text.secondary,
  marginLeft: theme.spacing(1),
}));

const DetailsButton = styled(Button)(() => ({
  width: '100%',
}));

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledCard>
      <StyledMedia image={product.image} title={product.title} />
      <CardContent>
        <Typography gutterBottom variant={isMobile ? 'subtitle1' : 'h6'} component="h2">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {product.status}
        </Typography>
        <Price variant={isMobile ? 'body1' : 'h6'} color="primary">
          ${product.salePrice}
          <OriginalPrice>${product.price}</OriginalPrice>
        </Price>
      </CardContent>
      <CardActions>
        <DetailsButton size="medium" color="primary" variant="contained">
          Details
        </DetailsButton>
      </CardActions>
    </StyledCard>
  );
};

export default ProductCard;
