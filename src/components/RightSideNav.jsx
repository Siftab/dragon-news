import {  FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div className='p-2'>
            <div className=" space-y-3">
                <h1 className="text-xl font-semibold">Login With</h1>
                <button className='flex btn items-center btn-outline w-full'><FaFacebookF></FaFacebookF> Facebook</button>
                <button className='flex btn items-center btn-outline w-full'><FaGithub></FaGithub> Github</button>
            </div>

            <div>
            <h1 className="text-xl mt-6 mb-4 font-semibold">Find Us On</h1>
            <a href="" className='flex items-center gap-2 border rounded-t-lg p-4'><FaFacebookF></FaFacebookF> Facebook</a>
            <a href="" className='flex items-center gap-2 border-x p-4 '><FaInstagram></FaInstagram> Instagram</a>
            <a href="" className='flex items-center gap-2 border p-4 rounded-b-lg'><FaTwitter></FaTwitter> Twitter</a>

            </div>
            <div className='p-4 mt-5 bg-[#F3F3F3] space-y-5'>
                <h1 className="text-xl font-semibold">Q-Zone</h1>
                <img src="/src/assets/qZone1.png" alt="" />
                <img src="/src/assets/qZone2.png" alt="" />
                <img src="/src/assets/qZone3.png" alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;