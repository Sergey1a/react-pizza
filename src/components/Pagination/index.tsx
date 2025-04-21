import ReactPaginate from 'react-paginate';

import styles from './Paginagion.module.scss'

const Pagination = ({currentPage,setSelectedPage}) => {

    return (
            <ReactPaginate
                className={styles.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={event => setSelectedPage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                forcePage={currentPage}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
    );
}

export default Pagination;