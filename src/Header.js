import  logo from './image/logo1.png';
import './css/header.css';
import '../src/css/all.css';
function Header() {
  return (
    <div className='container'>
      <div className="header">
          <div className='header-1'>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="search">
              <input type="text" placeholder="Search. . ." />
              {/* <button> */}
              <i class="fa-solid fa-magnifying-glass"></i>
              {/* </button> */}
            </div>
            <div className="home-icons">
            <p><i class="fa-regular fa-heart"></i></p>
            <p><i class="fa-regular fa-bell"></i></p>
            <p><i class="fa-solid fa-cart-plus"></i></p>
            </div>
            <div className="personal">
          {/* <i class="fa-brands fa-facebook "></i> */}
          <p><i class="fa-regular fa-circle-user"></i></p>
            </div>
        </div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>CATEGORY</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </div>
      <div section-home>
          <h1>WELCOME TO GCM</h1>
          <p>Global Chemical Manufacture Discover The Science of Beauty</p>
          
      </div>
    </div>
  );
}

export default Header;
