import Image from "next/image";
import Meta from "../../src/components/utils/Meta";
import { useState, useEffect } from 'react';
import { marked } from "marked";
import Loading from "../../src/components/ui/Loading";
const Blog = () => {

    const [blogs, setBlogs] = useState({});


    const fetchData = async () => {
        const response = await fetch("https://api.storyblok.com/v2/cdn/stories/blog/how-to-get-away-with-murder?version=draft&token=02qsmk4aZw5wQ80l47fOGwtt&cv=1647774940");
        const data = await response.json();
        console.log(data);
        setBlogs(data?.story?.content);
        console.log(marked(data?.story?.content.body))
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        true ? <Loading /> :
        <>  
            <Meta
                title="Improve Your Productivity When Coding"
                description={"Improve Your Productivity When Coding"}
            />
            <div className="blog-container">
                <div className="blog-header">
                    {/* The title of the article and the author */}
                    
                    <h1>Improve Your Productivity When Coding</h1>
                </div>
                <div className="content-image">
                    <Image width={"1000"} height={"440"} src={blogs?.thumbnail?.filename || "/developer.png"} />
                </div>
                <div className="content-blog">
                    <div className="socials">
                        <p><a href="#"> <img src="/face.png" alt="" /></a>
                        <a href="#"><img src="/twitter.png" alt="" /></a>
                        <a href="#"><img src="/dm.png" alt="" /></a></p>
                    </div>

                    
                   
                   
                   
                   
                    {/* <small>27 March 2022</small>

                    <h2>Awareness</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <h2>Awareness</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <h2>Awareness</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <h2>Awareness</h2> */}

                </div>
            </div>
        </>
    );
}

export default Blog;