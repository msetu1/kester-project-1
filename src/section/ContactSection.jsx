import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
const ContactSection = () => {
    return (
        <div className="my-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="hover:bg-red-600 border flex flex-col lg:flex-row hover:text-white p-10 items-center gap-4">
<div className="bg-white p-3">
<IoLocationOutline className="text-4xl text-red-600 " />
</div>
<div className="">
    <h2 className="uppercase text-2xl font-bold mb-3">HEADQUARTERS</h2>
    <div className="pr-56">
    <div className="divider divider-error"></div>
    </div>
    <p className="text-gray-400 hover:text-white text-xl mt-3">236 Dotland Street, STKD NY Frankfurt Germany</p>
</div>
</div>
<div className="hover:bg-red-600 border flex flex-col lg:flex-row hover:text-white p-10 items-center gap-4">
<div className="bg-white p-3">
<AiOutlineMail className="text-4xl text-red-600 " />
</div>
<div className="">
    <h2 className="uppercase text-2xl font-bold mb-3">mail us 24/7</h2>
    <div className="pr-56">
    <div className="divider divider-error"></div>
    </div>
    <p className="text-gray-400 hover:text-white text-xl mt-3">236 Dotland Street, STKD NY Frankfurt Germany</p>
</div>
</div>
<div className="hover:bg-red-600 border flex flex-col lg:flex-row hover:text-white p-10 items-center gap-4">
<div className="bg-white p-3">
<FiPhoneCall className="text-4xl text-red-600 " />
</div>
<div className="">
    <h2 className="uppercase text-2xl font-bold mb-3">SPONSORS ONLY</h2>
    <div className="pr-56">
    <div className="divider divider-error"></div>
    </div>
    <p className="text-gray-400 hover:text-white text-xl mt-3">236 Dotland Street, STKD NY Frankfurt Germany</p>
</div>
</div>
            </div>
        </div>
    );
};

export default ContactSection;