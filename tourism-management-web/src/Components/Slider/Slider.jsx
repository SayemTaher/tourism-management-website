import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// Import Swiper styles
import 'swiper/swiper-bundle.css';

const Slider = () => {
  return (
    <div className='-z-10'>


      <style dangerouslySetInnerHTML={{
        __html: `
                .swiper-button-next, .swiper-button-prev {
                    color: #F4F8EC; 
                     
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 40px;
                    color: #ffffff;
                }
                .swiper-pagination-bullet {
                  background: #ffffff; 
                  opacity: 0.6; 
                  width: 8px; 
                  height: 8px; 
                  border-radius: 50%; 
              }
              
              .swiper-pagination-bullet-active {
                  background: #292900; 
                  opacity: 1; 
              }
            `}} />


      <Swiper data-aos="fade-up"
        spaceBetween={50}
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        <SwiperSlide><div data-aos="fade-up" className=" bg-[url('https://i.ibb.co/gzzsbvf/moritz-kindler-UVDp-Gn-TNg3c-unsplash.jpg')] bg-blend-multiply   bg-gray-300  bg-cover bg-no-repeat flex flex-col justify-center items-center min-h-[700px]">
          <div className=' p-5 mt-5 mb-10 flex backdrop-blur-sm border-2 border-gray-100 flex-col justify-center rounded-xl '>
            <div className='  lg:w-[800px] w-[400px] flex ml-10 mt-10 p-5 flex-col lg:flex-row  justify-center gap-5 items-center'>

              {/* <img className='w-[300px] h-[100px] object-cover'  src="https://i.ibb.co/2S9815f/Screenshot-2024-04-14-at-23-46-55-removebg-preview.png" alt="logo" /> */}
              <div>
              <span className='text-lg bg-primaryPurple p-3 rounded-xl text-white font-bold'>EuroQuest | The Netherlands</span>
              <h1 className='font-bold text-3xl mt-4 mb-4 lg:text-3xl md:text-2xl text-white'> A Land of Tulips and Canals</h1>
              <p className='text-white max-w-[400px] text-sm'>Discover the timeless beauty of the Netherlands, a country where modern innovation meets rich historical landscapes. From the vibrant tulip fields that paint the countryside in a burst of colors each spring to the iconic windmills and intricate canal networks of Amsterdam, the Netherlands offers a unique blend of natural beauty and urban sophistication.</p>
              <button className='btn mt-4 mb-4 hover:bg-primaryPurple bg-primaryNavy rounded-full w-[150px] text-white lg:w-[150px] text-center'>Register to view</button>
              </div>
              <div className='grid grid-cols-2 gap-2 backdrop-blur-md p-2 rounded-xl '>
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover' src="https://i.ibb.co/DgNGmkD/dennis-moller-946-Xe-Vr-YO2-E-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/jJwrSk1/gautam-krishnan-Ha4hncjl-VAI-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/smcY5JC/piotr-chrobot-M4-Ecjtm-E01k-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/NtXqjRJ/nicole-baster-SD9-XBRFig8-unsplash.jpg" alt="img" />

              </div>
            </div>






          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className=" bg-[url('https://i.ibb.co/1XgPgpL/henrique-ferreira-62-QRd-Doe44-M-unsplash.jpg')] bg-blend-multiply  bg-gray-300  bg-cover bg-no-repeat flex flex-col justify-center items-center min-h-[700px]">
          <div className=' p-5 flex mt-5 mb-10 backdrop-blur-sm border-2 border-gray-100 flex-col justify-center rounded-xl '>

            <div className='  lg:w-[800px] w-[400px] flex ml-10 mt-10 p-5 flex-col lg:flex-row gap-5  justify-center items-center'>

              {/* <img className='w-[300px] h-[100px] object-cover'  src="https://i.ibb.co/2S9815f/Screenshot-2024-04-14-at-23-46-55-removebg-preview.png" alt="logo" /> */}
              <div>
              <span className='text-lg bg-primaryPurple p-3 rounded-xl text-white font-bold'>EuroQuest | Spain</span>
              <h1 className='font-bold text-3xl mt-4 mb-4 lg:text-3xl md:text-2xl text-white'> A Fiesta of Culture,Cuisine, and Coastlines</h1>
              <p className='text-white  max-w-[400px] text-sm'>Embark on a passionate journey through Spain, a country with a
               zest for life that is palpable in every corner. Experience the fiery flamenco in
                Andalusia, indulge in the culinary delights of tapas and paella, 
                and bask in the sun on the stunning beaches of the Costa del Sol.</p>
              <button className='btn mt-4 mb-4 hover:bg-primaryPurple bg-primaryNavy rounded-full w-[150px] text-white lg:w-[150px] text-center'>Register to View</button>
              </div>
              <div className='grid grid-cols-2 gap-2 backdrop-blur-md p-2 rounded-xl '>
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover' src="https://i.ibb.co/9pSxzmM/anders-jilden-c-Yr-MQA7a3-Wc-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/LPmznkG/florian-wehde-WBGjg0-Ds-O-g-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/4phKrxm/henrique-ferreira-RKs-LQo-Snu-Tc-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/rfFyjp4/pedro-lastra-5g8d-Jvt-YRYA-unsplash.jpg" alt="img" />

              </div>
            </div>





          </div>
        </div></SwiperSlide>
        <SwiperSlide><div className=" bg-[url('https://i.ibb.co/rFJVKyj/jules-d-iqg3r-B-C2-VY-unsplash.jpg')] bg-blend-multiply  bg-gray-300  bg-cover bg-no-repeat flex flex-col justify-center items-center min-h-[700px]">
          <div className=' p-5 mt-5 mb-10 flex backdrop-blur-sm border-2 border-gray-100 flex-col justify-center rounded-xl '>
            <div className='  lg:w-[800px] w-[400px] flex ml-10 mt-10 p-5 flex-col lg:flex-row  justify-center gap-5 items-center'>

              {/* <img className='w-[300px] h-[100px] object-cover'  src="https://i.ibb.co/2S9815f/Screenshot-2024-04-14-at-23-46-55-removebg-preview.png" alt="logo" /> */}
              <div>
              <span className='text-lg bg-primaryPurple p-3 rounded-xl text-white font-bold'>EuroQuest | France</span>
              <h1 className='font-bold text-3xl mt-4 mb-4 lg:text-3xl md:text-2xl text-white'> Romance, Art, and Epicurean Delights</h1>
              <p className='text-white text-sm max-w-[400px]'>Fall in love with France, the land of gourmet cuisine, world-renowned art, and romantic landscapes. Stroll through the charming streets of Paris, explore the lush vineyards of Bordeaux, and uncover the glamorous Riviera coast. Frances rich history is reflected in its opulent palaces, medieval villages, and iconic landmarks like the Eiffel Tower and Mont Saint-Michel.</p>
              <button className='btn mt-4 mb-4 hover:bg-primaryPurple bg-primaryNavy rounded-full w-[150px] text-white lg:w-[150px] text-center'>Register to view</button>
              </div>
              <div className='grid grid-cols-2 gap-2 backdrop-blur-md p-2 rounded-xl '>
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover' src="https://i.ibb.co/TRPQs1w/alex-azabache-Fb-Yb7p-Gzas-Q-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/sqtghcJ/rodrigo-kugnharski-pd-Wc5wm1-STw-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/SrSvwQR/samuel-ferrara-XQZRB1-IU4-Dc-unsplash.jpg" alt="img" />
                <img className='h-[200px] w-[250px] rounded-xl shadow-xl object-cover'  src="https://i.ibb.co/ZYB48kp/ricardo-gomez-angel-Qgph3-Prf-OFY-unsplash.jpg" alt="img" />

              </div>
            </div>
          </div>
        </div></SwiperSlide>

      </Swiper>
    </div>
  )
}
export default Slider