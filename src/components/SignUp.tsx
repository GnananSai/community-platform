import Link from 'next/link';
import React from 'react'

const SignUp = () => {
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <div className='sm:shadow-xl p-8 bg-white rounded-xl w-96'>

            <h1 className='font-semibold text-2xl mb-5'>Make An Account</h1>

            <form action="#">

                <div>
                    <label htmlFor="email" className='block mb-2 text-sm font-medium text-gray-800'>Your Email:</label>
                    <input type="email" name="email" id="email" className='mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full' placeholder="name@email.com" required={true}/>
                </div>

                <div>
                    <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-800'>Password:</label>
                    <input type="password" name="password" id="password" className='mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full' placeholder="••••••••" required={true}/>
                </div>

                <div>
                    <label htmlFor="password" className='block mb-2 text-sm font-medium text-gray-800'>Confirm Password:</label>
                    <input type="password" name="password" id="password" className='mb-5 p-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg w-full' placeholder="••••••••" required={true}/>
                </div>

                <div className='flex justify-between items-center'>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"/>
                        </div>
                        <div className="ml-1 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                </div>

                <button type="submit" className="mt-5 w-full text-white bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border hover:bg-white hover:text-gray-800 hover:border-gray-800">Sign Up</button>

            </form>
        </div>
      </div>
  );
}

export default SignUp;
