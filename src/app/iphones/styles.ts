"use client";

import styled from "styled-components"

export const Container = styled.div`
    > p {
        width: 100%;
        padding: 2rem 6.25rem;

        @media (max-width: 990px) {
            padding: 2rem 1.5625rem;
        }

        @media (max-width: 420px) {
            font-size: 0.875rem;
        }
    }
`;