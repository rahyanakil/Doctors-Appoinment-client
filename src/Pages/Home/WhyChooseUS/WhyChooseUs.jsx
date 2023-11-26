function WhyChooseUs() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center gap-2">
          <h2 className="animated-text text-center text-4xl mt-20 font-bold text-red-500">
            Why Choose Us
          </h2>
          <p className="animated-text text-center text-lg font-bold">
            Explore the factors that distinguish us from the competition.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap -mx-4">
          {/* Unique Expertise */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Unique Expertise
              </h3>
              <p className="mt-4 text-gray-600">
                Choose us for our unparalleled professional expertise. Our team
                comprises seasoned professionals with years of experience in
                medical sectors.
              </p>
            </div>
          </div>
          {/* More Points */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 font-bold">
                Flexible Appointment Options
              </h3>
              <p className="mt-4 text-gray-600">
                We believe in giving you the flexibility you need. Our platform
                supports various appointment types, from one-on-one meetings to
                group sessions.
              </p>
            </div>
          </div>
          {/* Exceptional Customer Service */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Customer Support
              </h3>
              <p className="mt-4 text-gray-600">
                Our top priority is your satisfaction. Our dedicated team is
                available 24/7 to assist you during your journey.
              </p>
            </div>
          </div>

          {/* Awards and Affiliations */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                User-Friendly Platform
              </h3>
              <p className="mt-4 text-gray-600">
                Enjoy the ease of appointment booking with our user-friendly
                platform. We have designed our website to be intuitive and
                accessible.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Seamless Integration
              </h3>
              <p className="mt-4 text-gray-600">
                Integrate our appointment booking system seamlessly into your
                existing tools and processes. We understand the importance of
                compatibility
              </p>
            </div>
          </div>

          {/* More Points */}
          <div className="w-full md:w-1/2 px-4 rounded-md hover:bg-sky-50 hover:shadow-md">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">
                Reliable and Secure
              </h3>
              <p className="mt-4 text-gray-600">
                We prioritize the security and reliability of your data. Our
                robust infrastructure ensures that your appointments and
                sensitive information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
