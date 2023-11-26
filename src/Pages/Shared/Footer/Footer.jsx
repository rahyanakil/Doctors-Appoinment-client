import logo from '../../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#14532D]   text-white rounded ">
      <aside>
       <img src={logo} alt=""/>
        <p>
          Care Connects.
          <br />
          Providing reliable tech since 2022.
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Hospitals</a>
        <a className="link link-hover">Drugs</a>
        <a className="link link-hover">Medicines</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Clinics</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
