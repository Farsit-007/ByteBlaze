import { useLoaderData } from "react-router-dom";
import placeholder from '../assets/images/404.jpg';
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
const Content = () => {
    const blogs = useLoaderData();
    const{cover_image,title,tags,body_html,url} = blogs;
    return (
        <div className="border-2 p-2  mx-auto group hover:no-underline focus:no-underline ">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholder} />
            <div>
                <div className="flex flex-wrap py-6 gap-2  border-gray-400">
                    {
                        tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline  ">#{tag}</a>)
                    }

                </div>

            </div>
            <div className=" overflow-hidden space-y-2">
                <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
            </div>
        </div>
    );
};

export default Content;