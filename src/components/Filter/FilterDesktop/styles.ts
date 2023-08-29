"use client";

import styled from "styled-components";

export const Container = styled.div`
    > div {
        display: flex;
        padding: 0 6.25rem;

        > div:first-child {
            margin-top: 5rem;
            min-width: 13.9375rem;

            > h3 {
                margin-bottom: 1.5rem;
            }

            p:nth-child(1n) {
                margin-bottom: 0.5rem;
            }

            > div {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 1.5rem;
            }

            div:nth-child(7) {
                flex-direction: column;
                 input {
                   accent-color: #ffffff;
                 }

                 input::before {
                     color: red;
                 }

                h4 {
                    margin-bottom: 1rem;
                }
            }
        }
    }

    .order {
        margin-left: 6.25rem;
        width: 120rem;
        min-width: 31.25rem;

        > div:first-child {
            border-bottom: 1px solid black;
            height: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            max-width: 120rem;
            min-width: 25rem;
            margin-bottom: 1.875rem;
            position: relative;

            > div {
                margin-bottom: 2.5rem;
            }

            label {
                font-weight: 600;
                font-size: 1rem;
                margin-right: 0.5rem;
            }

            select {
                width: 16.25rem;
                min-width: 7.5rem;
                height: 2.375rem;
                background: #ffffff;
                border: 2px solid rgba(158, 158, 158, 0.87);
                border-radius: 0.5rem;
                cursor: pointer;
                margin-right: 1.5rem;
                font-size: 1rem;
                font-weight: 400;
                color: #313131;
                padding: 0 0.625rem;
            }

            input {
                width: 15.625rem;
                min-width: 6.25rem;
                height: 2.4375rem;
                background: #ffffff;
                border: 2px solid rgba(158, 158, 158, 0.87);
                border-radius: 0.5rem;
                padding: 0 0.625rem;

                &::-webkit-input-placeholder {
                    font-size: 1rem;
                    font-weight: 400;
                    font-style: italic;
                    color: #989898;
                }
            }
        }

        > div:nth-child(2) {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 0.4375rem;

            > span {
                text-align: center;
            }
        }

        div:nth-child(3) {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4375rem;
        }

        @media (max-width: 1031px) {
            margin-left: 3.75rem;
        }
    }
`;
