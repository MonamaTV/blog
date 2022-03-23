import axios from '../src/axios/axios';

export async function getPosts(per_page = 10, page = 1) {

    const { data } = await axios.get("/" ,{ 
        params: {
            page,
            per_page
        }
    });

    return data;
}

export async function getPost(slug) {

    const { data: story } = await axios.get(`/blog/${slug}`);

    return story;
}