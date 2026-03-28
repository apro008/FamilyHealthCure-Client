import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({ docId, speciality }) => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext);

    const [relDocs, setRelDocs] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDocs(doctorsData)
        }
    }, [doctors, speciality, docId])

    if (relDocs.length === 0) return null;

    return (
        <section className='py-16'>
            <div className='text-center mb-8'>
                <h2 className='section-heading'>Related Doctors</h2>
                <p className='section-subtext mt-2'>Browse through our extensive list of trusted doctors.</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {relDocs.slice(0, 5).map((item, index) => (
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
            <div className='text-center mt-8'>
                <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='btn-outline text-sm px-10 py-2.5'>
                    View More
                </button>
            </div>
        </section>
    )
}

export default RelatedDoctors
