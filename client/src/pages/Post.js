import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const [postObj, setPostObj] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then(res => {
            setPostObj(res?.data);
        });
        axios.get(`http://localhost:3001/comments/${id}`).then(res => {
            setComments(res?.data);
        });
    }, [id]);
    return (
        <>
            <div className="postPage">
                {/* Post */}
                <div className="leftSide">
                    <div className="post" id="individual">
                        <div className="title">{postObj?.title}</div>
                        <div className="body">{postObj?.postText}</div>
                        <div className="footer">{postObj?.username}</div>
                    </div>
                </div>
                {/* Comment Section */}
                <div className="rightSide">
                    <div className="addCommentContainer">
                        <input type="text" name="" placeholder="Comment..." id="" />
                        <button>Add Comment</button>
                    </div>
                    <div className="listOfComments">
                        {comments?.map((comment, idx) => (
                            <div key={idx} className="comment">
                                {comment?.commentBody}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Post;
