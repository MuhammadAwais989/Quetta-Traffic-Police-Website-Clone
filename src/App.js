import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Header } from './Components/Header/header';
import { About } from './Components/Header/about/about';
import { HeroSection } from './Components/Hero/HeroSection';
import { SectionTwo } from './Components/Second-Section/Section-two';
import  CardSection  from './Components/Card-Section/CardSection'
import ThirdSec from './Components/Third-Section/ThirdSec';
import PublicMessage from './Components/Public-Message/PublixMessage';
import {Service} from './Components/Service-Section/Service'
import  AppSection  from './Components/App-Section/AppSection'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>

    <HeroSection/>
    <SectionTwo/>
    <CardSection/>
    <ThirdSec/>
    <PublicMessage/>
    <Service/>
    <AppSection/>
    </>
    
  );
}

export default App;
