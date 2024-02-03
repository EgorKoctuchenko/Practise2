import "./index.css";
import Nav from "./Navigation.js";
import Footer from "./Footer.js";
import f1 from "./foto/gallery/f1.png";
import f2 from "./foto/gallery/f2.png";
import f3 from "./foto/gallery/f3.png";
import f4 from "./foto/gallery/f4.png";
import f5 from "./foto/gallery/f5.png";
import f6 from "./foto/gallery/f6.png";
import f7 from "./foto/gallery/f7.png";
import f8 from "./foto/gallery/f8.png";
import f9 from "./foto/gallery/f9.png";
import f10 from "./foto/gallery/f10.png";
import f11 from "./foto/gallery/f11.png";
import f12 from "./foto/gallery/f12.png";
import f13 from "./foto/gallery/f13.png";

function Gallery(props) {
  return (
    <main>
      <div className="m_img_background">
        <Nav
          SetSelectedPage={props.SetSelectedPage}
          setMobileMenu={props.setMobileMenu}
          isMobileMenu={props.isMobileMenu}
        ></Nav>
        <section className="main_preview">
          <h5 className="m_p1">
            Discover Exciting Amenities That Compliment Your Lifestyle
          </h5>
          <h1 className="m_p2">GALLERY</h1>
          <h5 className="m_p3"></h5>
        </section>
      </div>
      <article className="g_gallery">
        <div>
          <img className="g_realSize1" src={f1} alt="" />
          <img className="g_realSize1" src={f2} alt="" />
        </div>
        <img className="g_realSize2" src={f3} alt="" />
        <div>
          <img className="g_realSize1" src={f4} alt="" />
          <img className="g_realSize1" src={f5} alt="" />
        </div>
        <img className="g_realSize2" src={f6} alt="" />
        <div>
          <img className="g_realSize1" src={f7} alt="" />
          <img className="g_realSize1" src={f8} alt="" />
        </div>
        <div>
          <img className="g_realSize1" src={f9} alt="" />
          <img className="g_realSize1" src={f10} alt="" />
        </div>
        <img className="g_realSize2" src={f11} alt="" />
        <div>
          <img className="g_realSize1" src={f12} alt="" />
          <img className="g_realSize1" src={f13} alt="" />
        </div>
      </article>
      <section className="div1">
        <h2>WE CAN’T WAIT TO SHOW YOU AROUND</h2>
        <button>Schedule a tour</button>
      </section>
      <Footer SetSelectedPage={props.SetSelectedPage}></Footer>
    </main>
  );
}

export default Gallery;
