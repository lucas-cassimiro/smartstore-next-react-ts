"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: linear-gradient(147.42deg, #000000 21.52%, #313131 165.15%);
    color: #ffffff;

    height: 28.125rem;
    cursor: pointer;

    margin-right: 0.625rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 25rem;
        height: 21.875rem;

        img {
            object-fit: contain;
            width: 17.5rem;
            height: 15.625rem;
        }
    }

    h2 {
        font-weight: 400;
        font-size: 1.875rem;
    }

    p {
        font-size: 1.25rem;
        font-weight: 300;
    }

    p span {
        color: #93c1fd;
    }

    @media (max-width: 1255px) {
        div {
            img {
                width: 17.5rem;
                height: 15.9375rem;
            }
        }
    }

    @media (max-width: 1140px) {
        height: 27rem;
        div {
            height: 21rem;
            img {
                width: 15.625rem;
                height: 13.75rem;
            }
        }
        h2 {
            font-size: 1.5625rem;
        }
        p {
            font-size: 1.125rem;
        }
    }

    @media (max-width: 990px) {
        div {
            img {
                width: 18.75rem;
                height: 17.5rem;
            }
        }
    }

    @media (max-width: 800px) {
        height: 23rem;
        div {
            height: 17.5rem;
            img {
                width: 13.75rem;
                height: 12.5rem;
            }
        }

        h2 {
            font-size: 1.375rem;
        }
        p {
            font-size: 1rem;
        }
    }

    @media (max-width: 500px) {
        height: 18rem;
        div {
            height: 14rem;
            img {
                width: 8.75rem;
                height: 8.125rem;
            }
        }
        h2 {
            font-size: 0.875rem;
        }
        p {
            font-size: 0.75rem;
        }
    }
`;
