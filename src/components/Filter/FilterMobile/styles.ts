"use client";

import styled, { css } from "styled-components";

interface ContainerProps {
    isvisible: number;
}

export const Container = styled.div<ContainerProps>`
    > p {
        width: 100%;
        padding: 2rem 2.5rem;
    }

    > div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        button {
            background: #3877c9;
            border-radius: 0.5rem;
            width: 5rem;
            height: 1.875rem;
            color: #ffffff;
            border: none;
            font-weight: 500;
            font-size: 0.9375rem;

            li {
                list-style: none;
            }
        }

        > div {
            display: none;
        }

        ${({ isvisible }) =>
            isvisible
                ? css`
                      > div {
                          display: flex;
                          flex-direction: column;
                          background-color: #313131;
                          position: fixed;
                          height: 100%;
                          top: 0px;
                          left: 0px;
                          width: 15.9375rem;
                          animation: showSidebar 0.4s;
                          z-index: 1;

                          section {
                              width: 15.9375rem;
                              display: flex;
                              justify-content: flex-end;
                              padding-right: 1.5625rem;

                              svg {
                                  color: #fff;
                                  height: 1.875rem;
                                  margin-top: 0.9375rem;
                                  cursor: pointer;
                              }
                          }

                          h3:nth-child(2) {
                              text-align: center;
                              color: #fff;
                              margin-top: 0.625rem;
                          }

                          > h3 {
                              color: #fff;
                              margin-bottom: 0.625rem;
                              margin-top: 0.9375rem;
                              margin-left: 0.9375rem;
                          }

                          label {
                              color: white;
                              gap: 0.4375rem;
                          }
                      }
                  `
                : css``}
    }
`;

export const Content = styled.section`
    width: 12.5rem;

    label {
        font-weight: 600;
        font-size: 1rem;
        margin-right: 0.5rem;
    }

    select {
        width: 12.5rem;
        height: 1.875rem;
        background: #ffffff;
        border: 2px solid rgba(158, 158, 158, 0.87);
        border-radius: 0.5rem;
        cursor: pointer;
        margin-right: 1.5rem;
        font-size: 0.875rem;
        font-weight: 400;
        color: #313131;
        padding: 0 0.625rem;
    }

    input {
        width: 12.5rem;
        height: 1.875rem;
        background: #ffffff;
        border: 2px solid rgba(158, 158, 158, 0.87);
        border-radius: 0.5rem;
        padding: 0 0.625rem;
        margin-top: 0.3125rem;

        &::-webkit-input-placeholder {
            font-size: 0.875rem;
            font-weight: 400;
            font-style: italic;
            color: #989898;
        }
    }
`;

export const Celulares = styled.aside`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin-top: 3.125rem;

    > p {
        text-align: center;
        height: 9.375rem;
        margin-top: 3.125rem;
    }

    @media (max-width: 500px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media (max-width: 400px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`;
