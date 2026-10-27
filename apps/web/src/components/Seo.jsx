import React from 'react';
import { Helmet } from 'react-helmet';

// Social + canonical tags only. The page's own <Helmet> must keep a literal
// <title> and <meta name="description">, because the llms.txt build step reads
// those two tags straight out of the page file's source.
const Seo = ({ title, description, image, url, siteName, type = 'website' }) => {
    const canonical = url || window.location.origin + window.location.pathname;
    const absoluteImage = image ? new URL(image, window.location.origin).href : undefined;

    return (
        <Helmet>
            <link rel="canonical" href={canonical} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content={type} />
            {siteName && <meta property="og:site_name" content={siteName} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {absoluteImage && <meta property="og:image" content={absoluteImage} />}
            <meta name="twitter:card" content={absoluteImage ? 'summary_large_image' : 'summary'} />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}
        </Helmet>
    );
}

export default Seo;

export { Seo };
