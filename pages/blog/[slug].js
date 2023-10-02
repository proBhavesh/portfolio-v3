import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, DomHead, Footer, NavBar } from "../../components";
import BlogPost from "../../components/BlogPost";

const SingleBlog = ({ blogs }) => {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find((b) => b.filename.replace(".md", "") === slug);
  if (!blog) return <div>Blog not found</div>;

  return (
    <div>
      <Container>
        <NavBar />
      </Container>
      <div className="bg-dark-300 text-white-100 py-8 px-24">
        <BlogPost content={blog.content} className="bg-dark-200" />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const fs = require("fs");
  const path = require("path");

  const blogDirectory = path.join(process.cwd(), "data/blogs");
  const filenames = fs.readdirSync(blogDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

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

export default SingleBlog;
