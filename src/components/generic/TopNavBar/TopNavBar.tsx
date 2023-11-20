import { Link } from 'react-router-dom';
import './TopNavBar.css';

const TopNavBar = () => {
  return (
    <nav className="top-nav-bar">
      <Link to="/home">Home</Link>
      <Link to="/programs">Programs</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default TopNavBar;