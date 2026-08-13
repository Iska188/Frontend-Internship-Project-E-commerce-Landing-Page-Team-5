import { Button } from '../../atoms';
import './pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const getVisiblePages = (currentPage: number, totalPages: number): (number | 'ellipsis')[] => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 'ellipsis', totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 'ellipsis', totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, 'ellipsis', currentPage, 'ellipsis', totalPages];
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <nav className="m-pagination" aria-label="Pagination">
      <Button
        variant="pagination"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        {'<-'}
      </Button>

      {visiblePages.map((page, index) => {
        if (page === 'ellipsis') {
          const prevPage = visiblePages[index - 1];
          return (
            <span key={`ellipsis-after-${prevPage}`} className="m-pagination__ellipsis">
              ...
            </span>
          );
        }

        return (
          <Button
            key={page}
            variant="pagination"
            className={page === currentPage ? 'is-active' : ''}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="pagination"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        {'->'}
      </Button>
    </nav>
  );
};