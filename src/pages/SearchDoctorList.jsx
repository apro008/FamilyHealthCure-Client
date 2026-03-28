import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import SearchDoctors from '../components/SearchDoctors';
import SEO from '../components/SEO';

const SearchDoctorList = () => {
  const { searchDoctors } = useContext(AppContext);
  const navigate = useNavigate();

  const searchKeyword = localStorage.getItem('searchKeyword');

  return (
    <div className='py-8 animate-fade-in'>
      <SEO title="Search Doctors" path="/search" description="Search for doctors by specialty or condition at Family Health Care Kolkata." />
      <h1 className='section-heading mb-2'>Search Results</h1>
      <p className='text-gray-500 mb-6'>Showing results for "{searchKeyword}"</p>

      <div className="max-w-md mb-8">
        <SearchDoctors />
      </div>

      {searchDoctors.length > 0 ? (
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
          {searchDoctors.map((item, index) => (
            <div
              onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
              className='card p-0 overflow-hidden cursor-pointer hover:-translate-y-1 group'
              key={index}>
              <div className='bg-primary-light'>
                <img className='w-full aspect-square object-cover' src={item.image} alt="" />
              </div>
              <div className='p-4'>
                <div className={`flex items-center gap-1.5 text-xs mb-1 ${item.available ? 'text-primary-green' : 'text-gray-400'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${item.available ? 'bg-primary-green' : 'bg-gray-400'}`} />
                  {item.available ? "Available" : "Not Available"}
                </div>
                <p className='text-gray-900 font-semibold text-sm'>{item.name}</p>
                <p className='text-gray-500 text-xs'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className='card p-12 text-center'>
          <div className="w-16 h-16 bg-surface rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className='text-lg font-semibold text-gray-700'>No doctors found</h3>
          <p className='text-gray-400 text-sm mt-1'>Try a different search term</p>
        </div>
      )}
    </div>
  )
}

export default SearchDoctorList
