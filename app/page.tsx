"use client";

import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import localFont from "next/font/local";
import "@/app/styles/main.css";
import {A11y, Navigation, Pagination} from "swiper/modules";
import SliderIndicator from "@/app/components/sliderIndicator/SliderIndicator";
import PageOne from "@/app/pages/pageOne";
import PageTwo from "@/app/pages/pageTwo";
import PageThree from "@/app/pages/pageThree";
import PageFour from "@/app/pages/pageFour";


const font = localFont({src: "../public/gianteh.otf"});

export default function Home() {

    const [currentPage, setPage] = useState(0);


    const page = [
        <PageOne/>,
        <PageTwo/>,
        <PageThree/>,
        <PageFour/>,
    ];
    return (
        <>
            <div
                className="main-page"
            >

                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    onSlideChange={(swiper) => setPage(swiper.activeIndex)}
                >
                    {page.map((Component, index) => (
                        <SwiperSlide key={index}>{Component}</SwiperSlide>
                    ))}
                </Swiper>
                <SliderIndicator length={page.length} current={currentPage}/>
            </div>
        </>
    );
}
