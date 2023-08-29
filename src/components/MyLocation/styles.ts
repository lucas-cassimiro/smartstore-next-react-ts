"use client";

import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3.125rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: center;
    min-width: 15.9375rem;

    form {
        display: flex;
        gap: 0.625rem;
        input {
            height: 3rem;
            padding: 0.75rem 1rem;
            width: 100%;
            max-width: 11.5rem;
            border: 1px solid #e5e5e5;
            border-radius: 0.1875rem;
            margin-bottom: 1.25rem;

            &::-webkit-input-placeholder {
                font-size: 1rem;
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
            padding: 0.625rem 1.75rem;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 900;
            font-style: normal;
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
        width: 18.75rem;
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
`;
