import {posts_Blog_v1, title_Blog_v1, description_Blog_v1} from "./index.json"

const contentBlog_v1 = {
    title_Blog_v1,
    description_Blog_v1,
    posts_Blog_v1
};
export const get = () => {
    return {
        body: {
            contentBlog_v1
        }
    };
};
