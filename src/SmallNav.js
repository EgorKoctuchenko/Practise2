import "./index.css";

function SmallNav(props) {
  const navClass = props.isMobileMenu
    ? "Small_Wrap is_go"
    : "Small_Wrap is_nogo";
  return (
    <nav className={navClass}>
      <li
        onClick={() => {
          props.SetSelectedPage(0);
          props.setMobileMenu(0);
        }}
      >
        Home
      </li>
      <li
        onClick={() => {
          props.SetSelectedPage(1);
          props.setMobileMenu(0);
        }}
      >
        Amenities
      </li>
      <li
        onClick={() => {
          props.SetSelectedPage(2);
          props.setMobileMenu(0);
        }}
      >
        Availability
      </li>
      <li
        onClick={() => {
          props.SetSelectedPage(3);
          props.setMobileMenu(0);
        }}
      >
        Floor Plans
      </li>
      <li
        onClick={() => {
          props.SetSelectedPage(4);
          props.setMobileMenu(0);
        }}
      >
        Gallery
      </li>
      <li
        onClick={() => {
          props.SetSelectedPage(5);
          props.setMobileMenu(0);
        }}
      >
        Neighborhood
      </li>
      <li
        onClick={() => {
          props.SetSelectedPage(6);
          props.setMobileMenu(0);
        }}
      >
        Contact Us
      </li>
      <li
        onClick={() => {
          props.SetSelectedPage(7);
          props.setMobileMenu(0);
        }}
      >
        Resident Services
      </li>
    </nav>
  );
}

export default SmallNav;
