export default function QuoteLinesTable({lines}) {

    return (

        <div className="card bg-base-200 border border-base-300 rounded-lg">

            <div className="card-body">

                <h3 className="font-semibold">

                    Lignes du devis

                </h3>

                {lines.length === 0 ? (

                    <p className="text-base-content/60">

                        Aucune ligne

                    </p>

                ) : (

                    <div className="overflow-x-auto">

                        <table className="table">

                            <thead>

                            <tr>

                                <th>Description</th>

                                <th>Qté</th>

                                <th>Prix unitaire</th>

                                <th>Total</th>

                            </tr>

                            </thead>

                            <tbody>

                            {lines.map(line => (

                                <tr key={line.id}>

                                    <td>
                                        {line.description}
                                    </td>

                                    <td>
                                        {line.quantity}
                                    </td>

                                    <td>
                                        {Number(
                                            line.unitPrice
                                        ).toFixed(2)} €
                                    </td>

                                    <td>
                                        {Number(
                                            line.total
                                        ).toFixed(2)} €
                                    </td>

                                </tr>

                            ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </div>

    )

}