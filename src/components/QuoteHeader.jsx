import QuoteStatusBadge from './QuoteStatusBadge'

export default function QuoteHeader({
                                        quote
                                    }) {

    return (

        <div className="flex items-start justify-between">

            <div className="space-y-3">

                <h1 className="text-4xl font-bold">

                    {quote.number}

                </h1>

                <QuoteStatusBadge
                    status={quote.status}
                />

            </div>

            <div className="flex gap-3">

                <button
                    className="
                        px-5
                        py-2
                        rounded-lg
                        border
                        border-[#2E2E2E]
                        bg-transparent
                        text-white
                        hover:bg-[#111111]
                        transition
                    "
                >
                    Modifier
                </button>

                <button
                    className="
                        btn
                        btn-primary
                        rounded-lg
                    "
                >
                    PDF
                </button>

            </div>

        </div>

    )

}