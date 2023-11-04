import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';

type Props = {
    pageCount: number;
    range: number;
    onChange?: (pageNumber: number) => void;
    forcePage?: number;
};

const Pagination = ({ pageCount, range, onChange, forcePage }: Props) => {
    return (
        <ReactPaginate
            forcePage={forcePage}
            pageCount={pageCount}
            pageRangeDisplayed={range}
            marginPagesDisplayed={1}
            containerClassName='pagination-container'
            pageLinkClassName='pagination-item'
            breakClassName='pagination-item'
            previousClassName='arrow-previews'
            nextClassName='arrow-next'
            activeLinkClassName='pagination-link-active'
            disabledClassName='arrow-inactive'
            onPageChange={(items) => (onChange) ? onChange(items.selected) : {}}

            previousLabel={<div className='pagination-arrow-container'><ArrowIcon /></div>}
            nextLabel={<div className='pagination-arrow-container'><ArrowIcon /></div>}
        />
    )
}

export default Pagination;
