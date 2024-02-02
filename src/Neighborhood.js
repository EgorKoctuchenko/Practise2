import "./App.css";
import "./index.css";
import Nav from "./Navigation.js";
import Footer from "./Footer.js";
import f1 from "./foto/Neighborhood/f1.png";
import f2 from "./foto/Neighborhood/f2.png";
import f3 from "./foto/Neighborhood/f3.png";
import f4 from "./foto/Neighborhood/f4.png";

function Neighborhood(props) {
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
          <h1 className="m_p2">Neighborhood</h1>
          <h5 className="m_p3"></h5>
        </section>
      </div>
      <article className="n_Info">
        <h2>UPTOWN</h2>
        <p>
          The Wilson Club Apartments is located in Uptown at 1124 W. Wilson Ave.
          <br />
          <br />
          Situated between Edgewater and Wrigleyville, Uptown is an eclectic mix
          of Chicago’s rich history and booming future. Dating back to the
          1920s, Uptown has always been home to an eccentric music scene such as
          Al Capone’s favorite jazz bar, the Green Mill, the Aragon Ballroom
          where iconic bands such as Nirvana and Aerosmith have performed, and
          The Riviera where Grammy-award-winning artists Lenny Kravtiz and Bob
          Dylan have graced the stage. The neighborhood is also a hub for
          delicious global fare ranging from Ethiopian, Vietnamese, Thai,
          Chinese, Indian, and Mexican restaurants with authentic dishes.
          Chicago’s history is beautifully preserved in the art-deco and vintage
          buildings that accompany the tree-lined streets. Make sure to check
          out Montrose Harbor to admire the boats, let your pup run around (it’s
          one of the few dog-friendly beaches in the city!), catch a game of
          beach volleyball, or enjoy a meal and live music at The Dock.
        </p>
      </article>
      <form className="n_SecondForm">
        <h2>Get In Touch With Us</h2>
        <h5>
          Please feel free to contact us with any questions, comments or
          concerns you may have or to schedule a tour at The Wilson Club.
        </h5>
        <fieldset>
          <input type="text" placeholder="Full Name" />
        </fieldset>
        <fieldset>
          <input type="email" placeholder="Email" />
        </fieldset>
        <fieldset>
          <input type="tel" placeholder="Phone number" />
        </fieldset>
        <fieldset>
          <textarea className="c_input_mes" type="text" placeholder="Message" />
        </fieldset>
        <button>Submit</button>
      </form>
      <article className="n_Map">
        <form>
          <h2>Get In Touch With Us</h2>
          <h5>
            Please feel free to contact us with any questions, comments or
            concerns you may have or to schedule a tour at The Wilson Club.
          </h5>
          <fieldset>
            <input type="text" placeholder="Full Name" />
          </fieldset>
          <fieldset>
            <input type="email" placeholder="Email" />
          </fieldset>
          <fieldset>
            <input type="tel" placeholder="Phone number" />
          </fieldset>
          <fieldset>
            <textarea
              className="c_input_mes"
              type="text"
              placeholder="Message"
            />
          </fieldset>
          <button>Submit</button>
        </form>
      </article>
      <article className="n_Images">
        <div>
          <img className="g_realSize1" src={f1} alt="" />
          <img className="g_realSize1" src={f2} alt="" />
        </div>
        <div>
          <img className="g_realSize1" src={f3} alt="" />
          <img className="g_realSize1" src={f4} alt="" />
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

export default Neighborhood;
