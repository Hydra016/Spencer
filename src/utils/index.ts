import { Blog } from "@/types";

export function filterBlogs(blogs: Blog[]): Blog[] {
    return blogs.filter(function(this: { blog: Blog }, blog: Blog) {
        return blog.id !== this.blog.id;
    }).map(function(this: { blog: Blog }, blog: Blog) {
        return {
            id: blog.id,
            title: blog.title,
            content: blog.content.substring(0, 100) + '...'
        };
    });
}
