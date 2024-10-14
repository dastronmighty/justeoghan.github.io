// src/blog/blogData.ts
export const blogData = [
    {
        id: 1,
        title: "My First Blog Post",
        slug: "my-first-blog-post",
        description: "This is the description for my first blog post.",
        contentFile: "/content/blog/first_blog.md",
        datePublished: "2024-10-01"
    },
    {
        id: 2,
        title: "React Tips and Tricks",
        slug: "react-tips-tricks",
        description: "Learn some cool React tips and tricks.",
        contentFile: "/content/blog/react_tips.md",
        datePublished: "2024-01-02"
    },
    {
        id: 3,
        title: "Test Blog",
        slug: "test-blog",
        description: "Learn some cool React tips and tricks.",
        contentFile: "/content/blog/test_blog.md",
        datePublished: "2024-01-01"
    },
].sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
