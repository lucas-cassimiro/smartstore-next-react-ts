"use client";

import styled from "styled-components";

export const Container = styled.div`
    > button:first-child {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    button:last-child {
        background-color: transparent;
        border: 0;
        cursor: pointer;
        position: absolute;
        right: 1%;
        top: 50%;
        transform: translateY(-50%);

        img {
            transform: rotateY(180deg);
        }
    }

    @media (max-width: 990px) {
        button {
            display: none;
        }
    }
`;
