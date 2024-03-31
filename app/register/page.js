'use client'
import React, { useState } from 'react'
import Login from '@/app/assets/register.png'
import Logo from "@/app/assets/logo.png"
import Image from 'next/image'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation'
import axios from "axios"
import { toast } from 'react-toastify';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [qualification, setQualification] = useState('');
  const [address, setAddress] = useState('');
  const [file, setFile] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleQualificationChange = (event) => {
    setQualification(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('contactNumber', contactNumber);
    formData.append('qualification', qualification);
    formData.append('address', address);
    formData.append('file', file);

    axios.post('http://localhost:8080/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(() => {
      // router.push('/dashboard/admin');
    }).catch(error => {
      console.error(error);
      return;
    })
    toast.success('Registered successfully! Check your Email!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  return (
    <div>
      <div className='flex justify-center items-center pr-3 md:px-7 md:pt-10'>
        <div className='flex-1 text-gray-700 w-[40%] ml-3 md:mr-10'>
          <Image className='w-[70%] h-[auto] rounded-3xl mb-10 pt-5 md:hidden' src={Logo} alt="logo" />
          <h1 className='text-3xl md:text-4xl font-medium'>Welcome to STOREYS! <span className="hidden md:inline">👋🏻</span></h1>
          <p className='mt-3 mb-4 text-gray-500'>Please sign-in to your account and start the adventure</p>
          <div className="w-full">
            <div className="flex justify-between w-full">
              <Box
                component="form"
                className="w-full"
                sx={{
                  '& > :not(style)': { width: '100%', flex: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField onChange={handleNameChange}
                  className="w-full mt-3" id="outlined-basic" label="Name" variant="outlined" />
              </Box>
              <Box
                component="form"
                className="w-full ml-2"
                sx={{
                  '& > :not(style)': { width: '100%', flex: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField className="w-full mt-3" id="outlined-basic" onChange={handleEmailChange}
                  label="Email" variant="outlined" />
              </Box>
            </div>


            <div className="flex justify-between w-full">
              <Box
                component="form"
                className="w-full"
                sx={{
                  '& > :not(style)': { width: '100%', flex: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField onChange={handleContactNumberChange}
                  className="w-full mt-3" id="outlined-basic" label="Contact Number" variant="outlined" />
              </Box>
              <Box
                component="form"
                className="w-full ml-2"
                sx={{
                  '& > :not(style)': { width: '100%', flex: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField onChange={handleQualificationChange}
                  className="w-full mt-3" id="outlined-basic" label="Qualification" variant="outlined" />
              </Box>
            </div>
            <Box
              component="form"
              className="w-full"
              sx={{
                '& > :not(style)': { width: '100%', flex: 1 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField onChange={handleAddressChange}
                className="w-full mt-3" id="outlined-basic" label="Address" variant="outlined" />
            </Box>
          </div>
          <div className="flex items-center justify-center w-full mt-3">
            <label htmlFor="upload" className="bg-[#902bf5] px-4 py-2 rounded-md text-white cursor-pointer">
              <span role="img" aria-label="Upload" className="mr-2">
                📤
              </span>
              Upload File
            </label>
            <input type="file" id="upload" onChange={handleFileChange} className="hidden" />
            {file && <p className="ml-2">{file.name}</p>}
          </div>

          <Stack className="mt-6" spacing={2} direction="row">
            <Button onClick={handleSubmit} className="bg-[#902bf5] w-[100%] h-[30px] text-white py-6 mt-7" variant="text">Sign Up</Button>
          </Stack>
          <div className="flex justify-center mt-4">
            <p>Already Account exist? </p>
            <a href="/" className="text-[#902bf5] ml-3">Sign in to Continue</a>
          </div>
        </div>
        <div className='bg-gray-100 w-[47%] py-10 hidden md:flex md:justify-center rounded-2xl'>
          <Image className='w-[70%] h-[auto] rounded-3xl' src={Login} alt="login" />
        </div>
      </div>
    </div>
  )
}

export default Page