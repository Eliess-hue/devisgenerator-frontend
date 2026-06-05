import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Intercepteur - ajoute automatiquement le token JWT à chaque requête
apiClient.interceptors.request.use((config) => {

    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config

})

// Intercepteur de réponse — gère les tokens expirés
apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401 &&
            !error.config.url.includes('/api/auth/login')) {
            localStorage.removeItem('token')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

// Auth
export const login = (username, password) =>
    apiClient.post('/api/auth/login', { username, password })

export const register = (username, password) =>
    apiClient.post('/api/auth/register', { username, password })

// Clients
export const getClients = () =>
    apiClient.get('/api/clients')

export const createClient = (
    name,
    email,
    phone,
    address
) =>
    apiClient.post('/api/clients', {
        name,
        email,
        phone,
        address
    })

export const updateClient = (
    id,
    name,
    email,
    phone,
    address
) =>
    apiClient.put(`/api/clients/${id}`, {
        name,
        email,
        phone,
        address
    })

export const deleteClient = (id) =>
    apiClient.delete(`/api/clients/${id}`)

// Quote
export const getQuotes = () =>
    apiClient.get('/api/quotes')

export const createQuote = (clientId, status) =>
    apiClient.post('/api/quotes', { clientId, status })

export const updateQuote = (id, status) =>
    apiClient.put(`/api/quotes/${id}`, {status})

export const deleteQuote = (id) =>
    apiClient.delete(`/api/quotes/${id}`)

// QuoteLine
export const getQuoteLines = (quoteId) =>
    apiClient.get(`/api/quotes/${quoteId}/lines`)

export const addQuoteLine = (quoteId, line) =>
    apiClient.post(`/api/quotes/${quoteId}/lines`, line)

export const deleteQuoteLine = (quoteId, lineId) =>
    apiClient.delete(`/api/quotes/${quoteId}/lines/${lineId}`)