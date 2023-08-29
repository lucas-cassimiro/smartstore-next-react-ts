"use client";

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: relative;

    svg {
        font-size: 1.3rem;
    }

    > div {
        position: absolute;
        top: calc(-100% - 50px);
        transform: translateX(-50%);
        background-color: rgba(0, 0, 0, 0.8);
        color: #ffffff;
        padding: 0.625rem;
        border-radius: 0.25rem;
        z-index: 1;
        min-width: 12.5rem;
    }
`;
