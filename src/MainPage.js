import "./App.css";
import "./index.css";
import Nav from "./Navigation.js";
import image4 from "./foto/foto4.png";
import Footer from "./Footer.js";

function MainPage(props) {
  return (
    <main>
      <div className="m_img_background">
        <Nav
          SetSelectedPage={props.SetSelectedPage}
          setMobileMenu={props.setMobileMenu}
          isMobileMenu={props.isMobileMenu}
        ></Nav>
        <section className="main_preview">
          <h5 className="m_p1">851 W Montrose Ave, Chicago, IL 60613</h5>
          <h1 className="m_p2">FIND AFFORDABLE UNIT</h1>
          <h5 className="m_p3">
            Located in Chicago’s historic Uptown neighborhood
          </h5>
        </section>
      </div>
      <div className="m_img_background2">
        {" "}
        <h2 className="m_second_title">The Hazelton</h2>
      </div>
      <section className="m_text_info">
        <h2>A HOME AS UNIQUE AS YOU</h2>
        <p>
          The Hazelton apartment building is located at 851 W Montrose Avenue in
          the Uptown neighborhood of Chicago. The building sits 2 blocks from
          Lake Shore Drive, Montrose Beach, and the lakefront. The property,
          once formerly a speakeasy during the days of Prohibition, now features
          top-of-the-line micro-studios.
        </p>
        <p>
          The recent renovation has added amenities such as a fitness center,
          community lounge, package room, and bike storage, complemented by an
          access control system. In the immediate neighborhood, you will find
          all necessities just steps away!
        </p>
        <p>
          Jewel-Osco is located 700 feet away, just around the corner. A variety
          of restaurants run along the intersection of Sheridan Road and
          Broadway Street, only 2 blocks from the property. The Wilson Red Line
          station is a short 8-minute walk and takes you to the Loop in under 30
          minutes.{" "}
        </p>
        <p>
          Whether you’re looking for a spot to grab a coffee, a park to run your
          pup, or an El stop to get around the city — it’s all within walking
          distance from The Hazelton. Nearby establishments include Target,
          Aldi, Starbucks, The Green Mill, Montrose Beach, and the Wilson
          Station.
        </p>
        <button>Schedule a tour</button>
      </section>
      <section className="m_fotos">
        <h5 className="m_h5_1">
          <div className="m_text">Gallery</div> <br />
          <div className="m_rect"></div>
        </h5>
        <h5 className="m_h5_2">
          <div className="m_text">Amenities</div> <br />
          <div className="m_rect"></div>
        </h5>
        <h5 className="m_h5_3">
          <div className="m_text">Floor Plans</div> <br />{" "}
          <div className="m_rect"></div>
        </h5>
      </section>
      <section className="m_units">
        <img className="m_img_left" src={image4}></img>
        <div className="m_text_right">
          <h2>AFFORDABLE UNITS</h2>
          <p>
            The Hazelton offer Low Income Housing Trust Fund units. These units
            require a special application and certain income requirements.
          </p>
          <button>
            View units{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15"
                stroke="white"
                stroke-width="1.67"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </section>
      <section className="div1">
        <h2>WE CAN’T WAIT TO SHOW YOU AROUND</h2>
        <button>Schedule a tour</button>
      </section>
      <Footer SetSelectedPage={props.SetSelectedPage}></Footer>
    </main>
  );
}

export default MainPage;
