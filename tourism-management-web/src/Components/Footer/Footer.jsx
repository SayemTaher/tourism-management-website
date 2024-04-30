
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <footer data-aos="fade-up" className="footer flex  flex-col justify-center items-center  p-10 bg-primaryWhite text-base-content">
  <div className="footer border-b-2 pb-10 border-dashed border-gray-300 flex justify-center gap-40 p-10  text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  </div>
  <div >
    <div className="flex flex-col container gap-5 justify-center items-center mb-5">
        <div><img src="https://i.ibb.co/fSzys6C/logo2.png" alt="" /></div>
        <div className="font-bold">Email - euroQuest23@gmail.com</div>
        <div className="flex items-center justify-center gap-2 text-2xl">
<FaLinkedin></FaLinkedin>
<FaInstagram></FaInstagram>
<FaFacebookF></FaFacebookF>

        </div>
    </div>
    
    <aside >
    <p>Copyright © 2024 - All right reserved by EuroQuest</p>
  </aside></div>
</footer>
    );
};

export default Footer;