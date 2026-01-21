import React from 'react';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function page() {
    return (
        <div>
            <h1 className="font-bold text-4xl">Router Cache Page</h1>
            <div className="mt-6">
                This page is statically rendered in build time.
            </div>
            <div className="flex gap-6">
                {/* <Link href="/router-cache/dynamic-route" prefetch={false}>Dynamic Route</Link>
                <Link href="/router-cache/static-route" prefetch={false}>Static Route</Link> */}

                <Link href="/router-cache/dynamic-route" prefetch={true}>Dynamic Route</Link>
                <Link href="/router-cache/static-route" prefetch={true}>Static Route</Link>

                {/* <form action={async () => {
                    "use server";
                    revalidatePath("/router-cache/static-route");
                    redirect("/router-cache/static-route");
                    console.log("Route cache revalidated for /router-cache/static-route");
                }}>
                    <button type="submit">Revalidate Route Cache</button>
                </form> */}
            </div>
        </div>
    );
}