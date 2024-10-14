// src/blog/BlogList.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { blogData } from './blogData';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';

const BlogList: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Helmet>
                <title>Blog - Eoghan Hogan</title>
                <meta name="description" content="Read insightful articles and blog posts by Eoghan Hogan about tech, projects, and more." />
                <link rel="canonical" href="https://eoghanhogan.ie/blog" />
            </Helmet>
            <section className="py-20">
                <div className="container mx-auto px-4 mb-4">
                    <Link to="/" className="text-blue-500 hover:underline">
                        &larr; Back to home
                    </Link>
                </div>
                <div className="container mx-auto px-4">
                    <h2 className="relative text-4xl font-bold text-center mb-8">
                        Blog
                        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-48 h-1 bg-blue-400 rotate-2"></span>
                    </h2>
                    <div className="grid gap-8">
                        {blogData.map((blog) => (
                            <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
                                <p className="text-gray-700 mb-4">{blog.description}</p>
                                <Link to={`/blog/${blog.slug}`} className="text-blue-500 hover:underline">
                                    Read more
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BlogList;
