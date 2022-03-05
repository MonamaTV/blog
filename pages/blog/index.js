import BlogContent from "../../src/components/controls/BlogContent";
import Button from "../../src/components/controls/Button";
import TextField from "../../src/components/controls/TextField";
import Head from "next/head";
const Blogs = () => {

    return (
        <>
            <Head>

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