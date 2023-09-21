import React from 'react';
import MainContainer from './MainPageContainer';
import Header from './Header';
import Footer from './Footer';
import AdminLogin from './login/AdminLogin';
import StudentLogin from './login/StudentLogin';
import CompanyLogin from './login/CompanyLogin';
import StudentRegister from './register/studentRegister';
import CompanyRegister from './register/CompanyRegister';

function MainPage() {
    return (
        <>
            <Header />
            {/* <AdminLogin /> */}
            <StudentRegister />
            {/* <CompanyRegister /> */}
            <Footer />
            {/* <MainContainer /> */}
            {/* <StudentLogin/> */}
            {/* <CompanyLogin/> */}
        </>
    );
}

export default MainPage;
