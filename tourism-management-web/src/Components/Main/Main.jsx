
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles


// ..
AOS.init({
  offset: 200, // Offset (in pixels) from the original trigger point
  delay: 0, // Delay (in milliseconds) before animations start
  duration: 800, // Duration (in milliseconds) of animations
  easing: "ease", // Easing type ('ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out')
  once: true, // Whether animations should only happen once
  mirror: false, // Whether elements should animate out as they scroll out of view
  anchorPlacement: "top-bottom", // How elements are positioned relative to the scrollable area
  useClassNames: true, // Whether to add class names to elements
  initClassName: "aos-init", // Class name to be applied initially
  animatedClassName: "aos-animate", // Class name to be applied on animation
});

const Main = () => {
    return (
        <div>
            <div className='mx-auto  container'>
                <Header></Header>
                <Outlet></Outlet>  
            </div>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;