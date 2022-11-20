import styled from "styled-components";

export type Current = {
    current: string | null;
}

export const PaginationContainer = styled.ul`
    display: flex;
    list-style: none;
    margin: 0 4%;
    justify-content: center;
    align-items: center;
    gap: 3px;
`;
export const ArrowButtons = styled.button`
    width: 40px;
    cursor: pointer;
`;

export const PageButton = styled.button<Current>`
        width: 20px;
        cursor: pointer;
        background-color: ${props => props.current === "pagination_item_active" ? "#9e9e9e" : null};
`;

