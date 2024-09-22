import React, { useState } from 'react'
import "../LeftSide/Left.css"
import {AiOutlineFileImage, AiOutlineHome} from "react-icons/ai"
// import {AiOutlineSearch} from "react-icons/ai"
import {FiCalendar, FiCamera, FiTrendingUp} from "react-icons/fi"
import { Link } from 'react-router-dom';
import {BsBookmark} from "react-icons/bs"
import {RiFileListLine} from "react-icons/ri"
import {FiSettings} from "react-icons/fi"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import Profile from "../../assets/profile.jpg"
import { AssistantPhoto } from '@mui/icons-material';


const Left = ({profileImg,
               modelDetails
              }) => {

  const [btnActive,setBtnActive] =useState("#")
  const [logOutExit,setLogOutExit] =useState(false)


  return (
    <div className="L-features">
      <Link to="/home" style={{textDecoration:"none",color:"black"}}>
        <div onClick={()=>setBtnActive("#")} id='L-box' className={btnActive === "#" ? "active" : ""} >
          <AiOutlineHome className='margin'/>
          <span>Home</span>
        </div>
      </Link>
    
      <div id='L-box' onClick={()=>setBtnActive("#explore")} className={btnActive === "#explore" ? "active" : ""}>
        <FiCamera
          className='margin'/>
         <span>Photos</span>
      </div>
          
      <div id='L-box'  onClick={()=>setBtnActive("#trending")} className={btnActive === "#trending" ? "active" : ""}>
       <h1 className='notifi'>
          <FiCalendar 
           className='margin'/>
        </h1> 
        <span>Calendar</span>
      </div>

      <div id='L-box' onClick={()=>setBtnActive("#lists")} className={btnActive === "#lists" ? "active" : ""}>
        <RiFileListLine
        className='margin'/>
        <span>Lists</span>
      </div>

      {/* <div id='L-box' onClick={()=>setBtnActive("#saved")} className={btnActive === "#saved" ? "active" : ""}>
        <BsBookmark
         className='margin'/>
        <span>Saved</span>
      </div> */}

      <div id='L-box' onClick={()=>setBtnActive("#settings")} className={btnActive === "#settings" ? "active" : ""}>
        <FiSettings 
        className='margin'/>
        <span>Settings</span>
      </div>

      <div className="left-user">
        <Link to="/profile" style={{textDecoration:"none",color:"black"}}>
          <div className="user-name-userid">
            <img src={profileImg ? (profileImg) : Profile} alt="" />
              <div className='L-user'>
                <h1>{modelDetails ? (modelDetails.ModelName) : "Vijay"}</h1>
                <span>{modelDetails ? (modelDetails.ModelUserName) : "@vijay98"}</span>
            </div>
          </div>
        </Link>
        <MoreHorizIcon onClick={()=>setLogOutExit(!logOutExit)} className='vert'/>
          
          {logOutExit && (
            <div className="logOutExitContainer">
              <button>Add an existing account</button>
              <Link to="/" style={{width:"100%"}}><button>Log out @vijay98</button></Link>
            </div>
          )}
      </div>

    </div>
  )
}

export default Left