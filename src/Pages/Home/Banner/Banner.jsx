import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.webp";
import img3 from "../../../assets/images/banner/3.jpeg";
import img4 from "../../../assets/images/banner/4.webp";


const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-rgb[(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/3 pl-12">
            <h2 className="text-5xl font-bold">
              <span className="text-green-400">Care Connect</span> at your Service & Always  By Your Side.
            </h2>
            <p>
            Bringing Healthcare Of International Standards Within The Reach Of Every Individual.
            </p>
            <div className="flex">
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Health Plan
              </button>
            </div>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-rgb[(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/3 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available but the
              majority have suffered alteration in some formation
            </p>
            <div className="flex">
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-rgb[(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/3 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available but the
              majority have suffered alteration in some formation
            </p>
            <div className="flex">
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center top-0 left-0 h-full bg-gradient-to-r from-[#151515] to-rgb[(21,21,21,0)]">
          <div className="text-white space-y-7 w-1/3 pl-12">
            <h2 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p>
              There are many variations of passages of available but the
              majority have suffered alteration in some formation
            </p>
            <div className="flex">
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
