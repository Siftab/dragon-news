import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
const {createUser} =useContext(AuthContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const password = form.get('password')
        const email = form.get('email')
        const photo= form.get('photo')

        createUser(email,password)
        .then(res=>console.log(res.user))
        .catch(err=>console.log(err))
        // console.log(email,photo,name,password)
    }
    return (
        <div className='mt-4'>
        <NavBar></NavBar>
        <div className=''>
            <form className="card-body w-1/2 mx-auto" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label> 
                    <input type="text"  name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label> 
                    <input type="text"  name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label> 
                    <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className='text-center'>dont have an account <Link to='/login' className="text-blue-600 font-bold" >Login</Link></p>
        </div>
    </div>
    );
};

export default Register;