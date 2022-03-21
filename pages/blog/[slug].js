import Image from "next/image";
import Meta from "../../src/components/utils/Meta";
import { useState, useEffect } from 'react';
import { marked } from "marked";
import Loading from "../../src/components/ui/Loading";
import useAxios from "../../src/axios/axios";

export default function Blog({posts}){

    console.log({posts});
    return (
        true ? <Loading /> :
        <>  
            <Meta
                title="Improve Your Productivity When Coding"
                description={"Improve Your Productivity When Coding"}
            />
            <div className="blog-container">
                <div className="blog-header">
                    {/* The title of the article */}
                    
                    <h1>Improve Your Productivity When Coding</h1>
                </div>
                <div className="content-image">
                    {/* Image */}
                    <Image width={"1000"} height={"440"} src={blogs?.thumbnail?.filename || "/developer.png"} />
                </div>
                <div className="content-blog">
                    <div className="socials">
                        <p><a href="#"> <img src="/face.png" alt="" /></a>
                        <a href="#"><img src="/twitter.png" alt="" /></a>
                        <a href="#"><img src="/dm.png" alt="" /></a></p>
                    </div>

                    {/* Date published */}
                    
                    {/* Content */}
                   
                   
                   
                   
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
};


export async function getStaticPaths() {

    const data = await useAxios().get("https://api.storyblok.com/v2/cdn/stories/",{ 
        params: {
            token: process.env.API_KEY,
            version: "draft",
            cv: 1647878475
        }
    });

    return {
      paths: [
        { params: { slug: "something"} }
      ],
      fallback: false
    };
  }


export async function getStaticProps() {

    const { data } = await useAxios().get("https://api.storyblok.com/v2/cdn/stories/",{ 
        params: {
            token: process.env.API_KEY,
            version: "draft",
            cv: 1647878475
        }
    });

    return {
      props: {
        posts: data.stories || []
      }, // will be passed to the page component as props
    }
}