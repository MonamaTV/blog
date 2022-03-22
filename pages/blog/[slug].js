import Image from "next/image";
import Meta from "../../src/components/utils/Meta";
import { useState, useEffect } from 'react';
import { marked } from "marked";
import Loading from "../../src/components/ui/Loading";
import axios from "../../src/axios/axios";
import Content from "../../src/components/ui/Content";

export default function Blog({post}){

    const {
        story:{
            name,
            content: {
                body,
                description,
                thumbnail: {
                    filename
                }
            } 
        }
    } = post;
    return (
        !post ? <Loading /> :
        <>  
            <Meta
                title={name}
                description={description}
                image={filename}
            />
            <div className="blog-container">
                <div className="blog-header">
                    {/* The title of the article */}
                    
                    <h1>{name}</h1>
                </div>
                <div className="content-image">
                    {/* Image */}
                    <Image width={"1000"} height={"440"} src={filename || "/developer.png"} />
                </div>
                <div className="content-blog">
                    <div className="socials">
                        <p><a href="#"> <img src="/face.png" alt="" /></a>
                        <a href="#"><img src="/twitter.png" alt="" /></a>
                        <a href="#"><img src="/dm.png" alt="" /></a></p>
                    </div>

                    {/* Date published */}
                    
                    {/* Content */}
                   
                   
                   <Content body={body} />
                   
                    {/* <small>27 March 2022</small> */}


                </div>
            </div>
        </>
    );
};


export async function getStaticPaths() {

    const {data } = await axios.get("/",{ 
        params: {
            token: process.env.API_KEY,
            version: "draft",
            cv: 1647878475
        }
    });


    const paths = data.stories.map(story => {
        return `/blog/${story.slug}` 
    })

    return {
      paths,
      fallback: false
    };
  }


export async function getStaticProps({params}) {

    const { data: story } = await axios.get(`/blog/${params.slug}`,{ 
        params: {
            token: process.env.API_KEY,
            version: "draft",
            cv: 1647878475
        }
    });

    

    return {
      props: {
        post: story || {}
      }, // will be passed to the page component as props
    }
}