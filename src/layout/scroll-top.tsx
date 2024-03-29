import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const ScrollTop: React.FC = () => {
  const [isTop, setTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      )
        setTop(false);
      else setTop(true);
    });
  });
  const onClickScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    !isTop && (
      <button
        type="button"
        className="fixed !outline-none text-white bottom-5 right-5 rounded-full bg-blue-500 hover:bg-blue-600 active:scale-110 transition-all w-10 h-10"
        aria-label="up!"
        onClick={onClickScroll}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
};

export default ScrollTop;
