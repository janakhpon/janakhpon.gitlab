import author from "@config/author-meta.json";
import Image from "next/image";
import { Section } from "@components/section";

const index: React.FC = () => (
  <Section id="technologies" header="Toolbox">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1">
      {author.techs.map((tech, index) => (
        <div
          className="border flex my-2 items-center py-2 px-6 select-none cursor-pointer rounded-md hover:shadow-md hover:transition-shadow"
          key={index.toString()}
        >
          <Image
            src={require(`public/icons/${tech.toLowerCase()}.svg`)}
            alt={tech.toLowerCase()}
            width={18}
            height={18}
          />
          <span className="text-center text-secondary font-semibold ml-2">
            {tech}
          </span>
        </div>
      ))}
    </div>
  </Section>
);

export default index;
