import Navbar from "./Navbar";
import ScrollTop from "./scroll-top";
import Seo, { SeoProps } from "./Seo";

export type LayoutProps = SeoProps;

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => (
  <>
    <Seo {...props} />
    <Navbar />
    <main className="max-w-content my-5">{children}</main>
    <ScrollTop />
  </>
);

export default Layout;
