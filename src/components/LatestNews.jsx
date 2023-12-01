
import Marquee from 'react-fast-marquee'
const LatestNews = () => {
    return (
        <div className="border p-2 flex">
           <button className="btn btn-error text-white">Latest</button>
           <Marquee speed={70}>
  I can be a React component, multiple React components, or just some text.
</Marquee>

        </div>
    );
};

export default LatestNews;