import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="img" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl text-[#444]">{title}</h2>

                <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-[#FF3811]">${price}</p>
                    <Link to={`/checkout/${_id}`}>
                    <a className='text-[#FF3811]' href=""><FaArrowRight></FaArrowRight></a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;