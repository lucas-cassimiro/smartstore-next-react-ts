"use client";

import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 19rem;
    background-color: #dcdcdc;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem 0;

    ul:first-child {
        display: flex;
        flex-direction: column;
        gap: 2.1875rem;

        li {
            border-bottom: 1px solid rgba(49, 49, 49, 0.5);
            width: 10.8125rem;
            margin-left: 1.875rem;

            a {
                font-size: 1.5rem;
                font-weight: 600;
                color: #000000;
            }
        }
    }

    ul:nth-child(2) {
        width: 33.3125rem;
        div {
            border-bottom: 1px solid rgba(49, 49, 49, 0.5);
            min-width: 15.625rem;

            h1 {
                font-weight: 600;
                font-size: 1.5rem;
            }
        }

        .div {
            display: flex;
            border: none;

            div {
                border: none;
                margin-top: 0.5rem;

                li {
                    margin-bottom: 1rem;
                }
            }
        }

        @media (max-width: 990px) {
            width: 18.75rem;
        }
    }

    div:nth-child(3) {
        display: flex;
        flex-direction: column;
        height: 6.25rem;

        > div {
            display: none;
            margin-top: 1.25rem;

            h2 {
                margin-bottom: 1rem;
            }

            h3 {
                margin-bottom: 1rem;
            }

            div {
                img {
                    width: 2.1875rem;
                    height: 2.1875rem;
                    border-radius: 0.5rem;
                    margin-bottom: 1rem;
                    margin-left: 0.5rem;
                }
            }
        }

        h2 {
            margin-bottom: 1rem;
        }

        span {
            margin-bottom: 0.5rem;
        }

        @media (max-width: 1210px) {
            > div {
                display: block;
            }
        }

        @media (max-width: 768px) {
            > div {
                display: none;
            }
        }
    }

    .social-media {
        h2 {
            margin-bottom: 1rem;
        }

        h3 {
            margin-bottom: 1rem;
        }

        div {
            img {
                width: 2.1875rem;
                height: 2.1875rem;
                border-radius: 0.5rem;
                margin-bottom: 1rem;
                margin-left: 0.5rem;
            }
        }

        @media (max-width: 1210px) {
            display: none;
        }

        @media (max-width: 768px) {
            display: block;
        }
    }

    @media (max-width: 1024px) {
        justify-content: space-between;
        ul:first-child {
            li {
                width: 9.375rem;

                a {
                    font-size: 1.25rem;
                }
            }
        }

        ul:nth-child(2) {
            div {
                width: 31.25rem;

                h1 {
                    font-size: 1.25rem;
                }

                a {
                    font-size: 1rem;
                }
            }
        }

        div:nth-child(3) {
            margin-right: 1rem;
            h2 {
                font-size: 1.25rem;
            }

            span {
                font-size: 1rem;
            }
        }

        div:last-child {
            h2 {
                font-size: 1.125rem;
            }

            h3 {
                font-size: 1rem;
                padding-right: 0.5rem;
            }

            img {
                width: 130px;
            }

            div {
                img {
                    width: 1.875rem;
                    height: 1.875rem;
                }
            }
        }
    }

    @media (max-width: 990px) {
        ul:nth-child(2) {
            div {
                width: 8.75rem;
            }
            .div {
                div:first-child {
                    display: none;
                }
            }
        }
    }

    @media (max-width: 1210px) {
        height: 23rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 0;
        height: 23rem;
        justify-content: space-around;

        ul:first-child {
            gap: 0.5rem;

            li {
                width: 7.9375rem;
            }
        }

        ul:nth-child(2) {
            display: none;
        }

        div:nth-child(3) {
            display: flex;

            span {
                width: 9.375rem;
            }
        }

        .social-media {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 1.875rem;
        }
    }
`;
