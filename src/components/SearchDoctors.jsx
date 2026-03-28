import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const SearchDoctors = () => {
    const { keyword, setKeyword, handleSearchDoctors } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="flex w-full p-1.5 bg-surface border border-gray-200 rounded-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search doctor or speciality..."
                className="w-full px-3 py-2 bg-transparent outline-none text-sm"
            />
            <button
                onClick={() => { handleSearchDoctors(); navigate('/search'); scrollTo(0, 0) }}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center"
                aria-label="Search doctors"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    )
}

export default SearchDoctors
