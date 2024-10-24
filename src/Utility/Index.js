import toast from 'react-hot-toast';

const getblogs = () =>{
    const storedblog =  localStorage.getItem('blogs');
    if(storedblog){
        return JSON.parse(storedblog);
    }
    return [];
}

const saveBlog = (singleblog) =>{
    const blogs = getblogs();
    const isExists = blogs.find(b => b.id === singleblog.id)
    if(isExists){
       return toast.error('Already Exist')
    }
    blogs.push(singleblog);
    localStorage.setItem('blogs',JSON.stringify(blogs));
    toast.success('Blog Bookmarked')
}

const deleteBLog = (id) =>{
    const blogs = getblogs();
    const remaining = blogs.filter(b => b.id !== id);
    localStorage.setItem('blogs',JSON.stringify(remaining))
    toast.success('Blog Removed')
}

export {getblogs,saveBlog,deleteBLog}