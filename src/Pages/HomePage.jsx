import React from 'react';
import Earning from '../componets/Earning/Earning';
import { Financial } from '../componets/Financial/Financial';
import { Footer } from '../componets/Header/Footer/Footer';
import { Header } from '../componets/Header/Header';
import Potencial from '../componets/Header/Potencial/Potencial';
import Mobile from '../componets/Mobile/Mobile';
import Orbit from '../componets/Orbit/Orbit';

export const HomePage = () => {
    return (
        <>
            <Header />
            <Financial />
            <Earning />
            <Potencial />
            <Orbit />
            <Mobile />
            <Footer />
        </>
    )
}
