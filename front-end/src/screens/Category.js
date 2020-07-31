import React from 'react';
import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import Breadcrumbs from '../components/parts/Breadcrumbs';
import Pagination from '../components/parts/Pagination';
import PostItem from '../components/parts/PostItem';

const Category = () => {
    return (
        <>
        <Header/>
        <Breadcrumbs/>
        <PostItem/>
        <Footer/>
        </>
    )
}

export default Category;