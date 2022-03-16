import React from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Product from './Product';
import ContactUs from './ContactUs';

const Landing = () => {
    return (
        <div className='App-header'>
            <h1>This is Landing Component</h1>
             <BrowserRouter>
             <NavigationBar/>
             <Routes>
                  <Route path='home' element={<Home/>} ></Route>
                 <Route path="product" element={<Product/>}></Route>
                 <Route path="services" element={<Services/>}></Route>
                 <Route path="contactus" element={<ContactUs/>}></Route>
             </Routes>
             </BrowserRouter>

        </div>
    );
};

export default Landing;