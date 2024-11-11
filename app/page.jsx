import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">Hello I'am <br /><span className="text-accent">Mohammed Ifthar</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/resume.pdf" download>
              <Button variant ="outline" size="lg" className="flex items-center gap-2 uppercase" >
                <span>Download CV</span>
                <FiDownload  className="text-xl"/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent flex items-center justify-center rounded-full text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
            
          </div>

          {/* image */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats/>
      
    </section>
  )
}

export default Home
