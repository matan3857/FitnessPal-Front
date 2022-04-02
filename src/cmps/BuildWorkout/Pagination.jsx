import React from 'react';

export function Pagination({ exercisesPerPage, totalExercises, paginate, currentPage, onTogglePage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalExercises / exercisesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <div className='pagination flex justify-center'>
                <p className='page-link flex align-center' onClick={() => { onTogglePage(0) }}>&#60;</p>
                {pageNumbers.map(number => (
                    <p key={number} onClick={() => paginate(number)} className={`page-link flex align-center ${(currentPage === number) ? 'chosen-page' : ''}`} >
                        {number}
                    </p>
                ))}
                <p className='page-link flex align-center' onClick={() => { onTogglePage(1) }}>&#62;</p>
            </div>
        </nav>
    );
};