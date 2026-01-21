import React from 'react'
import { getData } from '@/app/utils/api-helpers';
// import ClientSideButton from './client';
import { onRevalidateRouteCache } from '@/app/actions';
export default async function page() {
    // const products = await getData("http://localhost:8000/products", "Static Route Page", {
    //     next: { tags: ['static-route-products'], cache: 'force-cache' }
    // });
    const products = await getData("http://localhost:8000/products", "Static Route Page");
    return (
        <div>
            <h1 className="font-bold text-4xl">Static Route Page</h1>
            <div className="mt-6">
                This page is statically rendered in build time.
            </div>
            <div className="flex flex-col gap-10 mt-10 border rounded border-zinc-900 p-10">
                <div className="flex gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="flex rounded gap-6 border-zinc-800  w-4xl h-40 items-center justify-center font-bold text-2xl">
                            {product.title}
                        </div>
                    ))}
                </div>
            </div>



            {/* <ClientSideButton /> */}

            <form action={onRevalidateRouteCache}>
                <button type="submit">Revalidate Route Cache</button>
            </form>



        </div >
    );
}


