import MailSection from "@/components/layout/MailSection"
import ListOfOpportunities from "../components/layout/ListOfOpportunities"
import Navbar from "../components/layout/Navbar"
import OpportunitiesHero from "../components/layout/OpportunitiesHero"
import Partners from "@/components/layout/Partners";

import Footer from "@/components/layout/Footer"

const Opportunities = () => {
  return (
    <div>
      <Navbar/>
      <OpportunitiesHero/>
      
      <ListOfOpportunities/> 
      <Partners/>
      <MailSection/>
      <Footer/>
    </div>
  )
}

export default Opportunities
