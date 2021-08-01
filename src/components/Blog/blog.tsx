import Link from "next/link";
import { format, parseISO } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { PostType } from "@src/types";
import css from "./Blog.module.css";

const BlogPost: React.FC<{ post: PostType }> = ({
  post: { date, description, title, slug, tags },
}) => (
  <article className={css.article}>
    <Link href={`/posts/${slug}`}>
      <a>
        <h2 className="text-blue-500 hover:underline text-3xl">{title}</h2>
      </a>
    </Link>
    <p className="m-0">{description}</p>
    <div className="flex">
      {!!tags.length &&
        tags.map((val, i) => {
          return (
            <span className={css.tagicon} key={i}>
              <Link href={`/posts/tags/${val}`}>
                <a>{val}</a>
              </Link>
            </span>
          );
        })}
    </div>
    <div className="mt-2 text-primary">
      <span className="hover:text-secondary">
        <FontAwesomeIcon icon={faClock} />{" "}
        {format(parseISO(date), "MMMM dd, yyyy")}
      </span>
    </div>
  </article>
);

export default BlogPost;
