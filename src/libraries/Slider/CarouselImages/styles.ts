"use client";

import styled from "styled-components";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const SwiperContainer = styled(Swiper)`
    width: 100%;

    .swiper-slide {
        width: 100%;
        height: 100%;
    }
    .swiper-slide img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .swiper-pagination {
        margin-top: 1.875rem;
        position: relative;
    }

    &.swiper-pagination-bullet,
    span {
        width: 6.25rem;
        height: 0.75rem;
        background: #9e9e9ede;
        opacity: 1;
        border: 0;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        border-radius: 0;

        &.swiper-pagination-bullet-active {
            background-color: #313131;
        }
    }

    @media (max-width: 600px) {
        .swiper-pagination {
            margin-top: 1.25rem;
        }

        &.swiper-pagination-bullet,
        span {
            width: 5rem;
            height: 0.5rem;
        }
    }

    @media (max-width: 500px) {
        .swiper-pagination {
            margin-top: 0.625rem;
        }

        &.swiper-pagination-bullet,
        span {
            width: 3.75rem;
            height: 0.375rem;
        }
    }
`;
