import Header from 'components/organisms/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout:React.FC<any> = () => {
    return (
        <main style={{
        }}>
            <Header />
            <Outlet />
        </main>
    )
}

export default MainLayout;