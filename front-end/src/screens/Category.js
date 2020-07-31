import React from 'react';
import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import Breadcrumbs from '../components/parts/Breadcrumbs';
import PostItem from '../components/parts/PostItem';
import Posts from '../components/parts/Posts';

const Category = () => {
    return (
        <>
        <Header/>
        <Breadcrumbs/>
        <Posts/>
        <Footer/>
        </>
    )
}

export default Category;