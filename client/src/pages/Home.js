import axios from "axios";
import { useEffect, useState } from 'react';
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
                    <div key={idx} className='post'>
                        <div className='title'>{post?.title}</div>
                        <div className='body'>{post?.postText}</div>
                        <div className='footer'>{post?.username}</div>
                    </div>
                )}
            </div>
        </>
    );
};
export default Home;
