// import logo from './logo.svg';
import './App.css';
import "./style/readWrite.css"
import "./style/read.css"
import "./style/mobile.css"
import "./style/footer.css"
import "./style/login.css"
import "./style/publishPane.css"
import "./style/cover.css"
import "./style/editor.css"
import "./style/BookInfo.css"
import "./style/finalLanding.css"

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Read_write from './components/Read_write';
import Read from './components/Read';
import Footer from './components/Footer';
import Mobile from './components/Mobile';
import Login from './components/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Cover from './components/Cover';
import Editor from './components/Editor';
import BookInfo from './components/BookInfo';
import BackCover from './components/BackCover';
import FinalLanding from './components/FinalLanding';


function App() {
  return (
   
      <div className="App">
      {/* <Navbar/> */}
      {/* <Cover/> */}
      {/* <Hero/>      */}
      {/* <Editor/> */}
      {/* <BookInfo/> */}
      {/* <BackCover/> */}
      <FinalLanding/>
      <Read_write/>
      <Read/>
      <Mobile/>
      {/* <Footer/> */}
    </div>    
    
  );
}

export default App;
