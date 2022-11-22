import { fetchProfile } from "../fetch-data";
import {useState, useEffect} from 'react';

const ProfileData = function (props) {
  const [profileData, setProfileData] = useState();
  const fetchData = async function () {
    
    const data = await fetchProfile();
      
      setProfileData(data);
  };

  useEffect(() => {
      fetchData();
  }, []);
  const imageUrl = profileData && `https://cataas.com${profileData.url}`;

  return (
    <>
      <div className= "container">

          <div className="card">
              <img className="card_image" src={require('./profile-pic-female.jpg')} alt ="profile icon"/>
              <p className="card_name">{ProfileData}</p>

                        
              <div className="grid-container">

                <div className="grid-child-jobs-done">
                            number of jobs done
                </div>

                <div className="grid-child-reviews">
                            reviews
                </div>

              </div>
                      
              <button className="btn draw-border">Message</button>

          </div>
        
    
      </div>
    
  
    {profileData && <img className="Cat" src={imageUrl} alt="A cat" />}	
    {!profileData && <div className="Cat no-image" />}
    <button onClick={fetchData}>Fetch a cat</button>
    
  </>
  );
  };
  
  
  export default ProfileData;