import './youtube.css'
import { CiYoutube } from "react-icons/ci";
const Youtube = () => {
  return (
    
<div className="">
<div className="hero min-h-[700px] bg-fixed"  style={{backgroundImage: 'url(https://i.ibb.co/hg5nYTY/download.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
    <a href="https://www.youtube.com/watch?v=AbnjSelQYV8">
    <button className="text-4xl border bg-white p-5 hover:bg-red-600 text-red-600 hover:text-white"><CiYoutube /></button>
    </a>
    </div>
  </div>
</div>
</div>
  );
};

export default Youtube;
