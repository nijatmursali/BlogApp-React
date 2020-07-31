import React from 'react';
import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
const ErrorPage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h3 className="mb-5">Page could not  be found.</h3>

                <h1 className="d-flex justify-content-center text-danger">404</h1>
                <h2 className="d-flex justify-content-center">Page Not Found</h2>
                <h3 className="d-flex justify-content-center">We are sorry, but the page you are looking for cannot be found.</h3>

                
            </div>

            <Footer />
        </>
    )
}

export default ErrorPage;