import { unstable_cacheLife } from 'next/cache';
import { Suspense } from 'react';

type Params = PageProps<'/product/[id]'>['params'];

export default function Page({ params }: { params: Params }) {
  return (
    <Suspense fallback="Loading...">
      <Product params={params} />
    </Suspense>
  );
}

async function Product({ params }: { params: Params }) {
  const id = (await params).id;
  const product = await getProduct(id);
  return <p>{product.title}</p>;
}

async function getProduct(id: string) {
  'use cache';
  // unstable_cacheLife('minutes');
  await new Promise((resolve) => setTimeout(resolve, 500));
  const date = new Date();

  return {
    id,
    title: `Product ${id}: Fetched at ${date}`,
  };
}
