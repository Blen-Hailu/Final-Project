import React, { useState, useEffect } from "react";
import { fetch_cooks } from '../query.js';
import './css/UtilityClasses.css';
import './css/Profile.css';

export const Profile = (props) => {
   const [cooksData, setCooksData] = useState();
   const fetchData = async function () {
      const data = await fetch_cooks();
      setCooksData(data);
  };

  useEffect(() => {
      fetchData();
  }, []);

  // const imageUrl = catData && `https://cataas.com${catData.url}`;
return (
  <>
    < div className="container">
      <h2>Meet our cooks!</h2>
        <div className="profile_wrapper">
          {cooksData && cooksData.data.zestii_cooks.map((data)=>(
           <div key = {data.nick_name}>
            <div className="grid-container">
              <div className="card_image">WIP - No IMG</div>
              {/* <img className="card_image" src={'data:image/jpg,'+  profile_picture} alt ="data icon"/> */}
               <p className="card_name" >{data.nick_name}</p>
               <p>{data.bio}</p>
              <p>{data.ad_3_city}</p>
            </div>


       </div>
        ))}
  </div>
      {/* {!cooksData && <div className="no-image" />} */}
  </div>
  </>
);
}
