import React from 'react';
import MainContainer from './MainPageContainer';
import Header from './Header';
import Footer from './Footer';
import AdminLogin from './login/AdminLogin';
import StudentLogin from './login/StudentLogin';
import CompanyLogin from './login/CompanyLogin';
import StudentRegister from './register/studentRegister';
import CompanyRegister from './register/CompanyRegister';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainPage() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<MainContainer />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route path="/student/login" element={<StudentLogin />} />
                    <Route path="/company/login" element={<CompanyLogin />} />\
                    <Route path="/student/register" element={<StudentRegister />} />
                    <Route path="/company/register" element={<CompanyRegister />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            {/* <AdminLogin /> */}
            {/* <StudentRegister /> */}
            {/* <CompanyRegister /> */}
            {/* <MainContainer /> */}
            {/* <StudentLogin/> */}
            {/* <CompanyLogin/> */}
        </>
    );
}

export default MainPage;
