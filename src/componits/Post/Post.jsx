import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const handelClickby = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className="border-2">
            <h3>Post of id : {id}</h3>
            <h4>{title}</h4>
            <Link to={`/post/${id}`}>Show detels</Link>
            <Link to={`/post/${id}`}> <button className="btn ml-5 mt-5 bg-green-700 text-white">Show more</button> </Link>
            <button className="bg-green-700 mt-4 text-white" onClick={handelClickby}>Click more info</button>
        </div>
    );
};

export default Post;