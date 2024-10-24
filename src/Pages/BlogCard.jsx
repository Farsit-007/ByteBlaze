/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import placeholder from '../assets/images/404.jpg'
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deleteBLog } from '../Utility/Index';
const BlogCard = ({ blog, deleteable,handledlt }) => {
    const { cover_image, id, title, description, published_at} = blog;
   
    return (
        <>
        <div className='flex relative'>
            <Link to={`/blog/${id}`} className="max-w-sm transition border-2 border-primary hover:border-secondary hover:scale-105  mx-auto group hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholder} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {deleteable && <div onClick={()=>handledlt(id)} className='absolute -top-5 -right-5  p-3 bg-primary rounded-full hover:scale-105'>
                <MdDelete size={20} className='text-secondary group-hover:text-primary'/>
                </div>}
        </div>
        </>

    );
};

export default BlogCard;