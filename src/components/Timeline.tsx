const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

export default function Timeline() {
  return (
    <div className="container mx-auto px-4 mt-5 mb-10">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2020 - Present</Year>
      <ul>
        <Step title="Joined Thibi">
          Working as a Web Developer at <a href="https://thibi.co/">Thibi</a>.
        </Step>
      </ul>
      <Divider />
      <Year>2015</Year>
      <ul>
        <Step title="Started at Technological University (Mawlamyine)">
          Enrolled in Information Technology course at TU(Mawlamyine).
        </Step>
      </ul>
      <Divider />
      <Year>2014</Year>
      <ul>
        <Step title="Graduated High School">
          Graduated from{" "}
          <a href="https://en.wikipedia.org/wiki/Basic_Education_High_School_No._9_Mawlamyine">
            No(9)Mawlamyine/Shin Maha Buddhaghosa National
          </a>{" "}
          School.
        </Step>
      </ul>
    </div>
  );
}
