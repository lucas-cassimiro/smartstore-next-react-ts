"use client";

import styled from "styled-components";

export const Container = styled.div`
    .MuiRating-root {
        color: #faff00;
        gap: 0.75rem;
        border: red;
    }

    @media (max-width: 525px) {
        .jsikzf > div div:first-child {
            min-width: 0;
        }
    }

    @media (max-width: 485px) {
        .MuiRating-root,
        span {
            gap: 0.3125rem;
            font-size: 1.25rem;
        }
    }
`;
