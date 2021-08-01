import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHome,
  faPencilAlt,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export const Links: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
}) => {
  const { asPath } = useRouter();
  const isActive = (href: any) => asPath === href;
  const isBlogActive = () => {
    return (
      asPath.toString().startsWith("/posts/") ||
      asPath.toString().startsWith("/blog")
    );
  };
  return (
    <nav>
      <ul className={className ? className : `hidden md:flex`}>
        <li>
          <Link href="/" passHref>
            <a
              className={`${
                isActive("/") ? "font-bold" : ""
              } font-sans mr-1 px-4 py-2 rounded-md select-none border border-none hover:bg-secondary`}
            >
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            <a
              className={`${
                isBlogActive() ? "font-bold" : ""
              } font-sans mr-1 px-4 py-2 rounded-md select-none border border-none hover:bg-secondary`}
            >
              <FontAwesomeIcon icon={faPencilAlt} className="mr-2" /> Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <a
              className={`${
                isActive("/projects") ? "font-bold" : ""
              } font-sans mr-1 px-4 py-2 rounded-md select-none border border-none hover:bg-secondary`}
            >
              <FontAwesomeIcon icon={faCode} className="mr-2" /> Projects
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const Navigate: React.FC<{ isNavOpen: boolean; onClick: any }> = ({
  isNavOpen,
  onClick,
}) => (
  <div className="flex items-center">
    <button
      onClick={onClick}
      className="icon-button inline-block md:hidden"
      aria-label="open menu"
      type="button"
    >
      <FontAwesomeIcon icon={!isNavOpen ? faBars : faTimes} />
    </button>
    <Links />
  </div>
);

export default Navigate;
