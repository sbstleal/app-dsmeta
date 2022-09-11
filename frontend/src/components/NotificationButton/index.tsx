import './styles.css';

import axios from 'axios';

import icon from '../../assets/img/notification-icon.svg';
import { Props } from '../../models/props';
import { BASE_URL } from '../../utils/request';


function handleClick(saleId: number) {
    axios.get(`${BASE_URL}/sales/${saleId}/notification`)
    .then(response => {
        console.log("Success");
    })
}

function NotificationButton({saleId}: Props) {
    return (
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Ícone de Notificação" />
            </div>
    )
}

export default NotificationButton;
