import "./index.css";
import Nav from "./Navigation.js";
import Footer from "./Footer.js";

function Avab(props) {
  return (
    <main>
      <div className="m_img_background">
        <Nav
          SetSelectedPage={props.SetSelectedPage}
          setMobileMenu={props.setMobileMenu}
          isMobileMenu={props.isMobileMenu}
        ></Nav>
        <section className="main_preview">
          <br />
          <h5 className="m_p1"></h5>
          <h1 className="m_p2">AVAILABILITY</h1>
          <h5 className="m_p3">
            At The Hazelton Apartments, you can find a quiet space to work, a
            rooftop to hang with friends, a gym to work up a sweat, and more!
          </h5>
        </section>
      </div>
      <section className="av_plans">
        <h2>FLOOR PLANS</h2>
        <p>Please contact us for utilities details.</p>
        <h5>Move-In/Administrative Fee: (non-refundable)</h5>
        <table border="1">
          <tr>
            <td className="av_first_table">Studio</td>
            <td className="av_second_table">$350.00</td>
          </tr>
          <tr>
            <td className="av_first_table">One Bedroom</td>
            <td className="av_second_table">$400.00</td>
          </tr>
          <tr>
            <td className="av_first_table">Two Bedroom</td>
            <td className="av_second_table">$500.00</td>
          </tr>
          <tr>
            <td className="av_first_table">Three Bedroom</td>
            <td className="av_second_table">$600.00</td>
          </tr>
          <tr>
            <td className="av_first_table">Four Bedroom</td>
            <td className="av_second_table">$800.00</td>
          </tr>
        </table>
      </section>
      <section className="av_fee">
        <h5>
          Application Fee: <br />
          <br /> $75.00 per applicant (non-refundable)
        </h5>
        <div>
          <div>
            <h5>Refine:</h5>
            <input className="av_checkbox" type="checkbox" />
            <h6>Studio</h6>
            <button>Update</button>
          </div>
          <div className="av_fixing_second">
            <h6>
              Do you want to search{" "}
              <span style={{ fontWeight: "600" }}>Apt #</span>
            </h6>
            <input type="text" placeholder="Input" />
            <button>Go</button>
          </div>
        </div>
      </section>
      <section className="av_plans">
        <h2>FLOOR PLANS</h2>
        <h5>(2 Avaiable)</h5>
        <table border="1">
          <tr>
            <td className="av_first_table" style={{ fontWeight: "600" }}>
              Bed
            </td>
            <td className="av_second_table">Studio</td>
          </tr>
          <tr>
            <td className="av_first_table" style={{ fontWeight: "600" }}>
              Bath
            </td>
            <td className="av_second_table">1</td>
          </tr>
          <tr>
            <td className="av_first_table" style={{ fontWeight: "600" }}>
              Sq.Ft.
            </td>
            <td className="av_second_table"></td>
          </tr>
          <tr>
            <td className="av_first_table" style={{ fontWeight: "600" }}>
              Rent
            </td>
            <td className="av_second_table">$1,428</td>
          </tr>
        </table>
        <button>Availability</button>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default Avab;
