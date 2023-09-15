import React, { useState } from 'react'
import video from '../Video/ecotourism_clip.mp4';
import { Box, FormControl, Input, Text, Container, Link, VStack, Button, Stack, InputRightElement, InputGroup, useToast, Checkbox, } from '@chakra-ui/react'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import './Styles.css';


const SignUp = () => {
        const [show, setShow] = useState(false)
        const navigate = useNavigate();
        const [isLoading, setIsLoading] = useState(false)
        const [check, setCheck] = useState(true);
        const [email, setEmail] = useState('')
        const [username, setUserName] = useState('');
        const [password, setpassWord] = useState('');
        const [confirmPassword, setConfirmPassWord] = useState('');

        const toast = useToast()
        const handleClick = () => {
                setShow(!show);

        }


        const handleSubmit = (e) => {
                e.preventDefault();
                const existingUserData = JSON.parse(localStorage.getItem('userData')) || []
                const emailExists = existingUserData.some(user => user.email === email);


                if (username === '' && email === '' && password === '' && confirmPassword === '') {
                        toast({
                                title: 'Please Fill All Details',
                                status: 'error',
                                duration: 1500,
                                isClosable: true,
                                colorScheme: 'red'
                        })
                }
                else if (emailExists) {
                        toast({
                                title: 'Email Already Exists',
                                status: 'error',
                                duration: 1500,
                                isClosable: true,
                                colorScheme: 'red'
                        });
                        return;
                }
                else if (username === '') {
                        toast({
                                title: 'Please Enter Username',
                                status: 'error',
                                duration: 1500,
                                isClosable: true,
                                colorScheme: 'red'
                        })
                }
                else if (email === '') {
                        toast({
                                title: 'Please Enter Email',
                                status: 'error',
                                duration: 1500,
                                isClosable: true,
                                colorScheme: 'red'
                        })
                }
                else if (password === '') {
                        toast({
                                title: 'Enter Password',
                                status: 'error',
                                duration: 1500,
                                isClosable: true,
                                colorScheme: 'red'
                        })
                }
                else if (confirmPassword === '') {
                        toast({
                                title: 'Please Confirm Password',
                                status: 'error',
                                duration: 1500,
                                isClosable: true,
                                colorScheme: 'red'
                        })
                }

                else if (password !== confirmPassword) {
                        toast({
                                title: 'Password Doesn`t Match',
                                status: 'error',
                                duration: 1500,
                                isClosable: true,
                                colorScheme: 'red'
                        })
                }
                else {
                        setIsLoading(true);
                        const userData = {
                                ...existingUserData,
                                username: username,
                                email: email,
                                password: password
                        };
                        const updatedUserData = [...existingUserData, userData]
                        localStorage.setItem('userData', JSON.stringify(updatedUserData));
                        toast({
                                title: 'Signing Up.',
                                status: 'success',
                                duration: 1500,
                                isClosable: true,
                        })

                        setTimeout(() => {
                                setIsLoading(false);
                                navigate('/signin');
                                toast({
                                        title: 'Signed Up.',
                                        description: "We've created your account for you.",
                                        status: 'success',
                                        duration: 2000,
                                        isClosable: true,
                                })
                        }, 2000);
                        setShow(!show);

                }


        };

        return (
                <Stack direction="column" align="center" className="container">

                        <Box className="background-video">
                                <video autoPlay loop muted>
                                        <source src={video} type="video/mp4" />
                                </video>
                        </Box>
                        <Container pt={"100px"}>
                                <Box bg={"blackAlpha.800"} borderRadius={"10px"} className='inputContainer' p={"30px"}>
                                        <Text fontSize={"2xl"} color={"white"} align={"center"}>Sign Up</Text>
                                        <Text fontSize={"md"} color={"white"} align={"center"} pb={"4"}>Already have an Account ?<Link color={"teal.500"} href='/signin'> Sign in</Link></Text>
                                        <form onSubmit={handleSubmit}>
                                                <VStack align={"stretch"} spacing={"2"} pb={"4"}>
                                                        <FormControl >
                                                                <Input type='text' placeholder={'Username'} autoComplete='off' variant={"flushed"} color={"whiteAlpha.700"} focusBorderColor='teal.400' value={username} onChange={(e) => setUserName(e.target.value)} />
                                                        </FormControl>
                                                        <Input type='email' placeholder={'Email'} autoComplete='off' variant={"flushed"} color={"whiteAlpha.700"} focusBorderColor='teal.400' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        <InputGroup size='md'>
                                                                <Input
                                                                        pr='4.5rem'
                                                                        type={show ? 'text' : 'password'}
                                                                        color={"whiteAlpha.700"}
                                                                        placeholder='Enter password'
                                                                        variant={"flushed"}
                                                                        focusBorderColor='teal.400'
                                                                        value={password}
                                                                        onChange={(e) => setpassWord(e.target.value)}

                                                                />
                                                                <InputRightElement width='4.5rem'>
                                                                        <Button h='1.75rem' size='sm' color={"teal"} bg={"none"} bgColor={'none'} onClick={handleClick}>
                                                                                {show ? <BsEyeSlashFill /> : <BsEyeFill />}
                                                                        </Button>
                                                                </InputRightElement>
                                                        </InputGroup>
                                                        <Input type='password' placeholder={'Confirm Password'} focusBorderColor='teal.400' variant={"flushed"} color={"whiteAlpha.700"} value={confirmPassword} onChange={(e) => setConfirmPassWord(e.target.value)} />
                                                        <Checkbox size='md' colorScheme='teal' color={"whiteAlpha.700"} onChange={(e) => {
                                                                e.target.checked ? setCheck(false) : setCheck(true)
                                                        }}>
                                                                I accept the terms and coditions
                                                        </Checkbox>
                                                </VStack>

                                                <Stack direction='row' spacing={4}>
                                                        <Button
                                                                isLoading={isLoading}
                                                                loadingText='Creating Account'
                                                                colorScheme='teal'
                                                                variant='solid'
                                                                spinnerPlacement='end'
                                                                w={"100%"}
                                                                isDisabled={check}
                                                                type='submit'
                                                        >
                                                                Sign Up
                                                        </Button>
                                                </Stack>
                                        </form>

                                </Box>
                        </Container>
                </Stack>
        )
}

export default SignUp