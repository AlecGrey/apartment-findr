// import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
  <Navbar variant="light" bg='light' className="border-bottom justify-content-center">
    <p className='h2 font-weight-light navbar-title'>Apartment Browser</p>
    {/* Compare listings <b>in the same neighborhood at different price points</b>.
      <br></br>Compare listings <b>at the same price point across different neighborhoods</b>  */}
  </Navbar>
  )
};

export default Header;
