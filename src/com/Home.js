import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
        <h1>หน้าแรก</h1>
        <button>
        <Link to ="/profile">เว็บโปรไฟล์</Link>
        </button>
        <button>
          <Link to ="/cart">ตระกล้าสินค้า</Link>   
          </button>
        <button>
          <Link to ="/checkout">หน้าชำระเงิน</Link>   
          </button>

    </div>
  );
}

export default Home;
