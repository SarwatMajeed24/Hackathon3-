import React from 'react';
import { client } from '@/sanity/lib/client';
import DatafetchClient from './DatafetchClient';

export default async function Datafetch() {
    const query = await client.fetch(`
        *[_type == "products"]{
            _id,
            name,
            description,
            price,
            discountPercentage,
            category,
            isNew,
            colors,
            sizes,
            "imageUrl": image.asset->url
        }
    `);

    return <DatafetchClient data={query} />;
}
