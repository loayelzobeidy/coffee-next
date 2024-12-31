export default function LandingBody(){
    return (     
        <>
        <section id="home" className="py-12 mt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold header-top">
            Welcome to Brew Haven
          </h2>
          <p className="mt-4 header-middle">
            Your favorite spot for fresh, artisan coffee and cozy vibes.
          </p>
          <button className="mt-8 px-6 py-2 bg-celadon  text-chinoise font-bold rounded header-bottom">
            Explore Our Menu
          </button>
        </div>
      </section>
      <section id="about" className="py-12 about-us">
        <div className="container mx-auto text-center flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="mt-4">
              Brew Haven was founded with the mission to bring the best coffee
              experience to our community. Our beans are sourced from ethical
              farms, and each cup is brewed to perfection.
            </p>
            <p className="mt-2">
              Whether you're here for a quick espresso or to relax with
              friends, we strive to make every visit special.
            </p>
          </div>
        </div>
      </section>
      </>
   )
}