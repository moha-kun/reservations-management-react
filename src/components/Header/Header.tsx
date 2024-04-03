import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" to="users">Users</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active" to="/rooms">Rooms</Link>
      </li>
    </ul>
  );
}

export default Header;
