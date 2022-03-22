import BlogContent from "../../src/components/controls/BlogContent";
import Button from "../../src/components/controls/Button";
import TextField from "../../src/components/controls/TextField";
import Head from "next/head";
import axios from "../../src/axios/axios";
import BlogsUI from "../../src/components/ui/Blogs";

const Blogs = ({posts}) => {

    return (
        <>
            <Head>
                <title>Home of My Blog. Enjoy the blogs</title>
                <meta name="theme-color" content="#171a33" />
                <meta name="keywords" content="Software Developer, Blogger, YouTuber, South African Software Engineer" />
                <meta name="description" content="I am a South African developer who enjoys typing some weird coloful text on my computer. " />
                <meta property="og:image" content="https://a.storyblok.com/f/147977/500x500/09296ef791/cover-image.png" />
                <meta property="og:title" content="I cover content that is relatively close to your bugs." />
                <meta property="og:site_name" content={"TadV"} />
                <meta property="og:type" content="website" />
                {/* Twitter Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="I cover content that is relatively close to your bugs." />
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
                    <BlogsUI posts={posts} />
                </div>
                <div className="blog-action">
                    <Button styles={"next-button"} text="Prev" />
                    <Button styles={"prev-button"} text="Next" />
                </div>
            </div>
        </>

    )
}



export async function getStaticProps() {

    const { data } = await axios.get("/" ,{ 
        params: {
            token: process.env.API_KEY,
            version: "draft",
            cv: 1647878475
        }
    });

    return {
      props: {
        posts:  data.stories || []
      }, // will be passed to the page component as props
    }
}

export default Blogs;