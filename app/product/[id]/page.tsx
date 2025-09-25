import { SecondsSince } from '@/app/seconds-since';
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

  return (
    <div>
      <p>{product.title}</p>
      <p>
        <SecondsSince timestamp={product.fetchedAt} /> seconds ago
      </p>
    </div>
  );
}

async function getProduct(id: string) {
  'use cache';
  // unstable_cacheLife('minutes');
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    id,
    title: `Product ${id}`,
    fetchedAt: Date.now(),
  };
}
