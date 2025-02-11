import { Link } from "wouter";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 text-2xl font-bold">Flipcards</div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/flipcards">List</Link>
          </li>
          <li>
            <Link to="/flipcards/cards/random">Random</Link>
          </li>
          <li>
            <Link to="/flipcards/cards/add">Add</Link>
          </li>
          <li>
            <Link to="/flipcards/cards/sync">Sync</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
