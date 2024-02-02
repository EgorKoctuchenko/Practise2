import "./App.css";
import "./index.css";
import MainPage from "./MainPage";
import Contact from "./ContactUs";
import Resident from "./ResidentServices";
import Availability from "./Availability";
import React, { useState, useEffect } from "react";
import FloorPlans from "./FloorPlans";
import Gallery from "./Gallery";
import Amenities from "./Amenities";
import Neighborhood from "./Neighborhood";
import SmallNav from "./SmallNav";

function App() {
  const [selectedPage, SetSelectedPage] = useState(0);
  const [isMobileMenu, setMobileMenu] = useState(0);

  function disableScroll() {
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    document.body.style.overflow = "visible";
  }

  useEffect(() => {
    if (isMobileMenu === 1) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [isMobileMenu]);
  return (
    <div>
      <SmallNav
        SetSelectedPage={SetSelectedPage}
        isMobileMenu={isMobileMenu}
        setMobileMenu={setMobileMenu}
      ></SmallNav>
      {selectedPage === 0 && (
        <MainPage
          SetSelectedPage={SetSelectedPage}
          setMobileMenu={setMobileMenu}
          isMobileMenu={isMobileMenu}
        ></MainPage>
      )}
      {selectedPage === 1 && (
        <Amenities
          SetSelectedPage={SetSelectedPage}
          setMobileMenu={setMobileMenu}
          isMobileMenu={isMobileMenu}
        ></Amenities>
      )}
      {selectedPage === 2 && (
        <Availability
          SetSelectedPage={SetSelectedPage}
          setMobileMenu={setMobileMenu}
          isMobileMenu={isMobileMenu}
        ></Availability>
      )}
      {selectedPage === 3 && (
        <FloorPlans
          SetSelectedPage={SetSelectedPage}
          setMobileMenu={setMobileMenu}
          isMobileMenu={isMobileMenu}
        ></FloorPlans>
      )}
      {selectedPage === 4 && (
        <Gallery
          SetSelectedPage={SetSelectedPage}
          setMobileMenu={setMobileMenu}
          isMobileMenu={isMobileMenu}
        ></Gallery>
      )}
      {selectedPage === 5 && (
        <Neighborhood
          SetSelectedPage={SetSelectedPage}
          setMobileMenu={setMobileMenu}
          isMobileMenu={isMobileMenu}
        ></Neighborhood>
      )}
      {selectedPage === 6 && (
        <Contact
          SetSelectedPage={SetSelectedPage}
          setMobileMenu={setMobileMenu}
          isMobileMenu={isMobileMenu}
        ></Contact>
      )}
      {selectedPage === 7 && (
        <Resident
          SetSelectedPage={SetSelectedPage}
          setMobileMenu={setMobileMenu}
          isMobileMenu={isMobileMenu}
        ></Resident>
      )}
    </div>
  );
}

export default App;
