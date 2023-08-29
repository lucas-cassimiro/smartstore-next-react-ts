"use client";

import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    > div:first-child {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;

        position: relative;

        width: 100%;
        height: 2.125rem;

        background-color: #3877c9;
        color: #ffffff;

        padding: 0 1.6rem;

        p {
            margin: 0 auto;
            font-size: 0.8rem;

            span {
                color: #faff00;
                margin-left: 0.3rem;
            }
        }

        a {
            position: absolute;
            font-size: 0.9rem;
            font-weight: 600;
        }

        @media (max-width: 768px) {
            flex-direction: row;
            justify-content: space-evenly;
            padding: 0 1rem;
            p {
                margin: 0;
            }

            a {
                position: relative;
            }
        }

        @media (max-width: 500px) {
            p {
                font-size: 0.7rem;
            }

            a {
                font-size: 0.8rem;
            }
        }

        @media (max-width: 440px) {
            p {
                font-size: 0.5rem;
            }

            a {
                font-size: 0.6rem;
            }
        }
    }

    div:nth-child(2) {
        display: flex;
        align-items: center;
        position: relative;

        width: 100%;
        height: 3.5625rem;

        background-color: #313131;

        padding: 0 2rem;

        > div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            position: absolute;

            aside {
                display: none;
            }

            aside {
                display: flex;
                flex-direction: column;
                background-color: #ffffff;
                position: fixed;
                height: 100%;
                top: 0px;
                left: 0px;
                width: 25rem;
                animation: showSidebar 0.4s;
                z-index: 9999;
                padding: 1.2rem;

                > div {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: #ffffff;
                    > button {
                        background: none;
                        border: none;
                        cursor: pointer;
                    }
                    > p:first-child {
                        color: #212121;
                        margin-left: 1.25rem;
                        font-size: 1.125rem;
                        font-weight: 800;
                    }
                }

                svg {
                    color: #212121;
                    font-size: 1.5625rem;
                }
            }

            a {
                color: #a0a0a0;
                cursor: pointer;
            }
        }

        h1 {
            margin: 0 auto;
        }

        h1 a {
            display: flex;
            justify-content: center;

            -webkit-text-stroke: 1px #074291;
            color: #fff;
            font-size: 2.5rem;

            @media (max-width: 768px) {
                font-size: 2.1875rem;
            }

            @media (max-width: 430px) {
                font-size: 1.875rem;
            }
        }

        @media (max-width: 768px) {
            flex-direction: row-reverse;
            > div {
                display: none;
            }
            a:nth-child(3) {
                position: absolute;
            }
        }

        div:last-child {
            position: relative;
            display: flex;
            align-items: center;

            section {
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;

                left: 0.8125rem;
                bottom: 0.8125rem;

                width: 1.1rem;
                height: 1.1rem;

                border-radius: 50%;

                font-size: 0.9rem;
                font-weight: 600;

                color: #ffffff;
                background-color: red;
            }

            @media (max-width: 430px) {
                img {
                    width: 1.0625rem;
                    height: 1.0625rem;
                }
            }
        }
    }

    nav {
        > div {
            display: none;
        }

        width: 100%;
        background-color: #313131;
        border-top: 0.0625rem solid;

        button {
            display: none;
            background-color: transparent;
            border: none;
            margin-left: 1.25rem;
            font-size: 1.25rem;
            color: #ffffff;
            cursor: pointer;

            aside {
                display: none;
            }

            aside {
                display: flex;
                flex-direction: column;
                background-color: #313131;
                position: fixed;
                height: 100%;
                top: 0px;
                right: 0px;
                width: 15.9375rem;
                animation: showSidebar 0.4s;
                z-index: 999;

                ul {
                    margin-top: 7.5rem;
                    li {
                        margin-bottom: 2.5rem;
                    }
                }

                svg {
                    color: #ffffff;
                    height: 1.875rem;
                    display: flex;
                    margin-top: 1.5625rem;
                    margin-left: 2.5rem;
                    cursor: pointer;
                }

                @media (max-width: 500px) {
                    width: 12.5rem;
                }
            }
            ul {
                display: block;
            }
        }

        ul {
            display: flex;
            justify-content: space-evenly;
            height: 3rem;
            align-items: center;
            font-size: 1.1rem;

            li {
                a {
                    color: #ffffff;
                    font-weight: 600;

                    &:hover {
                        border-bottom: 2px solid #fff;
                        font-weight: 700;
                    }
                }
            }
        }

        .active {
            border-bottom: 3px solid #ffffff;
        }

        @media (max-width: 768px) {
            > div {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-left: 0.9375rem;

                > aside {
                    display: flex;
                    flex-direction: column;
                    background-color: #ffffff;
                    position: fixed;
                    height: 100%;
                    top: 0px;
                    left: 0px;
                    width: 16.875rem;
                    animation: showSidebar 0.4s;
                    z-index: 9999;
                    padding: 2rem 0.1rem;

                    > div:first-child {
                        display: flex;
                        align-items: center;
                        gap: 1.5625rem;

                        > button {
                            color: #000000;
                        }

                        > p:first-child {
                            color: #212121;
                            margin-left: 1.25rem;
                            font-size: 0.75rem;
                            font-weight: 800;
                            min-width: 10rem;
                        }
                    }

                    div:last-child {
                        margin-top: 3.125rem;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        min-width: 15.9375rem;
                        background: #ffffff;

                        form {
                            display: flex;
                            justify-content: center;
                            gap: 1px;
                            margin-left: 0.9375rem;
                            input {
                                height: 3rem;
                                padding: 0.5rem 0.75rem;
                                width: 7.5rem;
                                border: 1px solid #e5e5e5;
                                border-radius: 0.1875rem;
                                margin-bottom: 1.25rem;

                                &::-webkit-input-placeholder {
                                    font-size: 0.875rem;
                                    font-weight: 400;
                                    font-style: normal;
                                    color: #000000;
                                }
                            }

                            button {
                                background-color: #c6d30d;
                                height: 3.0625rem;
                                border-radius: 0.1875rem;
                                border: 1px solid #c6d30d;
                                padding: 0.25rem 1.25rem;
                                cursor: pointer;
                                font-size: 0.875rem;
                                font-weight: 900;
                                font-style: normal;
                                color: #000000;
                            }
                        }

                        > p {
                            color: #333333;
                            font-weight: 700;
                            margin-top: 0.625rem;
                        }

                        ol {
                            margin-top: 1.25rem;
                            border: 1px solid #7c7b7b;
                            border-radius: 0.1875rem;
                            width: 15.625rem;
                            padding: 0.625rem;
                            cursor: pointer;
                            p {
                                color: #7c7b7b;
                            }
                        }

                        li:last-child {
                            margin-top: 0.9375rem;
                            p:last-child {
                                font-weight: 800;
                            }
                        }

                        span {
                            color: #ed1c24;
                            font-size: 0.875rem;
                        }
                    }
                }

                a {
                    color: #a0a0a0;
                    cursor: pointer;
                    font-weight: 400;
                    font-size: 1rem;
                }

                @media (max-width: 550px) {
                    a {
                        font-size: 0.8rem;
                    }
                }

                @media (max-width: 330px) {
                    a {
                        font-size: 0.625rem;
                    }
                }
            }

            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            ul {
                display: none;
            }

            button {
                display: flex;
                align-items: center;
                margin-right: 1.9rem;
            }
        }
    }
`;
