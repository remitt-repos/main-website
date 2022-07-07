import { config, list } from '@keystone-6/core';
import { image, text } from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';

const Post: Lists.Post = list({
    fields: {
        title: text({ validation: { isRequired: true } }),
        slug: text({ isIndexed: 'unique', isFilterable: true }),
        content: text(),
        image: image({ storage: 'local_images' }),
    },
});

export default config({
    db: { provider: 'sqlite', url: 'file:./app.db' },
    experimental: {
        generateNextGraphqlAPI: true,
        generateNodeAPI: true,
    },
    lists: { Post },
    storage: {
        local_images: {
            kind: 'local',
            type: 'image',
            generateUrl: path => `/images${path}`,
            serverRoute: {
                path: '/images',
            },
            storagePath: 'public/images',
        }
    }
});
