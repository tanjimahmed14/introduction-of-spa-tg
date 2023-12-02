import { useLoaderData } from "react-router-dom";


const Useardetels = () => {
    const usear = useLoaderData();
    const {name} = usear;
    console.log(usear)

    return (
        <div>
            <h1>Usear detels name : {name}</h1>
        </div>
    );
};

export default Useardetels;