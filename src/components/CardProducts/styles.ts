"use client";

import styled from "styled-components";

export const Container = styled.div`
    margin-right: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 1.875rem;
    margin-bottom: 1.25rem;
    margin-top: 1.25rem;

    @media (max-width: 1410px) {
        margin-left: -0.625rem;
    }

    @media (max-width: 1201px) {
        margin-left: 0.625rem;
    }

    @media (max-width: 1105px) {
        margin-left: -0.625rem;
    }

    @media (max-width: 485px) {
        margin-left: -1.875rem;
    }

    img {
        height: 9.375rem;
        width: 11.875rem;
        object-fit: contain;
        margin-bottom: 0.9375rem;

        @media (max-width: 990px) {
            width: 15.625rem;
            height: 12.5rem;
        }

        @media (max-width: 800px) {
            width: 12.5rem;
            height: 10rem;
        }

        @media (max-width: 500px) {
            width: 10rem;
            height: 6.875rem;
        }

        @media (max-width: 485px) {
            width: 8.125rem;
            height: 6.25rem;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-left: 1rem;
        gap: 0.625rem;

        div:first-child {
            display: flex;
            gap: 0.5rem;
            min-width: 14rem;

            > p {
                padding: 0.375rem 1.25rem;
                background: #d93a1e;
                border-radius: 4px;
                color: white;
                font-weight: 600;
            }

            p:last-child {
                background: #313131;
                font-size: 1rem;
            }

            @media (max-width: 593px) {
                display: block;
            }

            > p {
                width: 5rem;
            }

            p:last-child {
                width: 9.375rem;
            }

            @media (max-width: 525px) {
                min-width: 7.625rem;
            }

            @media (max-width: 486px) {
                > p {
                    font-size: 0.8125rem;
                    width: 4.375rem;
                }

                p:last-child {
                    font-size: 0.8rem;
                    width: 8.125rem;
                }
            }
        }

        h4 {
            font-weight: 400;
            font-size: 0.875rem;
            min-width: 8.25rem;
        }

        > p {
            font-size: 0.75rem;
            color: rgba(49, 49, 49, 0.5);
            text-decoration-line: line-through;
        }

        section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 12.5rem;

            p {
                font-weight: 600;
                font-size: 1rem;
            }

            button {
                background-color: transparent;
                border: none;
                cursor: pointer;
                font-size: 1.5625rem;
                position: relative;

                span {
                    position: absolute;
                    left: 1rem;
                    bottom: 1rem;
                    width: 1.1rem;
                    height: 1.1rem;
                    border-radius: 50%;
                    font-size: 0.8rem;
                    font-weight: 600;
                    color: #ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #e03131;
                }

                svg {
                    color: #000000;
                }

                @media (max-width: 485px) {
                    font-size: 1.25rem;
                }
            }

            @media (max-width: 533px) {
                width: 10.625rem;
            }

            @media (max-width: 485px) {
                width: 9.375rem;
            }

            @media (max-width: 375px) {
                width: 8.5rem;
            }
        }

        p:last-child {
            font-size: 0.75rem;
            text-decoration-line: none;
            color: #000;
            min-width: 7.6875rem;
        }
    }
`;
