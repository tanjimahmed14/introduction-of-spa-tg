import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const DetelsPost = () => {
    const post = useLoaderData();
    const {id, body} = post;
    const navigate = useNavigate()
    const {postId} = useParams();
    console.log(postId)
    const handelClickbyback = () => {
        navigate(-1)
    }
    return (
        <div>
            <h1>{postId}</h1>
            <button onClick={handelClickbyback} className="bg-green-700 mt-4 text-white">Go back</button>
            <h2>Show post detels : {id}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default DetelsPost;