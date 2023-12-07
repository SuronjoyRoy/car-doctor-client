import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();

    const { title, _id, price, img } = service;
    const {user} = useContext(AuthContext);

    const handleOrderConfirm = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user?.email;
        const textarea = form.textarea.value;

        const booking = {
            customerName: name,
            email,
            date,
            img,
            textarea,
            service: _id,
            price:price
            
        }

        console.log(booking)

        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-medium'>Product Name:{title}</h2>

            <form onSubmit={handleOrderConfirm} className="card-body max-w-3xl mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className="form-control">
                   
                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="date" name='date' placeholder="Date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered" required />
                </div>
                <div className="form-control mb-3">
                    <input type="email" defaultValue={user?.email} name='email' placeholder="Your Email" className="input input-bordered" required />
                    
                </div>
                
                </div>
                <div className="form-control">
                    <textarea name="textarea" className='border-2' id="" cols="30" rows="7">Your Message:</textarea>
                </div>
                <div className="form-control mt-6">
                    
                    <input type="submit" className='btn text-white bg-[#FF3811]' value="Order Confirm" />
                </div>
            </form>
        </div>

    );
};

export default CheckOut;