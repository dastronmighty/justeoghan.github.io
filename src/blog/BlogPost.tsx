// src/blog/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from './blogData';
import Footer from '../components/footer';
import MarkdownWrapper from '../components/mkdWrapper';
import { Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogData.find((b) => b.id === parseInt(id ?? '0'));
    const [content, setContent] = useState<string>('');
    const nextBlog = blog ? blogData.find((b) => b.id === blog.id + 1) : undefined;
    const previousBlog = blog ? blogData.find((b) => b.id === blog.id - 1) : undefined;


    useEffect(() => {
        if (blog) {
            fetch(blog.contentFile)
                .then((response) => response.text())
                .then((text) => setContent(text))
                .catch((error) => console.error(`Error fetching blog content: `, error));
        }
    }, [blog]);

    if (!blog) {
        return <p>Blog post not found.</p>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <section className="py-20">
                <div className="container mx-auto px-4 mb-4">
                    <Link to="/blog" className="text-blue-500 hover:underline">
                        &larr; Back to blogs
                    </Link>
                </div>
                <div className="container mx-auto px-4">
                    <h1 className="relative text-4xl font-bold mb-8 inline-block">
                        {blog.title}
                        <span className="absolute left-0 right-0 transform bottom-[-10px] w-full h-1 bg-blue-400 rotate-2"></span>
                    </h1>
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <MarkdownWrapper content={content || 'Loading...'} />
                    </div>
                </div>
                <div className="container mx-auto px-4 text-center mt-8">
                    {previousBlog && (
                        <Link to={`/blog/${previousBlog.id}`} className="text-blue-500 hover:underline mr-8">
                            &larr; Previous Blog: {previousBlog.title}
                        </Link>
                    )}
                    {nextBlog && (
                        <Link to={`/blog/${nextBlog.id}`} className="text-blue-500 hover:underline">
                            Next Blog: {nextBlog.title} &rarr;
                        </Link>
                    )}
                </div>

            </section >
            <Footer />
        </div>
    );
};

export default BlogPost;
