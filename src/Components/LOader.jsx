import { ScaleLoader } from "react-spinners";

const LOader = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
            <ScaleLoader  size={100} color='#F92FD3'></ScaleLoader>
        </div>
    );
};

export default LOader;