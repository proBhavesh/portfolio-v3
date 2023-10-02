import Link from "next/link";
import Head from "next/head";
import React from "react";
import { Container, DomHead, Footer, NavBar } from "../components";

const Blog = ({ blogs }) => {
  return (
    <div>
      <Container>
        <NavBar />
      </Container>
      <div className="bg-dark-300 text-white-100 py-8 px-24">
        <Head>
          <title>My Blog</title>
          <meta
            name="description"
            content="Welcome to my blog. Here you will find a collection of my thoughts, ideas, and tutorials."
          />
          <meta property="og:title" content="My Blog" />
          <meta
            property="og:description"
            content="Welcome to my blog. Here you will find a collection of my thoughts, ideas, and tutorials."
          />
        </Head>

        <h1 className="text-3xl mb-4">Blogs</h1>
        <ul className="flex flex-col items-start">
          {blogs.map((blog, index) => {
            const firstLine = blog.content
              .split("\n")[0]
              .replace(/[*#]/g, "")
              .trim();
            const preview = blog.content
              .split("\n")
              .slice(0, 3)
              .join(" ")
              .replace(/[*#]/g, "")
              .trim();
            const slug = blog.filename.replace(".md", "");
            return (
              <li key={index} className="mb-8 flex flex-col">
                <Link href={`/blog/${slug}`}>
                  <a className="text-green-100 hover:underline text-xl">
                    {firstLine}
                  </a>
                </Link>
                <p className="mt-2">{preview}...</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");

  const blogDirectory = path.join(process.cwd(), "data/blogs");
  const filenames = fs.readdirSync(blogDirectory);

  const blogs = filenames.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    return {
      filename,
      content: fileContents,
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
