import person from "../../../assets/images/about_us/person.jpeg";
import parts from "../../../assets/images/about_us/parts.png";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 rounded-lg right-5 top-1/2 shadow-2xl absolute border-8 border-lime-500"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-red-700 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            Intelligent & Optimize Patient Care and Nursing Efficiency
          </h1>
          <p className="py-6">
            Care Connects provide comprehensive support to hospitals, optimizing
            work efficiency and delivering superior care quality through the
            integration of Nursing Dashboards with a user-friendly design. The
            <p className="py-6">Patient system enhances patient service and satisfaction by offering
            a wide range of services and information.</p>
          </p>
          <button className="btn btn-warning">Get More Info</button>
          
        </div>
      </div>
    </div>
  );
};

export default About;
