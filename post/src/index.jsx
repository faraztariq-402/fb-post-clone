import React from "react";
import  ReactDOM  from "react-dom";
import  './index.css'
import profilePic from './profile.jpg'
import profilePic2 from './virat profile.jpg'
import profilePic3 from './time profile.jpg'
import profilePic4 from './smit.jpg'




import postPic from './fb.jpg'
import postPic2 from './virat.jpg'
import postPic3 from './time.jpg'
import postPic4  from './saylani.jpg'


import {HandThumbsUp, ChatLeftText, Share } from 'react-bootstrap-icons';
function Post(props){

    return <div className="parent">
        <div className="head">
           <div className="image"><img src={props.profilePic} alt="" height={50} width={50}/></div> 
          <div className="ownerAndTime"> <p className="owner" style={{marginBottom: "0.2rem"}}>{props.ownerName}</p>
            <span className="date" >{props.date}</span>
            </div> 
        </div>
        <div className="post"><p className="postText">{props.post}</p>
        <img src={props.postPic} alt=""/>
        
        </div>
        <hr />
        <div className="likeCommentShare">
        
            <div className="like"><HandThumbsUp /> Like</div>
            <div className="comment"><ChatLeftText/>Comment</div>
            <div className="share"><Share/>Share</div>
        </div>
        {/* <hr /> */}
    </div>
}
ReactDOM.render(<div>
<Post profilePic = {profilePic3}
 ownerName = "Time Collegiate"
  date="15 March 2020 · "
  post={
    "Time Collegiate New batches for IX and X starting from 4th Sept 2023 For details call us at: 03163336556"
  } postPic = {postPic3}/> 
  <Post
  profilePic={profilePic2}
  ownerName="Virat Kohli"
  date="18 August at 15:01"
  post="Forever grateful 🙏"
  postPic={postPic2}
/>
<Post profilePic = {profilePic4}
 ownerName = "Saylani Mass It Training Program"
  date="15 August 2022
  ·"
   post = "Dear Youth of Karachi! On the occasion of this independence SMIT has brought up an amazing opportunity for all of you (Male & Female) who want to be entrepreneurs in the field of Graphic Designing. We are delighted to announce the course of Graphic Designing Batch-08 an amazing opportunity for the Karachites to groom themselves..Huge opportunity for those who want to change their life Admissions Starting from 15th August 2022 to 20th August 2022… See more" postPic = {postPic4}
/> 
    <Post profilePic = {profilePic}
 ownerName = "Faraz Tariq"
  date="25 Aug 2023"
   post = "Ashes series will win by India said mighty Ab devilliers 😜" postPic = {postPic}
/> 
</div>

, document.querySelector("#root"))