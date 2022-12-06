import React, { useState, useEffect } from "react";
import Header from './Header.jsx';
import { fetch_cooks } from '../query.js';

export const Profile = (props) => {
   const [cooksData, setCooksData] = useState();
   const fetchData = async function (response) {
      const data = await response.json(fetch_cooks);
      setCooksData(data);
  };

  useEffect(() => {
      fetchData();
  }, []);

  // const imageUrl = catData && `https://cataas.com${catData.url}`;
return (
  <>
  <Header />
  < div className = "container">
          <div className="card">
            {cooksData && cooksData.data.zestii_cooks.map((data)=>(
              <div key = {data.id}>
                  {/* <img className="card_image" src={'data:image/jpg,'+  profile_picture} alt ="data icon"/> */}
                   <p>{data.ad_3_city}</p>
                    <p className="card_name" >{data.nick_name}</p>
                     <div className="grid-container">
                      <p>{data.bio}</p>
                    </div>
              </div>
            ))}
      </div>
      {/* {!cooksData && <div className="no-image" />} */}
  </div>
  </>
);
}
