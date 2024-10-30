import type {MetaFunction} from '@remix-run/node';
import {redirect} from '@remix-run/react';
import {useTranslation} from 'react-i18next';

import {Box, Grid2, Stack, Typography} from '@mui/material';

import {useQueryProductsList} from '~/services/products';

import {AppButton} from '~/global/components/app-button';

import {ProductsTable} from './components/table';

//
//

export const handle = {i18n: ['common', 'products']};
export const meta: MetaFunction = () => [{title: 'Remix App - Products'}];

export const clientLoader = async () => {
  if (!window.localStorage.getItem('_at')) return redirect('/');

  return null;
};

//
//

export default function Products() {
  const {t} = useTranslation(['common']);
  const {data, isLoading} = useQueryProductsList();

  if (isLoading)
    return (
      <Typography textAlign="center" mt="20%" color="grey.500" width="100%">
        Loading products...
      </Typography>
    );

  //
  //

  if (!data?.result?.length)
    return (
      <Grid2 container direction="column" spacing={2} p={4} alignContent="center">
        <Box textAlign="center">
          <Typography variant="caption" fontSize="0.9rem">
            No stuff to show..
          </Typography>
        </Box>

        <AppButton to="/products/create" variant="contained">
          Create a Product
        </AppButton>
      </Grid2>
    );

  return (
    <>
      <Stack alignItems="flex-end" my={2}>
        <AppButton to="/products/create" variant="contained">
          {t('common:create')}
        </AppButton>
      </Stack>

      <ProductsTable data={data?.result} isLoading={isLoading} />
    </>
  );
}
