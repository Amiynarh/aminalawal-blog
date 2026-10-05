import type { NavigationLink, Site } from './types.ts'

export const SITE: Site = {
    author: 'Amina Lawal',
    url: 'https://aminalawal.com',
    title: 'Amina Lawal',
    description: 'Amina Lawal is a Platform Engineer and Google Cloud Professional Cloud Architect. Founder of G3Women, mentor, speaker, and writer for FreeCodeCamp and Google Cloud.',
    shortDescription: '',
}

export const NavigationLinks: NavigationLink[] = [
    { name: 'Writing', url: '/writing' },
    { name: 'Speaking', url: '/speaking' },
    { name: 'Projects', url: '/projects' },
    { name: 'Community', url: '/community' },
    { name: 'Mentorship', url: '/mentorship' },
    { name: 'Now', url: '/now' },
]

export const FooterLinks = [
    {
        section: 'Writing',
        links: [
            { name: 'All Writing', url: '/writing' },
            { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/news/author/Bronze/' },
            { name: 'Blog Archive', url: '/posts' },
            { name: 'RSS', url: '/rss.xml' },
        ],
    },
    {
        section: 'Work',
        links: [
            { name: 'Projects', url: '/projects' },
            { name: 'Speaking', url: '/speaking' },
            { name: 'Community', url: '/community' },
            { name: 'Mentorship', url: '/mentorship' },
            { name: 'G3Women', url: 'https://g3women.org' },
        ],
    },
    {
        section: 'Connect',
        links: [
            { name: 'Now', url: '/now' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aminalawalofficial/' },
            { name: 'Twitter / X', url: 'https://x.com/amiynarh' },
            { name: 'Instagram', url: 'https://www.instagram.com/miynaarh/' },
            { name: 'GitHub', url: 'https://github.com/Amiynarh' },
            { name: 'YouTube', url: 'https://youtube.com/@aminalawal3999' },
            { name: 'Sessionize', url: 'https://sessionize.com/aminalawal/' },
        ],
    },
]

export const Settings = {
    GoogleAnalytics: {
        enable: true,
        id: 'G-3FZ9XRHGG9',
    },

    // See https://github.com/umami-software/umami
    UmamiAnalytics: {
        enable: false,
        dataWebsiteID: 'bf63658a-9418-4f39-a6a1-5a0cedb6e429',
    },

    Comment: {
        // Please note that the environment value here is `string` type on Cloudflare Pages
        // If you want to disable the comment system, please delete the `COMMENT_ENABLE` environment variable not just set it to `false`.
        enable: !!import.meta.env.COMMENT_ENABLE,

        // please visit https://giscus.app/ to learn how to configure it.
        // You can also check out this article: https://liruifengv.com/posts/add-comments-to-astro/.
        // enable: true,
        giscus: {
            repo: 'Amiynarh/aminalawal-blog',
            repoId: 'R_kgDOOY0NQQ',
            category: 'Announcements',
            categoryId: 'DIC_kwDOOY0NQc4CpDRk',
            darkTheme: 'noborder_gray',
            lightTheme: 'light',
        },
    },

    Assets: {
        // S3 upload disabled - assets will be served directly from your hosting provider
        uploadAssetsToS3: false,
        // Optional: Keep this configuration commented out in case you want to enable S3 later
        /*
        config: {
            paths: ['assets'],
            endpoint: import.meta.env.S3_ENDPOINT as string,
            bucket: import.meta.env.S3_BUCKET as string,
            accessKey: import.meta.env.S3_ACCESS_KEY as string,
            secretAccessKey: import.meta.env.S3_SECRET_ACCESS_KEY as string,
            root: 'gblog',
        },
        */
    },
}

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'inLanguage': 'en-US',
        '@id': SITE.url,
        'url': SITE.url,
        'name': SITE.title,
        'description': SITE.description,
        'isPartOf': {
            '@type': 'WebSite',
            'url': SITE.url,
            'name': SITE.title,
            'description': SITE.description,
        },
    },
}
