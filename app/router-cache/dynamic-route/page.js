import React from 'react';
import { getData } from '@/app/utils/api-helpers';

export const dynamic = 'force-dynamic';

export default async function page() {
    const products = await getData("http://localhost:8000/products", "Dynamic Route Page");
    return (
        <div>
            <h1 className="font-bold text-4xl">Dynamic Route Page</h1>
            <div className="mt-6">
                This page is dynamically rendered in run time.
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
        </div>
    );
}