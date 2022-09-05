import './styles.css';

import logo from '../../assets/img/logo.svg';

function Header() {
    return (
        <header>
            <div className="dsmeta-header-container">
                <img src={logo} alt="Logo DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/sbstleal"> @sbstleal</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;
