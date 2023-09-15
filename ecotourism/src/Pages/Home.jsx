import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import {
        Button,
        useToast,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
const Home = () => {
        const { logout } = useContext(AuthContext);
        const toast = useToast();
        const navigate = useNavigate();
        const handleLogout = () => {
                toast({
                        title: "Logged Out Successfully.",
                        status: "success",
                        duration: 2000,
                        isClosable: true,
                });
                logout()
                navigate('/signin');
        }
        return (
                <Button onClick={handleLogout}>
                        Logout
                </Button>
        )
}

export default Home