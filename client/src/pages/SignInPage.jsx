import React from 'react'
import signInPageImage from '../assets/images/sign-in-page-image.png'
import { Button, Grid } from '@mantine/core'
import { violet } from '../assets/colors/colors'
import { FcGoogle } from 'react-icons/fc';
import { FaXTwitter } from 'react-icons/fa6';
import Textfield from '../components/Textfield';

export default function SignInPage() {
    return (
        <div className='flex'>
            {/* image */}
            <div className='border border-rose-500 w-[50%] h-[100vh]'>
                <img
                    src={signInPageImage}
                // width={100}
                // height={100}
                />
            </div>

            {/* comp */}
            <div className='border border-rose-500 w-[50%] h-[100vh] m-[4%]'>

                <p className="font-black text-[30px]">Sign In Page</p>

                {/* google/twitter auth */}
                <div className='border border-rose-500 my-[4%]'>

                    <Button
                        radius={'5px'}
                        className='mb-[4%] border-slate-50'
                        size='md'
                        fullWidth
                        variant='outline'
                        color={violet}
                        leftSection={<FcGoogle />}
                    >
                        Continue With Google
                    </Button>

                    <Button
                        radius={'5px'}
                        size='md'
                        fullWidth
                        variant='outline'
                        color={violet}
                        leftSection={<FaXTwitter color='black' />}
                    >
                        Continue With Twitter
                    </Button>
                </div>

                {/* line break */}
                <div className='border my-[10%]'></div>

                {/* username and pass fields */}
                <div className='border border-rose-500 my-[4%]'>

                    <div>
                        <label>User name of email address</label>
                        <Textfield

                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <Textfield

                        />
                    </div>

                    <span className='underline text-[12px] text-slate-400 cursor-pointer float-right'>Forgot your password</span>

                </div>

                {/* submit button */}
                <div className='border border-rose-500 mt-[50px]'>

                    <Button
                        color={violet}
                    >
                        Sign In
                    </Button>

                    <p className='text-[12px] text-slate-400'>
                        New User?
                        <span className='underline cursor-pointer'>Sign Up</span>
                    </p>

                </div>


            </div>
        </div>

        // <div className='border border-rose-500  w-[100%] h-[100vh]'>Sign in page</div>
    )
}
