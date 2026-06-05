import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function QuotesPage() {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <div className="min-h-screen bg-base-100 p-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-base-content">Devis</h1>
                <button
                    onClick={handleLogout}
                    className="btn btn-outline btn-error rounded-lg"
                >
                    Se déconnecter
                </button>
            </div>
        </div>
    )
}