import './App.css'
import CallToAction from './CallToAction'
import Categories from './Categories'
import Featuers from './Featuers'
import Footer from './Footer'
import NavBar from './NavBar'
import Slider from './Slider'

function App() {
  return (
    <div id='home' className="App relative">
      <NavBar className={' absolute top-0 left-1/2 -translate-x-1/2 w-full z-10'} />
      <Slider />
      <CallToAction className={' my-20'} />
      <Featuers className={' my-20'} />
      <Categories className={' my-20'}/>
      <Footer className={' mt-20'} />
    </div>
  )
}

export default App
