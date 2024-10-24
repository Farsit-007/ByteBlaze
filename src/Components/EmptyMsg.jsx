/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const EmptyMsg = ({ msg, addr, label }) => {
    return (
        <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center gap-5 pb-16">
            <p>{msg}</p>
            <Link to={addr} className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-primary border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">{label}</span>
            </Link>
        </div>
    );
};

export default EmptyMsg;