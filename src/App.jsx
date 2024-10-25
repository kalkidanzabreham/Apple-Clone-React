import Header from "./components/Header"
import Footer from "./components/Footer"
import "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css"
import MainHighlight from "./components/MainHighlight"
import SecondSection from "./components/SecondSection"
import ThirdSection from "./components/ThirdSection"
import FourthSection from "./components/FourthSection"
import FifthSection from "./components/FifthSection"
import SixthSection from "./components/SixthSection"
import AlertSection from "./components/AlertSection"

function App() {
  return (
    <>
      <Header/>
      <MainHighlight/>
      <AlertSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
     <Footer/>
    </>
  )
}

export default App
