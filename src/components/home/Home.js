import React, { useEffect }  from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import MidSection from './MidSection';
import Banner from './Banner';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Box, Typography } from '@mui/material';
import BannerCate from './BannerCate';
import LastSlider from './Sliders';
import Footer from './Footer';

import { useSelector, useDispatch, getState } from 'react-redux'; // hooks
import {  getProducts  } from '../../redux/actions/productActions';
 import {userdata} from '../../redux/actions/user'
import store from '../../redux/Store';
import MidSlide from './MidSlide'; 
import CircularIndeterminate from '../../loader/Loader'
const Container = styled(Box)`
   padding: 0px 10px 0px 10px;
   background: #D9D9D9;
   background-size:cover;
      background-position:center;
      z-index: -1;
      position:relative;
    

  
   `;
const Content = styled(Box)`
margin-top: -490px;
      top:-1000px;
      paddingtop:50;
      overflow: hidden;
      data-flow-dir= "h";
      flex-flow:row-wrap;
      background-size:cover;
      background-position:center;
`;

const Home = () => {

    const dispatch = useDispatch();
    const  {products, error, loading} = useSelector((state) => state.getallProducts);

    useEffect(()=>{
      dispatch(getProducts());
    }, [])

  return (
    <>
      <NavBar />
      <Container>
        <Banner />
      </Container>
      <Content>
        <BannerCate />

         <MidSlide  />  

        {
          products.loading ?  <CircularIndeterminate /> :   <Box style={{ backgroundColor: "#D9D9D9" }}>

          <LastSlider
            
            title='Discounts for You'
            timer={false} 
            multi={true} 
          
          />

          <LastSlider
              
              title='Suggested Items'
              timer={false} 
              multi={true} 
          />
          <LastSlider
              
              title='Top Selection'
              timer={false} 
              multi={true} 
          />
          <LastSlider
              
              title='Recommended Items'
              timer={false} 
              multi={true} 
          />
     

  </Box> 
        }
      
        <Footer />
      </Content>



    </>

  )
}

export default Home