

import { Link } from "react-router-dom";


const Usear = ({usear}) => {
    const {id, phone, name, username, email} = usear;
    // console.log(usear)
    return (
        <div className="border-2  p-4">
            <h3>Id : {id}</h3>
            <h4>Name : {name}</h4>
            <h4>Number : {phone}</h4>
            <h4>Usear Name : {username}</h4>
            <h4>Email : {email}</h4>
            <Link to={`/usear/${id}`}>Show Detels</Link>
        </div>
    );
};

export default Usear;