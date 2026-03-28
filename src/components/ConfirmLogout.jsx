import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ConfirmLogout = ({ item }) => {
    const navigate = useNavigate();
    const { token, setToken } = useContext(AppContext)

    const logout = () => {
        navigate('/')
        token && setToken(false)
        token && localStorage.removeItem('token')
        item.setShowConfirm(false)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 shadow-elevated m-6 w-full max-w-sm animate-slide-up">
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">Confirm Logout</h2>
                <p className="text-sm text-gray-500 mb-6">Are you sure you want to logout from your account?</p>
                <div className="flex gap-3">
                    <button
                        onClick={() => item.setShowConfirm(false)}
                        className="flex-1 py-2.5 bg-surface text-gray-700 rounded-xl font-medium text-sm hover:bg-surface-dark transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={logout}
                        className="flex-1 py-2.5 bg-accent text-white rounded-xl font-medium text-sm hover:bg-red-700 transition-colors cursor-pointer"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmLogout
