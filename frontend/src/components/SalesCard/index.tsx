import './styles.css';

import NotificationButton from '../NotificationButton';

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-title-sales">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>

                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th>Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>
                                <th>Total</th>
                                <th>
                                    Notificar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show992">#1</td>
                                <td className="show576">08/05/2021</td>
                                <td>Anakin</td>
                                <td className="show992">25</td>
                                <td className="show992">16</td>
                                <td>R$5000000</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <div className="dsmeta-red-btn">
                                            <NotificationButton />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesCard
