import './styles.css';

import icon from '../../assets/notification-icon.svg';

function NotificationButton() {
    return (
            <div className="dsmeta-red-btn">
                <img src={icon} alt="Ícone de Notificação"></img>
            </div>
    )
}

export default NotificationButton
