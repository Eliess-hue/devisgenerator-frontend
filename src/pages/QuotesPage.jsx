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
        <div>
            Devis
        </div>
    )
}