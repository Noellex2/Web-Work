import React, { useState } from "react";
import  "./Profile.css";

const images = [
  { id: 1, src: "https://picsum.photos/id/1011/300/200", title: "เว็บโปรไฟล์" },
  { id: 2, src: "https://picsum.photos/id/1015/300/200", title: "เว็บโปรไฟล์ร้านค้า" },
  { id: 3, src: "https://picsum.photos/id/1016/300/200", title: "เว็บร้านอาหาร" },
  { id: 4, src: "https://picsum.photos/id/1020/300/200", title: "เว็บโรงแรม" },
];

function Profile() {
    const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery">
      {images.map((img) => (
        <div className="card" key={img.id} onClick={() => setSelectedImage(img)}>
          <img src={img.src} alt={img.title} />
          <h3>{img.title}</h3>
        </div>
      ))}

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h2>{selectedImage.title}</h2>
            <div className="modal-buttons">
              <button onClick={() => alert("ดูรายละเอียด " + selectedImage.title)}>ดู</button>
              <button onClick={() => alert("สั่งซื้อ " + selectedImage.title)}>ซื้อ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
