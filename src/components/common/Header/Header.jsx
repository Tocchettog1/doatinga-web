import LogoDoatinga from '../../common/Logo/LogoDoatinga';
import './Header.css';

function Header() {
    return (
        <section className='Header'>
            <div className='HeaderBarra'>
                <LogoDoatinga />
            </div>
            <nav className='HeaderNav'>
                <ul>
                    <li>Início</li>
                    <li>Catálogo</li>
                    <li>Como funciona</li>
                </ul>
            </nav>
            <div className='HeaderCadastro'>
                <a href='/cadastro'>Cadastre-se</a>
            </div>
            <div className='HeaderInstituicao'>
                <a href='#'>Sou Instituição</a>
            </div>
        </section>
    );
}

export default Header;
