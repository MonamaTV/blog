import Image from "next/image";
import Meta from "../../src/components/utils/Meta";
const Blog = () => {

    return (
        <>  
            <Meta
                title="Improve Your Productivity When Coding"
                description={"Improve Your Productivity When Coding"}
            />
            <div className="blog-container">
                <div className="blog-header">
                    {/* The title of the article and the author */}
                    <h1>Improve Your Productivity When Coding</h1>
                    <small>Written by Monama Tadima</small>
                </div>
                <div className="content-image">
                    <Image width={"1000"} height={"440"} src="/display.jpg" />
                </div>
                <div className="content-blog">
                    <h2>Awareness</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <h2>Awareness</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <h2>Awareness</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda qui minima corporis eligendi iste quis obcaecati. Aperiam, quod. Atque consequuntur tempore esse itaque obcaecati, vero ratione dolore, amet laborum fuga natus. Dignissimos consequuntur iure, beatae nobis, voluptatum saepe praesentium error, asperiores voluptates nam sed! Eaque atque soluta perferendis ab.</p>
                    <h2>Awareness</h2>

                </div>
            </div>
        </>
    );
}

export default Blog;