import { useGetBrandsQuery } from '../slices/brandsApiSlice';

import Brands from '../components/brands/Brands';

function BrandsPage() {
  const { data: brands, isLoading: isLoadingBrands, error: errorBrands } = useGetBrandsQuery();

  return (
    <section>
      {isLoadingBrands ? (
        <h2>Loading...</h2>
      ) : errorBrands ? (
        <div>{errorBrands.data.message || errorBrands.error}</div>
      ) : (
        <Brands title="Brands" brands={brands?.length ? brands : []} />
      )}
    </section>
  );
}

export default BrandsPage;
