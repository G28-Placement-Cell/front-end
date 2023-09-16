import React from 'react';
import MainContainer from './MainPageContainer';
import Header from './Header';
import Footer from './Footer';
import AdminLogin from './login/AdminLogin';
import StudentLogin from './login/StudentLogin';
import CompanyLogin from './login/CompanyLogin';
import StudentRegister from './register/studentRegister';

function MainPage() {
    return (
        <>
            <Header />
            {/* <AdminLogin /> */}
            <StudentRegister />
            <Footer />
            {/* <MainContainer /> */}
            {/* <StudentLogin/> */}
            {/* <CompanyLogin/> */}
        </>
    );
}

export default MainPage;
