import {useMediaQuery} from "react-responsive"
import Hero from "../component/Hero"
import Header from "../component/Header"
import MobileApp from "../component/MobileApp"
import MobileHero from "../component/MobileHero"

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
export default function Home() {
  return (
    <>
   <Desktop>
    <Header />
    <Hero/>
    </Desktop>
    <Mobile>
      <MobileApp/>
      <MobileHero />
    </Mobile>
    </>
  )
}
