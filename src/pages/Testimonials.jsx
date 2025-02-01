import Footer from "@/components/layout/Footer"
import Hadrumet from "@/components/layout/Hadrumet"
import Navbar from "@/components/layout/Navbar"
import TestimonialsHero from "@/components/layout/TestimonialsHero"
import TestimonialsVideos from "@/components/layout/TestimonialsVideos"

const Testimonials = () => {
  return (
    <div>
        <Navbar />
        <TestimonialsHero/>
        <TestimonialsVideos/>
        <Hadrumet />
        <Footer />
      
    </div>
  )
}

export default Testimonials
