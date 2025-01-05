import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    const [listOfPosts, setListOfPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/posts').then(res => {
            setListOfPosts(res.data);
        });
    }, []);
    return (
        <>
            <div>
                {listOfPosts?.map((post, idx) =>
                    <Link to={`/post/${post?.id}`} key={idx} className='post'>
                        <div className='title'>{post?.title}</div>
                        <div className='body'>{post?.postText}</div>
                        <div className='footer'>{post?.username}</div>
                    </Link>
                )}
            </div>
        </>
    );
};
export default Home;
