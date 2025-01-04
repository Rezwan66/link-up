import { useParams } from "react-router-dom";

const Post = () => {
    const { id } = useParams();
    return (
        <>
            <div>
                <h2> HELLO I Am Post #{id} </h2>
            </div>
        </>
    );
};
export default Post;
