import header_logo from '../images/header-logo.svg';

function Header(){
    return (
    <header className="header root__header">
        <img src={header_logo} className="header__logo" alt="Лого" />
    </header>
    );
}

export default Header;