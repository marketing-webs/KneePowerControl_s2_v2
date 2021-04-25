import React, { useState, useEffect, useRef } from 'react'
import Securitiy from '../components/Securitiy'
import Hero from '../sections/1_section/Hero'
import Header from '../components/Header/Header'
import FormSection from '../sections/2_section/FormSection'
import ThirdSection from '../sections/3_section/ThirdSection'
import FourthSection from '../sections/4_section/FourthSection'
import FifthSection from '../sections/5_section/FifthSection'
import SixthSection from '../sections/6_section/SixthSection'
import SeventhSection from '../sections/7_section/SeventhSection'
import EighthSection from '../sections/8_section/EighthSection'
import SectionBackground from '../sections/SectionstBackground/SectionBackground'
import DoctrorWrapperSection from '../sections/DoctorWrapperSection/DoctrorWrapperSection'
import ForteenthSection from '../sections/14_section/ForteenthSection'
import FifteenthSection from '../sections/15_section/FifteenthSection'
import Footer from '../sections/footer/Footer'

import Modal from '../components/Modal/Modal'



const MainPage = () => {

    const [showModal, setShowModal] = useState(false);
    const [mouseTouchedTop, setMouseTouchedTop] = useState(false);
    const footerEl = useRef(null);


    const handleMouseMove = (ev) => {
        if (ev.screenY <= 115 && !mouseTouchedTop) {
            setMouseTouchedTop(true);
            setShowModal(true);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", displayModalAfterReachingEndOfPage);
    });

    const displayModalAfterReachingEndOfPage = () => {
        const documentHeight = window.document.body.offsetHeight;
        const viewPortHeight = window.innerHeight;
        let scrolledDistanceFromTop = window.pageYOffset;
        let reachEndOfPage =
            documentHeight - 700 - viewPortHeight < scrolledDistanceFromTop;
        if (reachEndOfPage) {
            setTimeout(() => {
                setShowModal(true);
            }, 30000);

            //REMOVE EVENT LISTENER
            window.removeEventListener("scroll", displayModalAfterReachingEndOfPage);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 3);
    }, [])

    return (
        <div onMouseMove={handleMouseMove}>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <Securitiy />
            <Header />
            <Hero />
            <FormSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EighthSection />
            <SectionBackground />
            <DoctrorWrapperSection />
            <ForteenthSection />
            <FifteenthSection innerRef={footerEl}/>
            <FormSection partner="partner" id="partner"/>
            <Footer  />
        </div>
    )
}

export default MainPage
