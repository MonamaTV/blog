import BlogContent from "../../src/components/controls/BlogContent";
import Button from "../../src/components/controls/Button";
import TextField from "../../src/components/controls/TextField";
import Head from "next/head";
const Blogs = () => {

    return (
        <>
            <Head>
                <title>Home of My Blog. Enjoy the blogs</title>
                <meta name="theme-color" content="#171a33" />
                <meta name="keywords" content="Software Developer, Blogger, YouTuber, South African Software Engineer" />
                <meta name="description" content="I am a South African developer who enjoys typing some weird coloful text on my computer. " />
                <meta property="og:image" content="https://a.storyblok.com/f/147977/500x500/09296ef791/cover-image.png" />
                <meta property="og:title" content="Enjoy the blog, I cover content that is relatively close to your bugs." />
                <meta property="og:site_name" content={"TadV"} />
                <meta property="og:type" content="website" />
                {/* Twitter Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Enjoy the blog, I cover content that is relatively close to your bugs." />
                <meta name="twitter:description" content="Software Developer, Blogger, YouTuber, South African Software Engineer" />
                <meta name="twitter:image" content="https://a.storyblok.com/f/147977/500x500/09296ef791/cover-image.png" />
            </Head>
            <div className="container ml-5">
                <div className="search-blogs">
                    <TextField styles={"search-input"} holder="Use keywords to search..."/>
                    <Button text={"Search Blogs"} styles="search-button" />
                </div>
                    <h2 className="enjoy">Enjoy the blogs</h2>
                <div className="blog">
                    <BlogContent />
                    <BlogContent />
                    <BlogContent />
                    <BlogContent />
                    <BlogContent />
                    <BlogContent />
                </div>
                <div className="blog-action">
                    <Button styles={"next-button"} text="Prev" />
                    <Button styles={"prev-button"} text="Next" />
                </div>
            </div>
        </>

    )
}

export default Blogs;