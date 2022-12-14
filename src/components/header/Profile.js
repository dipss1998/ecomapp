import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Register from '../authpages/Signup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PowerSettingsNew } from '@mui/icons-material';
import { useNavigate , Link} from "react-router-dom";
import { removefromCartAllProducts } from '../../redux/actions/cartActions';
const Component = styled(Menu)`
    margin-top: 5px;
`;
const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;


const Profile = ({accounts, setAccounts}) => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const history = useNavigate()
    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    };

        const handleClose = ()=>{
            setOpen(false)
        }

        const logout = () => {

            localStorage.clear();
            // location.reload()
             history('/Signup')
            dispatch(removefromCartAllProducts())
           
        }

       
        const userdata = JSON.parse(localStorage.getItem("user"))

        
        return (
            <>
                <Box onClick={handleClick}><Typography style={{ marginTop: 2 }}>{accounts} </Typography></Box>
                <Component
                    anchorEl={open}
                    open={Boolean(open)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => { handleClose(); logout(); setAccounts('')
}}>
                        <PowerSettingsNew fontSize='small' color='primary'/> 
                        <Link to="" refresh="true"> <Logout>Logout</Logout></Link>
                    </MenuItem>
                </Component>
            </>
        )    
    }

export default Profile