import { Section } from "@components/section";
import tools from "@config/tools.json";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Section header="" className="mt-10 -mb-6">
        <div className=" flex justify-between items-center relative">
          <div className=" w-full md:flex-row-reverse md:justify-between">
            <div className="text-left">
              <div className="h-36 w-36 rounded-full ring-4 ring-offset-8 ring-offset-white dark:ring-offset-coolGray-900 ring-teal-500 dark:ring-teal-400 select-none">
                <Image
                  src={require(`../public/profile.jpg`)}
                  alt="Ja Nakh Pon"
                  className="rounded-full ring-offset-1 ring-offset-white dark:ring-offset-coolGray-900 ring-teal-500 dark:ring-teal-400 select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section header="Hi There,">
        <p className="prose dark:prose-dark">
          I am <b>Ja Nakh Pon (Zin Min Htut Oo) </b>. I am a developer at{" "}
          <b>
            <a href="https://thibi.co/">Thibi</a>
          </b>{" "}
          and learning my best to be a fullstack developer. I mostly use
          Javascript and Typescript for web development and my favorite
          programming language is Golang. Also, I am passionate about learning
          NLP( Natural Language Processing). Btw, I am also a big big anime fan:
          my favorite animes are (One Piece, Naruto, Golden Boy, Ghibi&aposs
          movies, GTO, Hajime no ippo, Bleach and ... almost every good anime
          out there).
        </p>
        <br />
        <p className="prose dark:prose-dark">
          portfolio : &nbsp
          <span className="prose dark:prose-dark">
            <a href="https://janakhpon.github.io/">janakhpon.github.io</a> |{" "}
            <a href="https://janakhpon.gitlab.io/">janakhpon.gitlab.io</a>
          </span>
        </p>
        <p className="prose dark:prose-dark">
          email : &nbsp
          <span className="prose dark:prose-dark">
            <a href="mailto:minchanhtutoo@gmail.com">
              &nbspminchanhtutoo@gmail.com
            </a>
          </span>
        </p>
      </Section>

      <Section header="Most Used Languages & Tools">
        <div className="prose dark:prose-dark">
          Even though I love <b>Golang</b> I prefer to use{" "}
          <b>
            <a href="https://stackshare.io/feed">MERN stack</a>
          </b>
          {" and "}{" "}
          <b>
            <a href="https://jamstack.org/">JAM stack</a>
          </b>{" "}
          for web development and <b>Python</b> for data scraping&wrangling:
          <ul>
            {tools.mostused.sort().map(ext => (
              <li key={ext.item}>
                <a
                  href={`${ext.item}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ext.name}
                </a>
              </li>
            ))}
          </ul>
          These are my favorite tools and I have to use them pretty often to get
          the jobs done and also to learn new things based on them.
        </div>
      </Section>
      <Section header="Rarely Used Languages & Tools">
        <div className="prose dark:prose-dark">
          I love to use{" "}
          <b>
            <a href="https://actix.rs/">ActixWeb</a>
          </b>
          {" for backend development and "}{" "}
          <b>
            <a href="https://svelte.dev/">Svelte</a>
          </b>{" "}
          for frontend development in my side projects.
          <ul>
            {tools.rarelyused.sort().map(ext => (
              <li key={ext.item}>
                <a
                  href={`${ext.item}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ext.name}
                </a>
              </li>
            ))}
          </ul>
          I used to work with these tools whether in the learning process or in
          side projects.
        </div>
      </Section>
    </>
  );
};

export default About;
