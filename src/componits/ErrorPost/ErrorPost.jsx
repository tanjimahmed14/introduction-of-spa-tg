import { Link, useRouteError } from "react-router-dom";


const ErrorPost = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1 className="text-red">Opps!!!!</h1> <br />
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3 className="mt-4">No file </h3><br />
                    <Link to='/'> <button className="bg-green-700 text-white">Go Home</button> </Link>
                </div>
            }
        </div>
    );
};

export default ErrorPost;