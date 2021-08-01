import { useState } from "react";
import NavbarLeftItems, { Links } from "./navbar-left-items";
import NavbarRightItems from "./navbar-right-items";

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="lg:mt-20 mt-5 max-w-content bg-opacity-25">
      <div className="border-b py-2 flex justify-between">
        <NavbarLeftItems
          isNavOpen={isNavOpen}
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
        <NavbarRightItems />
      </div>
      <Links
        className={`my-2 ${
          isNavOpen ? "flex text-sm mb-2" : "hidden"
        } md:hidden justify-center`}
      />
    </header>
  );
};

export default Navbar;
