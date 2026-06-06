import { useAuth } from '../../context/AuthContext'

export default function UserProfile() {

    const { username } = useAuth()

    return (

        <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-primary"></div>

            <span>
                {username}
            </span>

        </div>

    )

}