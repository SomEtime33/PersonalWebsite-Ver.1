
import './App.css';

//homepage components
import Header from './compotents/Homepages/Header'
import Navbar from './compotents/Homepages/Navbar'
import About from './compotents/Homepages/About'
import Contact from './compotents/Homepages/Contact'
import Education from './compotents/Homepages/Education'
import Experience from './compotents/Homepages/Experience'
import Footer from './compotents/Homepages/Footer'
import Login from './compotents/Homepages/Login'
import Projects from './compotents/Homepages/Projects'
import Register from './compotents/Homepages/Register'

//admin components
import Admin from './compotents/adminComponents/Admin'

//edit components
import EditAbout from './compotents/editComponents/EditAbout';
import EditEducation from './compotents/editComponents/EditEducation';
import EditProjects from './compotents/editComponents/EditProjects';
import EditExperience from './compotents/editComponents/EditExperience';

//import {Route, Routes} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'


function App() {
  
    // <div className="App">
    //   {/* navbar components */}
 
    //  {/* <Navbar/> */}
    //  <Routes>
    //   <Route exact path = "/" element ={<Header/>}>
    //  </Routes>
    //  {/* <Route exact path = "/" components ={About}/>
    //  <Route exact path = "/" components ={Education}/>
    //  <Route exact path = "/" components ={Projects}/>
    //  <Route exact path = "/" components ={Experience}/>
    //  <Route exact path = "/" components ={Contact}/>
    


    //  <Route exact path = "/login" components ={Login}/>
    //  <Route exact path = "/admin" components ={Admin}/>
    //  <Route exact path = "/edit/:id" components ={Education}/>

    //  <Route exact path = "/editEducation/:id" components ={EditEducation}/>
    //  <Route exact path = "/editProject/:id" components ={EditProjects}/>
    //  <Route exact path = "/editExperience/:id" components ={EditExperience}/>
    //  <Route components = {Footer} /> */}
     


    // </div>

    return (
      <div className="App">
      <Navbar/>
      <Routes>       
       {/* <Route exact path = "/"  element = {<Header/>}/>  */}
       <Route  exact path = "/" element ={<About/>}/>
       {/* <Route exact path="/" element = {<Education/>}/> */}
      {/* //  <Route exact path = "/" element ={<Education/>}/>
      //  <Route exact path = "/" element ={<Projects/>}/>
      //  <Route exact path = "/" element ={<Experience/>}/>
      //  <Route exact path = "/" element ={<Contact/>}/> */}
       </Routes>


      {/* <Route exact path = "/login" components ={Login}/>
      <Route exact path = "/admin" components ={Admin}/>
      <Route exact path = "/edit/:id" components ={Education}/>

      <Route exact path = "/editEducation/:id" components ={EditEducation}/>
      <Route exact path = "/editProject/:id" components ={EditProjects}/>
      <Route exact path = "/editExperience/:id" components ={EditExperience}/>
      <Route components = {Footer} /> */}
           
          
         
      
      </div>
      );
   
  
}

export default App;
