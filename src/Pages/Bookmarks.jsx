import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { deleteBLog, getblogs } from "../Utility/Index";
import { Toaster } from 'react-hot-toast';
import EmptyMsg from "../Components/EmptyMsg";
const Bookmarks = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
        const storedb = getblogs();
        setBlogs(storedb);
    },[])
    const handledlt=(id)=>{
        deleteBLog(id);
        const storedb = getblogs();
        setBlogs(storedb);
    }
    if(blogs.length<1) return <EmptyMsg msg={'No Bookmark Available'} addr={'/blogs'} label={'Go To Blogs'}></EmptyMsg>
    return (
        <div className="grid justify-center px-4 sm:px-8 lg:px-12 py-16 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {
         blogs.map(blog => <BlogCard handledlt={handledlt} deleteable={true} key={blog.id} blog={blog}></BlogCard>)
        }
    <Toaster />
     </div>
    );
};

export default Bookmarks;