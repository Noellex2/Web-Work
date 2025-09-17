import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
        <h1>หน้าแรก</h1>

        <Link to ="/profile">เว็บโปรไฟล์</Link>
    </div>
  );
}

export default Home;
