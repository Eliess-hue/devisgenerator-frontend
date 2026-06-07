import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getQuoteById } from '../api/apiQuote'

import QuoteLinesTable from '../components/QuoteLinesTable'
import QuoteTotalsCard from '../components/QuoteTotalsCard'
import QuoteClientCard from '../components/QuoteClientCard'
import QuoteInfoCard from '../components/QuoteInfoCard'
import QuoteHeader from '../components/QuoteHeader'

export default function QuoteDetailPage() {

    const { id } = useParams()

    const [quote, setQuote] = useState(null)

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(null)

    useEffect(() => {

        const loadQuote = async () => {

            try {

                const response =
                    await getQuoteById(id)

                setQuote(
                    response.data
                )

            } catch (err) {

                console.error(err)

                setError(
                    'Impossible de charger le devis'
                )

            } finally {

                setLoading(false)

            }

        }

        loadQuote()

    }, [id])

    if (loading) {
        return <p>Chargement...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (

        <div className="space-y-8">

            <QuoteHeader
                quote={quote}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <QuoteClientCard
                    client={quote.client}
                />

                <QuoteInfoCard
                    quote={quote}
                />

            </div>

            <QuoteLinesTable
                lines={quote.lines}
            />

            <QuoteTotalsCard
                totalHt={quote.totalHt}
                totalTva={quote.totalTva}
                totalTtc={quote.totalTtc}
            />

        </div>

    )

}