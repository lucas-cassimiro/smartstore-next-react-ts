"use client";

import styled from "styled-components";

export const Container = styled.div`
    padding-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background-color: #e03131;
        width: 100%;
        max-width: 16.5rem;
        min-height: 4rem;

        border: none;
        border-radius: 8px;
        cursor: pointer;

        font-weight: 700;
        font-size: 1.25rem;
        text-transform: uppercase;
        color: #ffffff;

        transition: background 0.3s;

        &:hover {
            background: #aa2424;
        }
    }

    span {
        font-weight: 500;
        text-transform: uppercase;

        strong {
            margin-left: 0.75rem;
            font-weight: 700;
            font-size: 2.25rem;
            color: black;
        }
    }

    @media (max-width: 540px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        justify-content: flex-start;

        button {
            max-width: 100%;
        }

        span {
            margin-bottom: 2rem;

            strong {
                font-size: 1.9rem;
            }
        }
    }
`;
