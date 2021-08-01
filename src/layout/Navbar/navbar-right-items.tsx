import { useRouter } from "next/router";
import ThemeToggle from "@components/theme-toggle";
import FlagToggle from "@components/flag-toggle";
import Image from "next/image";

const NavbarGithub = () => {
  const { asPath } = useRouter();
  const isActive = (href: any) => asPath === href;
  return (
    <div className="flex items-center">
      <a href={`/about`}>
        <button
          aria-label="Github Profile"
          className={`${
            isActive("/about")
              ? "icon-button ring-2 dark:ring-offset-coolGray-900 ring-teal-500 dark:ring-teal-400 select-none"
              : "icon-button"
          }`}
          type="button"
        >
          <Image
            src={require(`public/favicon-32x32.png`)}
            alt="JaNakh Pon"
            width={22}
            height={22}
          />
        </button>
      </a>
      <ThemeToggle />
      <FlagToggle />
    </div>
  );
};

export default NavbarGithub;
