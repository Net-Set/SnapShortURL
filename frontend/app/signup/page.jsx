'use client'
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import Link from "next/link";
import { useForm } from 'react-hook-form';
import { Button } from "../../components/ui/button";
import { yupResolver } from "../../hookform/resolvers/yup"
import * as yup from "yup";
import axios from 'axios';
import { useState } from "react";


const schema = yup
  .object({
    FullName: yup
      .string()
      .matches(/^[a-zA-Z ]+$/, 'Fullname must contain only letters and spaces'),
    Email: yup
      .string()
      .email('Invalid email')
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format')
      .required('Email is required'),
    Password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
    ),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref('Password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  })
  .required()

export default function Component() {
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm({ resolver: yupResolver(schema), })
  const [successMessage, setSuccessMessage] = useState('');
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  console.log(errors)

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        "FullName": data.FullName,
        "Email": data.Email,
        "Password": data.Password
      });
      console.log('response:', response.data);
      setSuccessMessage('Signup successful!');
      reset();
    }
    catch (error) {
      setError('Email', { message: 'This email is already exist' });
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center mt-20">
      <div className="w-full max-w-md p-8 bg-white rounded-lg space-y-6 shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign Up for Free</h2>
        {/* Display success message if exists */}
        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="full-name">Full Name</Label>
            <Input id="fullname" placeholder="John Doe" required {...register('FullName')} name="FullName" />
            <p className="text-red-500 text-[10px]">{errors.FullName?.message}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="john@example.com" required type="email" {...register('Email', { required: true })} name="Email" />
            <p className="text-red-500 text-[10px]">{errors.Email?.message}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" {...register('Password', { required: true })} name="Password" />
            <p className="text-red-500 text-[10px]">{errors.Password?.message}</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" required type="password" {...register('ConfirmPassword', { required: true })} name="ConfirmPassword" />
            <p className="text-red-500 text-[10px]">{errors.ConfirmPassword?.message}</p>
          </div>
          <div className="flex items-center">
            <Checkbox id="terms" required name="terms" {...register('terms', { required: true })} />
            <Label className="ml-2" htmlFor="terms">
              I agree to the
              <Link className="underline" href="#">
                Terms & Conditions
              </Link>
            </Label>
          </div>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}