import { Section } from "@components/section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitlab,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import css from "@styles/hero.module.css";
import Link from "next/link";
import { Text } from "@context/index";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Hero = () => {
  return (
    <Section header="Hi there!," id="hero">
      <p className="prose dark:prose-dark">
        <Text tid="hero_intro_1" />
        <b>
          <Text tid="hero_name" />
        </b>
        <Text tid="hero_intro" />
        <Link href="/about">
          <a>
            {" "}
            <Text tid="hero_readmore" />{" "}
          </a>
        </Link>
      </p>
      <div className="mt-5 grid lg:block grid-cols-2">
        <a
          className={css.social}
          href={`https://www.linkedin.com/in/zin-min-htut-oo-385651136`}
          //@ts-ignore
          style={{ "--social-color": "#0A66C2" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} /> {capitalize("linkedin")}
        </a>
        <a
          className={css.social}
          href={`https://twitter.com/ja_nakh`}
          //@ts-ignore
          style={{ "--social-color": "#1DA1F2" }}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} /> {capitalize("twitter")}
        </a>
        <a
          className={css.social}
          href={`https://github.com/janakhpon`}
          //@ts-ignore
          style={{ "--social-color": "#718096" }}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} /> {capitalize("github")}
        </a>
        <a
          className={css.social}
          href={`https://gitlab.com/janakhpon`}
          //@ts-ignore
          style={{ "--social-color": "#FA7035" }}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGitlab} /> {capitalize("gitlab")}
        </a>
      </div>
    </Section>
  );
};

export default Hero;
