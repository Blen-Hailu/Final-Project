import React from 'react';
import { fetchProfile } from "../fetch-data";
import {useState, useEffect} from 'react';
import './profile.css';

const AddProfileData = function (props) {
  const [profileData, setProfileData] = useState();
  const fetchData = async function () {
    
    const data = await fetchProfile();
      
      setProfileData(data);
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <>
      < div className = "container">

          <div className="card">
            {profileData && profileData.data.profile_freelancer_table.map((profile)=>(
              
            
                <div key = {profile.id}>
                      <img className="card_image" src={'data:image/jpg,'+ profile.picture} alt ="profile icon"/>
                    
                    <p className="card_name" > {profile.first_name} {profile.last_name}</p>

                              
                    <div className="grid-container">

                      <div className="grid-child-jobs-done">
                          <p>{profile.service_type}</p>
                      </div>

                      <div className="grid-child-reviews">
                                  <p>{profile.zipcode}, {profile.city}</p>
                      </div>

                    </div>
        
                  </div>
            ))}
      </div>
    </div>
    
              


    </>
  )
};
  export default AddProfileData;

  