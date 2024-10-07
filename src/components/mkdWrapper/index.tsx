import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const MarkdownWrapper: React.FC<{ content: string }> = ({ content }) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
                h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-medium mb-2">{children}</h3>,
                p: ({ children }) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
                a: ({ href, children }) => (
                    <a href={href} className="text-blue-500 hover:underline">
                        {children}
                    </a>
                ),
            }}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownWrapper;