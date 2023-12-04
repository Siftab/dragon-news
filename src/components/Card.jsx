
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Card = ({props}) => {
  console.log(props)
    const {image_url,title,details,_id}=props;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
   <p>{
    details.length >200? <p>{details.slice(0,200)} <Link className='text-orange-300' to={`/news/${_id}`}> Read More ...</Link></p>
    :
    <p>{details}</p>
    }</p>
    
  </div>
</div>
    );
};

export default Card;
Card.propTypes={
  props:PropTypes.object,
}