"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .order-item {
        background: #313131;
        padding: 1.75rem 1.5rem;
        border-radius: 8px;
        color: white;

        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 1.5rem;

        > div:first-child {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 250px;
                height: 310px;
                object-fit: contain;
                border-radius: 4px;
            }
        }

        > div:last-child {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h4 {
                margin-bottom: 0.5rem;
                font-weight: 400;
                font-size: 1.3rem;
            }

            > span {
                font-weight: 700;
                font-size: 1.5rem;
            }

            div {
                display: flex;
                align-items: center;
                gap: 2rem;
                margin: 0.875rem 0;

                div {
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    button {
                        background: none;
                        flex: 0;
                        border: none;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        img {
                            width: 2rem;
                            height: auto;
                        }
                    }

                    span {
                        display: block;
                        background: white;
                        padding: 0.125rem 0.75rem;
                        border-radius: 4px;

                        font-weight: 500;
                        font-size: 1.3rem;
                        color: black;
                    }
                }

                button {
                    flex-shrink: 0;
                    background: none;
                    border: none;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    svg {
                        fill: yellow;
                        width: 1.6rem;
                        height: 1.6rem;
                    }
                }
            }

            h5 {
                span {
                    display: block;
                    font-size: 1.5rem;
                    font-weight: 700;
                }

                font-weight: 400;
                font-size: 2.2rem;
            }
        }

        @media (max-width: 540px) {
            grid-template-columns: 1fr;

            padding: 1rem;

            > div:first-child {
                height: 20rem;
            }

            > div:last-child {
                div {
                    gap: 2rem;
                }

                h5 {
                    span {
                        font-size: 1.5rem;
                    }

                    font-size: 1.8rem;
                }
            }
        }
    }
`;
