import axios from '../src/axios/axios';

export async function getPosts(per_page = 10, page = 1) {

    const { data } = await axios.get("/" ,{ 
        params: {
            token: process.env.API_KEY,
            version: "draft",
            cv: 1647878475,
            page,
            per_page
        }
    });

    return data;
}

export async function getPost(slug) {

    const { data: story } = await axios.get(`/blog/${slug}`,{ 
        params: {
            token: process.env.API_KEY,
            version: "draft",
            cv: 1647878475
        }
    });

    return story;

}