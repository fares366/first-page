


import CatalogueHeader from "./catalogueheader";
import HeroContent from "./herocontent";
import StatsRow from "./staterow";
import Howitworks from "./howitworks";
import Isitfor from "./isitfor";
import Testimonials from "./testimonial";
import Cta from "./cta";
import Footer from "./footer";

function App() {
  return (
    <>
      
      <div className="bg-glow"></div>

      {/* --- HEADER --- */}
     
	  <CatalogueHeader />

      {/* --- MAIN CONTENT --- */}
      <main>
        {/* --- Hero Section --- */}
        <HeroContent />
        {/* --- Stats Row --- */}
        <StatsRow />
		{/* --- How It Works --- */}
        <Howitworks />
        {/* --- Who It's For --- */}
       <Isitfor />
		{/* --- Testimonials --- */}
    	<Testimonials />
        {/* --- CTA Section --- */}
        <Cta />
      </main>

      {/* --- FOOTER --- */}
      <Footer /> 
    </>
  );
}

export default App;