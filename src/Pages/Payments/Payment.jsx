
import Marquee from "react-fast-marquee";
import Img1 from "../../assets/images/Payment/01.png"
import Img2 from "../../assets/images/Payment/02.png"
import Img3 from "../../assets/images/Payment/03.png"
import Img4 from "../../assets/images/Payment/04.png"
import Img5 from "../../assets/images/Payment/05.png"
import Img6 from "../../assets/images/Payment/06.png"



const Payment = () => {
  return (
    <div className="mt-12">
   <div className="text-center">
                <h3 className="text-3xl font-bold text-red-500 gap-4">Pay Here</h3>
                <p className="font-bold text-xl">Now you can grab exclusive health packages from our partnered hospitals and clinics.</p> 
            </div>
     <div className="mt-5">
     <Marquee gradient={true} gradientWidth={100} pauseOnClick={true} className=" rounded-xl p-7 snap-none mb-3">
        <img className="h-20" src={Img1} alt="Payment" />
        <img className="h-20" src={Img2} alt="Payment" />
        <img className="h-20" src={Img3} alt="Payment" />
        <img className="h-20" src={Img4} alt="Payment" />
        <img className="h-20" src={Img5} alt="Payment" />
        <img className="h-20" src={Img6} alt="Payment" />
        <img className="h-20" src={Img3} alt="Payment" />
        <img className="h-20" src={Img1} alt="Payment" />
        <img className="h-20" src={Img6} alt="Payment" />
     
      </Marquee>
     </div>
    </div>
  );
};

export default Payment;
