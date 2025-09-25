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
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id,
    title: `Product Title ${id}`,
  };
}
