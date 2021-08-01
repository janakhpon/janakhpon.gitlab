import { GetStaticProps } from "next";
import { getAllPosts } from "@lib/api";
import { listTags, TagContent } from "@lib/tags";
import { PostType } from "@src/types";
import BlogLayout from "@components/Blog";

type BlogProps = {
  posts: PostType[];
  tags: TagContent[];
};

export const Blog = ({ posts, tags }: BlogProps): JSX.Element => {
  return <BlogLayout posts={posts} tags={tags} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["date", "description", "slug", "title", "tags"]);
  const tags = listTags();
  return {
    props: { posts, tags },
  };
};

export default Blog;
