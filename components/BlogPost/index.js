import React from "react";
import ReactMarkdown from "react-markdown";
import Head from "next/head";

const BlogPost = ({ content }) => {
  const firstLine = content.split("\n")[0].replace(/[*#]/g, "").trim();

  return (
    <div className="mb-8 bg-dark-200">
      <Head>
        <title>{firstLine}</title>
        <meta name="description" content={firstLine} />
      </Head>
      <div className="markdown p-4 border rounded">
        <h2 className="text-2xl mb-2">{firstLine}</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
