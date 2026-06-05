import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Layout() {

    const { username } = useAuth()

    const location = useLocation()

    const pageTitles = {
        '/dashboard': 'Tableau de bord',
        '/clients': 'Clients',
        '/quotes': 'Devis'
    }

    const currentTitle =
        pageTitles[location.pathname] || 'DevisApp'

    return (
        <div className="flex min-h-screen bg-base-100">

            {/* Sidebar */}
            <aside className="w-64 bg-base-200 border-r border-base-300 flex flex-col">

                {/* Logo */}
                <div className="p-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary"></div>

                    <span className="font-bold text-lg">
                        DevisApp
                    </span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-3">

                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-lg mb-2 ${
                                isActive
                                    ? 'bg-primary text-primary-content'
                                    : 'hover:bg-base-300'
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/clients"
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-lg mb-2 ${
                                isActive
                                    ? 'bg-primary text-primary-content'
                                    : 'hover:bg-base-300'
                            }`
                        }
                    >
                        Clients
                    </NavLink>

                    <NavLink
                        to="/quotes"
                        className={({ isActive }) =>
                            `block px-4 py-3 rounded-lg ${
                                isActive
                                    ? 'bg-primary text-primary-content'
                                    : 'hover:bg-base-300'
                            }`
                        }
                    >
                        Devis
                    </NavLink>

                </nav>

                {/* Profil */}
                <div className="p-4 border-t border-base-300">

                    <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-primary"></div>

                        <span>
                            {username}
                        </span>

                    </div>

                </div>

            </aside>

            {/* Partie droite */}
            <div className="flex-1 flex flex-col">

                {/* Topbar */}
                <header className="h-20 border-b border-base-300 flex items-center justify-between px-8">

                    <h1 className="text-3xl font-bold">
                        {currentTitle}
                    </h1>

                    <span>
                        {username}
                    </span>

                </header>

                {/* Contenu */}
                <main className="flex-1 p-8">

                    <Outlet />

                </main>

            </div>

        </div>
    )
}