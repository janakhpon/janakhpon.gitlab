import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { PostType } from "@src/types";
import { TagContent } from "@lib/tags";
import css from "./Blog.module.css";
import BlogPost from "./blog";

const BlogBody: React.FC<{ posts: PostType[]; tags: TagContent[] }> = ({
  posts,
  tags,
}) => {
  const [searchValue, setSearchValue] = useState<string>();
  let searchInputRef: HTMLInputElement;

  const sortedByDate = posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  const filteredPosts = sortedByDate.filter(post => {
    return (
      post.title.toLowerCase().includes(searchValue) ||
      post.description.toLowerCase().includes(searchValue)
    );
  });

  return (
    <>
      <div className={css.search}>
        <span
          className={css.searchButton}
          onClick={() => searchInputRef.focus()}
        >
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          ref={input => {
            searchInputRef = input;
          }}
          onChange={() =>
            setSearchValue(
              searchInputRef.value.length >= 1
                ? searchInputRef.value.toLowerCase()
                : null
            )
          }
          type="text"
          className={css.searchInput}
          placeholder="search post by title or description ..."
        />
      </div>
      <p className={css.tagtitle}>Tags</p>
      <div className={css.tags}>
        {!!tags.length &&
          tags.map((val, i) => {
            return (
              <span className={css.tagicon} key={i}>
                <Link href={`/posts/tags/${val.slug}`}>
                  <a>{val.slug}</a>
                </Link>
              </span>
            );
          })}
      </div>

      <div>
        <section className="py-4 my-4">
          {!!filteredPosts.length ? (
            filteredPosts.map((post, i) => (
              <BlogPost post={post} key={i.toString()} />
            ))
          ) : searchValue ? (
            <h3 className="text-primary text-2xl">No post found! :{"("}</h3>
          ) : (
            posts.map((post, i) => <BlogPost post={post} key={i.toString()} />)
          )}
        </section>
      </div>
    </>
  );
};
export default BlogBody;
