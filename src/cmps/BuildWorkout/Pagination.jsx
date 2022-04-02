import React from 'react';

export function Pagination({ exercisesPerPage, totalExercises, paginate, currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className='pagination flex justify-center'>
                {pageNumbers.map(number => (
                    <p key={number} onClick={() => paginate(number)} className={`page-link flex align-center ${(currentPage === number) ? 'chosen-page' : ''}`} >
                        {number}
                    </p>
                ))}
            </div>
        </nav>
    );
};