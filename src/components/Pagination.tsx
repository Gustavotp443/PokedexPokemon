import React from "react";
import { ArrowButtons, PageButton, PaginationContainer } from "./Pagination.styles";

const max_items = 9;
const max_left = (max_items - 1) / 2;

export type Pagination = {
    limit: number,
    total: number,
    offset: number,
    setOffset: React.Dispatch<React.SetStateAction<number>>,

}

const Pagination = ({ limit, total, offset, setOffset }: Pagination) => {

    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - max_left, 1);

    function onPageChange(page: number) {
        setOffset((page - 1) * limit);
    }

    return (

        <PaginationContainer>
            <li>
                <ArrowButtons
                    onClick={() => { onPageChange(current - 1); }}
                    disabled={current === 1}
                >Prev</ArrowButtons>
            </li>
            {Array.from({ length: Math.min(max_items, pages) }).map((_, index) => index + first)
                .map((page, key) => {
                    if (page <= pages) {

                        return (

                            <li key={key}>
                                <PageButton
                                    current={page === current ? "pagination_item_active" : null
                                    }
                                    onClick={() => onPageChange(page)
                                    }>{page}</PageButton>
                            </li>

                        );
                    }
                }
                )}
            <li>
                <ArrowButtons
                    onClick={() => { onPageChange(current + 1); }}
                    disabled={current === pages}
                >Next</ArrowButtons>
            </li>
        </PaginationContainer>
    );
};

export default Pagination;