import logo from '../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='text-center mt-12 space-y-4 '>
            {/* <img src='/src/assets/logo.png' alt="" /> */}
            <img src={logo} alt="" className='mx-auto' />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;