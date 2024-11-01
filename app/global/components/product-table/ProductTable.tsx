import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import {formatDate} from '~/utils/dateHelpers';
import type {Product} from '~/data/products/products';

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({products}) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Sale Price</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Updated At</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map(product => (
          <TableRow key={product.id}>
            <TableCell>
              <img src={product.image} alt={product.title} style={{width: 50, height: 50}} />
            </TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>{product.status}</TableCell>
            <TableCell>{product.price} $</TableCell>
            <TableCell>{product.salePrice} $</TableCell>
            <TableCell>{formatDate(product.dateCreated)}</TableCell>
            <TableCell>{formatDate(product.dateUpdated)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ProductTable;
