'use client'

import { useRouter } from 'next/navigation'
import { onRevalidateRouteCache } from '@/app/actions';

export default function Page() {
    const router = useRouter()

    const handleRevalidate = async () => {
        await onRevalidateRouteCache();
        router.refresh();
    }
    return (
        <button
            type="button"
            onClick={() => handleRevalidate()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            Revalidate Route Cache
        </button>
    )
}