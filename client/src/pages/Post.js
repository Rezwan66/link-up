import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    const [postObj, setPostObj] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then(res => {
            setPostObj(res?.data);
        });
    }, [id]);
    return (
        <>
            <div className="postPage">
                <div className="leftSide">
                    <div className="post" id="individual">
                        <div className="title">{postObj?.title}</div>
                        <div className="body">{postObj?.postText}</div>
                        <div className="footer">{postObj?.username}</div>
                    </div>
                </div>
                <div className="rightSide">Comment Section</div>
            </div>
        </>
    );
};
export default Post;
