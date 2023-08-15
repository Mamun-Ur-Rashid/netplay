import React from 'react';
import background from '../../assets/signup.jpg'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();

    };
    console.log(errors);
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover', }} className='container mx-auto my-20 py-20'>
            <div className='text-center fond-bold text-white text-5xl'>Please Signup</div>
            <div>
                <div className="mt-10">

                    <div className="hero-content">
                        <div className="card bg-black bg-opacity-60 md:w-3/4 shadow-2xl">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='md:flex justify-between'>
                                        <div className='md:w-[45%]'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Full Name</span>
                                                </label>
                                                <input className="input input-bordered" type="text" placeholder="Full Name..." {...register("name", { required: true, })} />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Password</span>
                                                </label>
                                                <input className="input input-bordered" type="password" placeholder="Password..." {...register("password", { required: true, })} />
                                                
                                            </div>
                                        </div>
                                        <div className='md:w-[45%]'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Email Address</span>
                                                </label>
                                                <input className="input input-bordered" type="email" placeholder="Email Address..." {...register("email", { required: true, })} />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Phone Number</span>
                                                </label>
                                                <input className="input input-bordered" type="text" placeholder="Phone Number" {...register("number", { required: true, })} />
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text text-base text-white">Photo</span>
                                                </label>
                                                <input type="file" className="file-input file-input-bordered file-input-primary w-full" />
                                                {/* <input className="input input-bordered" type="password" placeholder="Password" {...register("password", { required: true, })} /> */}
                                                
                                            </div>
                                    <p className='text-white mt-4'>Allready have an account? <Link to='/login'><span className='hover:font-semibold hover:text-green-300'>Please login</span></Link></p>
                                    <div className='text-center mt-10'>
                                        <input className="btn bg-orange-700 text-white px-6 py-2 border-none w-full hover:bg-orange-600 hover:text-black rounded-3xl" type="submit" value='Login' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Signup;