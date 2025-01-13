import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3001/posts')
      .then(res => {
        setListOfPosts(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <div>
        {listOfPosts?.map((post, idx) => (
          <div
            onClick={() => navigate(`/post/${post?.id}`)}
            key={idx}
            className="post"
          >
            <div className="title">{post?.title}</div>
            <div className="body">{post?.postText}</div>
            <div className="footer">{post?.username}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
