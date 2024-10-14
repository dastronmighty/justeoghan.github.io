// src/blog/BlogPost.tsx
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { blogData } from './blogData';
import Footer from '../components/footer';
import MarkdownWrapper from '../components/mkdWrapper';
import { Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const blog = blogData.find((b) => b.slug === slug);
    const [content, setContent] = useState<string>('');
    const nextBlog = blog ? blogData.find((b) => new Date(b.datePublished) < new Date(blog.datePublished)) : undefined;
    const previousBlog = blog ? blogData.find((b) => new Date(b.datePublished) > new Date(blog.datePublished)) : undefined;

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
            <Helmet>
                <title>{blog.title} - Eoghan Hogan Blog</title>
                <meta name="description" content={blog.description} />
                <link rel="canonical" href={`https://eoghanhogan.ie/blog/${blog.id}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": blog?.title,
                        "description": blog?.description,
                        "author": {
                            "@type": "Person",
                            "name": "Eoghan Hogan",
                        },
                        "url": `https://eoghanhogan.ie/blog/${blog?.id}`,
                        "datePublished": blog?.datePublished,
                    })}
                </script>
            </Helmet>
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
                        <Link to={`/blog/${previousBlog.slug}`} className="text-blue-500 hover:underline mr-8">
                            &larr; Previous Blog: {previousBlog.title}
                        </Link>
                    )}
                    {nextBlog && (
                        <Link to={`/blog/${nextBlog.slug}`} className="text-blue-500 hover:underline">
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
