import React from 'react';
import {Link, NavLink,useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import EditorPane from "./EditorPane";

const Navbar = () => {

   const location = useLocation();
   const [publishPage, setPublishPage] = useState(false);
   const [editorPage, setEditorPage] = useState(false);

   useEffect(() => {

     if(location.pathname.includes("publish"))
     {
      //  console.log('publish');
      setPublishPage(true);
    }
    else {
      setPublishPage(false);

     }

   },[location]);

   useEffect(() => {

     if(location.pathname.includes("editor"))
     {
      //  console.log('publish');
      setEditorPage(true);
    }
    else {
      setEditorPage(false);
     }

   },[location]);

  // const navlinkStyles = ({isActive}) => {
  //   return {
  //     fontWeight : isActive ? "bold" : "normal"
  //   }
  //   console.log(isActive);
  // }

  // console.log(location);
  // console.log(location.pathname.includes("publish"));
  const [login, setLogin] = useState(false);
  const handleClick = () => {
    // console.log('logged in');
    setLogin(!login);
  }
  const  navStyles = () => {
  let style = 'normals';
  if(location.pathname.includes("publish"))
    {
      style = 'tabs'
    };
  return  (style);
  
}

  return (
    <div className='navbar'>
        <section className='navbar--logo--section'>
            <img className='logo--img' src=".\img\logo.png" alt="writro logo" />
           <Link to="/">
            <p 
            onClick={handleClick}
            className='logo--writro'>WRITRO</p>
           
           </Link>
        </section>

        { 
        // this section is for toggling publish section and editor section in navbar.
          editorPage ? <EditorPane/> : (
             <section className='sections'>
           <NavLink to="/publish" >

            <p 
            // style={navlinkStyles}
            className={navStyles}
            >Publish</p>

           </NavLink>
            <p>Services</p>
            <p>Read</p>
            <p>Shop</p>
        </section>

          )
        }
       
        <section className='navbar-btn' >

          {/* publishpage ?  */}
          {
            (publishPage  || editorPage ) ? (
               <button className="btn--signUp">Save & Continue</button> ) :

            (login ? null : (
              <>
              
              <Link to="/Login">
              <button 
              // onClick={setLogin(true)}
              onClick={handleClick}
              className="btn--login-nav">
                Login
                
              </button>
         
              </Link>
              <button className="btn--signUp">Sign Up</button>              
              </>

            ))
          }
         
        </section>
    </div>
  )
}

export default Navbar