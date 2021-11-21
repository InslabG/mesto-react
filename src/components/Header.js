import header_logo from '../images/header-logo.svg';

function Header(){
    return (
    <header class="header root__header">
        <img src={header_logo} class="header__logo" alt="Лого" />
    </header>
    );
}

export default Header;