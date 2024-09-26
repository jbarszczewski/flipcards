import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <h1>Heading</h1>
      <div className="flex items-center justify-between px-4 py-2">
        <Link to="/">Bla</Link>
        <div className="flex items-center gap-4"></div>
      </div>
    </div>
  );
};

export default Header;
