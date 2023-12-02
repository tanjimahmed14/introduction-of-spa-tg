import { useLoaderData } from "react-router-dom";
import Usear from "../Usear/Usear";


const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1>Usear : {users.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    users.map(usear => <Usear key={usear.id} usear={usear} ></Usear>)
                }
            </div>
        </div>
    );
};

export default Users;