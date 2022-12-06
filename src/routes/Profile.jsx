import React from "react";
import Header from 'Header.jsx';
import Footer from 'Footer.jsx';

export default function Profile () {
  const [pic, setPic] = useState();
  const [nickName, setNickName] = useState();
  const [bio, setBio] = useState();
  const [sigDish, setSigDish] = useState();
  const [dishPic, setDishPic] = useState();

  const fetchData = async function () {
      const data = await response.json(fetchCooksData);
      setCatData(data);
  };
  useEffect(() => {
      fetchData();
  }, []);
  const imageUrl = catData && `https://cataas.com${catData.url}`;
};
return (
  <>
  <Header />
  <div>Profile Picture Here</div>
  <div>Bio text</div>
  {/* {catData && <img className="Cat" src={imageUrl} alt="A cat" />}	 */}
      {/* {!catData && <div className="Cat no-image" />} */}

  <Footer />
  </>
);

