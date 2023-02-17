// import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  return (
    <footer className="footer">
      <div className="resImg">
        <img
          alt="img"
          src="/icons_assets/LOGO.png"
          loading="lazy"
          className="f-img"
        />
      </div>
      <div className="resImg">
        <h2 className="title  headerText">Navigation</h2>
        {/* <Link to="/"> */}
        <p className="f-link">Home</p>
        {/* </Link> */}
        {/* <Link to="/about"> */}
        <p className="f-link">About</p>
        {/* </Link> */}
        <a href="/icons_assets/menu.webp" className="f-link" target="_blank">
          Menu
        </a>
        {/* <Link to="/booking"> */}
        <p className="f-link">Reservations</p>
        {/* </Link> */}
        {/* <Link to="/order"> */}
        <p className="f-link">Order</p>
        {/* </Link>
        <Link to="/login"> */}
        <p className="f-link">Login</p>
        {/* </Link> */}
      </div>
      <div>
        <h2 className="title headerText">Contact</h2>
        <p className="plain-text headerText">
          2395 Maldove Way, Chicago Illinois
        </p>
        <p className="plain-text headerText">(629)-243-6827</p>
        <a className="f-link" href="/">
          info@littlelemon.com
        </a>
      </div>
      <div>
        <h2 className="title headerText">Connect</h2>
        <a
          className="f-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/"
        >
          Facebook
        </a>
        <a
          className="f-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/"
        >
          Instagram
        </a>
        <a className="f-link" href="/">
          Join us!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
