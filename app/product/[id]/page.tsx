// export const prefetch = {
//   mode: 'runtime',
// };

import { cookies } from 'next/headers';
import { Suspense } from 'react';

export default async function Page(props: PageProps<'/product/[id]'>) {
  // return <Product {...props} />;
  return (
    <Suspense fallback="Loading...">
      <Product
        params={props.params}
        foo={props.searchParams.then((s) => s.foo)}
      />
    </Suspense>
  );
}

type Params = Awaited<PageProps<'/product/[id]'>['params']>;
type SearchParams = Awaited<PageProps<'/product/[id]'>['searchParams']>;
type SearchParam = SearchParams[keyof SearchParams];

async function Product({
  params,
  foo,
}: {
  params: Promise<Params>;
  foo: Promise<SearchParam>;
}) {
  'use cache';
  // const jar = await cookies();
  // const f = (await props.searchParams).foo;
  const f = await foo;
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <div>
      <p>Search param foo: {f}</p>
      <p>{product.title}</p>
    </div>
  );
}

async function getProduct(id: string) {
  'use cache';

  await new Promise((resolve) => setTimeout(resolve, 2_000));
  return { id, title: `Product ${id}` };
}
