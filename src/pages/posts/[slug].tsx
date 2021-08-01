import { format, parseISO } from "date-fns";
import fs from "fs";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import React from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { PostType } from "@src/types";
import { postFilePaths, POSTS_PATH } from "@lib/mdxUtils";

const components = {
  Head,
  Link,
};

type PostPageProps = {
  source: MDXRemoteSerializeResult;
  frontMatter: PostType;
};

const PostPage = ({ source, frontMatter }: PostPageProps): JSX.Element => {
  return (
    <section className="py-4 my-4">
      <article>
        <h1 className="mb-2 text-gray-900 font-bold dark:text-white">
          {frontMatter.title}
        </h1>
        <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          Author : {frontMatter.author} ,{" "}
          {format(parseISO(frontMatter.date), "MMMM dd, yyyy")}
        </p>
        <p className="py-1 px-1 text-primary font-semibold">Tags</p>
        <div className="flex my-1 mb-10">
          {!!frontMatter.tags.length &&
            frontMatter.tags.map((val, i) => {
              return (
                <span
                  className="text-xs inline-block py-2 px-2 uppercase rounded text-primary bg-secondary uppercase last:mr-0 m-1"
                  key={i}
                >
                  <Link href={`/posts/tags/${val}`}>
                    <a>{val}</a>
                  </Link>
                </span>
              );
            })}
        </div>
        <div className="prose dark:prose-dark">
          <MDXRemote {...source} components={components} />
        </div>
      </article>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [require("remark-code-titles")],
      rehypePlugins: [mdxPrism, rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map(path => path.replace(/\.mdx?$/, ""))
    .map(slug => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
