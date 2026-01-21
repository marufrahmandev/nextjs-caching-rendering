"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from 'next/headers';
export async function onRevalidatePathAction() {
    const path = "/data-cache";
    console.log(`attempting to revalidate path: ${path}`);
    revalidatePath(path);
    console.log(`revalidate path: ${path} action called`);
}

export async function onRevalidateTagAction() {
    const tag = "products";
    console.log(`attempting to revalidate tag: '${tag}'`);
    revalidateTag(tag);
    console.log(`revalidate tag action ('${tag}') called.`);
}

export async function onRevalidateRouteCache() {
    "use server";
    // const cookieStore = await cookies();
    // const theme = cookieStore.get('theme')
    // console.log("onRevalidateRouteCache cookieStore:", theme);

    // Revalidate the fetch cache using the tag
    // revalidateTag("static-route-products");
    // console.log("Fetch cache revalidated for tag: static-route-products");

    // Revalidate the router cache for this path
    revalidatePath("/router-cache/static-route");
    console.log("Route cache revalidated for /router-cache/static-route");
}