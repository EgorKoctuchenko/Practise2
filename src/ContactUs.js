import "./App.css";
import "./index.css";
import Nav from "./Navigation.js";
import Footer from "./Footer.js";

function Contact(props) {
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
          <h1 className="m_p2">Contact Us</h1>
          <h5 className="m_p3"></h5>
        </section>
      </div>
      <section className="c_form">
        <h2>Get In Touch With Us</h2>
        <form>
          <fieldset>
            <label>First Name</label>
            <input type="text" placeholder="Input" />
          </fieldset>
          <fieldset>
            <label>Last Name</label>
            <input type="text" placeholder="Input" />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input type="email" placeholder="Input" />
          </fieldset>
          <fieldset>
            <label>Phone</label>
            <input type="tel" placeholder="+000" />
          </fieldset>
          <fieldset>
            <label>Message</label>
            <textarea
              className="c_input_mes"
              type="text"
              placeholder="Hi! We are Lookscout..."
            />
          </fieldset>
          <button>Submit</button>
        </form>
      </section>
      <Footer SetSelectedPage={props.SetSelectedPage}></Footer>
    </main>
  );
}

export default Contact;
