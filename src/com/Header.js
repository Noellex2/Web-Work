import { Link } from "react-router-dom";
import "./Header.css"



function Header() {
  return (
    <div className="nav">
        <Link to ="/">หน้าแรก</Link>
    </div>
  );
}

export default Header;