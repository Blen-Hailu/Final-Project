import React from "react";
import JoinUs from '../routes/JoinUs.jsx';
import { Profile } from '../components/Profile.jsx'
import './css/UtilityClasses.css';
import './css/Body.css';


export default function Body () {

 return (
  <>
  <div className="body" />
        <div className="wrapper">
            <section>
              <h3>cool copies and designs will come here</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat interdum varius sit amet mattis vulputate enim nulla. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Tristique magna sit amet purus. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Sed vulputate odio ut enim blandit. Tristique senectus et netus et malesuada fames. Quam vulputate dignissim suspendisse in est ante in nibh. Lorem sed risus ultricies tristique nulla aliquet enim tortor at. Bibendum ut tristique et egestas quis. Mi proin sed libero enim sed faucibus turpis in eu. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Purus faucibus ornare suspendisse sed. Facilisis leo vel fringilla est ullamcorper eget. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Purus sit amet luctus venenatis lectus magna. Eget mi proin sed libero enim sed. Nisl rhoncus mattis rhoncus urna.</p>
            </section>
        </div>

        <div className="wrapper">
          <Profile />
        </div>

        <div className="container">
           <JoinUs />
        </div>
  </>
)};