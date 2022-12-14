import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Box, Grid, Typography, Button} from '@mui/material'
import CartItem from '../cart/CartItem';
import ProductItem from './ProductItem';
import { styled } from '@mui/material/styles';
import EmptyCart from '../cart/EmptyCart';
import {addtowishlist} from '../../redux/actions/cartActions'
import { Link, useParams } from 'react-router-dom';
// import EmptyCart from './EmptyCart';
import { getProductdetails } from '../../redux/actions/productActions';
import axios from 'axios';
const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
      padding: '15px 0'
  }
}));
  const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginBottom: 15
    }
}));

const Header = styled(Box)`
    padding: 15px 24px;
    background: #d9d9d9;
`;

const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
    height: 45px;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    margin-Top: -15px;
    background: #cc9900;
    color: #fff;
    border-radius: 2px;
    width: 200px;
    height: 40px;
   
`;
const RightContainer = styled(Grid)`
    width: 300;
    height: 1000px
`;


const Wishlist = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.wishlist.wishlistItems)
  const {id} = useParams(); 
  const url = `http://localhost:5000`


    const fetchProductWishlist = async (id) =>{
        const response = await axios
        .get(`http://localhost:5000/product/${id}`)
        .catch((err)=>{
            console.log("err", err);
        })
                dispatch(addtowishlist(response))
                 console.log(response);
    }

    useEffect(()=>{
      if (cartItems && id !== cartItems.id) 
        (fetchProductWishlist(id));
        
    }, [])
  console.log(cartItems);
  // useEffect(()=>{
  //   dispatch(addtowishlist())
  // })
  return (
    <>
     { cartItems.length ? 
     <Component container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
              <Typography style={{fontWeight: 600, fontSize: 18}}>My Cart ({cartItems?.length})</Typography>
            </Header>
                    {   cartItems.map(items => (
                            <ProductItem items={items} />
                        ))
                    }
                <BottomWrapper>
                     <Link to="/Checkout" style={{textDecoration: 'none'}}> <StyledButton variant="contained">Place Order</StyledButton> </Link>
                </BottomWrapper>
        </LeftComponent>
           
        </Component> : <Box><EmptyCart/></Box>
}
    </>
  )
}

export default Wishlist