import Header from '../components/Header';
import RightSideNav from '../components/RightSideNav';

const DetailsNews = () => {
    
    return (
        <div>
            
            <Header></Header>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    <h1>news</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default DetailsNews;