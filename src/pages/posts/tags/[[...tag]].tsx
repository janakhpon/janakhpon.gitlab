import { GetStaticPaths, GetStaticProps } from "next";
import { getPostsByTag } from "@lib/api";
import { listTags } from "@lib/tags";
import { PostType } from "@src/types";
import BlogLayout from "@components/Blog";

type TagPage = {
  posts: PostType[];
  currentTag: string;
};

const PostPage = ({ posts, currentTag }: TagPage): JSX.Element => {
  let passtag = [
    {
      name: currentTag,
      slug: currentTag,
    },
  ];
  return <BlogLayout posts={posts} tags={passtag} />;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params.tag.toString();
  const posts = getPostsByTag(tag);
  return {
    props: {
      posts: posts,
      currentTag: tag,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags().map(tag => {
    return { params: { tag: [tag.slug] } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export default PostPage;
