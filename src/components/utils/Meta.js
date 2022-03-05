import Head from "next/head";

const Meta = ({title, image, description, tags = []}) => {
    return (
        <Head>
            <meta charset="utf-8" />
            <meta name="author" content="Monama Tadima Vincent" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* The dynamic */}
            <title>{ title }</title>
            {/* Generics Meta Tags */}
            <meta content="#171a33" name="theme-color" />
            <meta content={description} name="description" />
            <meta content={tags.toString().replace("#", ",")} name="keywords" />
            {/* Facebook Meta Tags -- Open Graph Protocol */}
            <meta property="og:image" content={image} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={"TadV"} />
            <meta property="og:type" content="website" />
            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Home of Monama TV - Software Developer, Blogger, YouTuber" />
            <meta name="twitter:description" content="Software Developer, Blogger, YouTuber, South African Software Engineer" />
            <meta name="twitter:image" content=""></meta>
        </Head>
    );
};

export default Meta;