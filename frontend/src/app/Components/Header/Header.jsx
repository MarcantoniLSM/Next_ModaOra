import './Header.css'

export default function Header(){
    return(
        <header className='header'>
            <nav className='navBar'>
                <span>Moda Ora</span>
                <ul>
                    <li><a href="">Portifólio</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
            <img alt={'Modelo capa'} src={'imagens/topo.jpg'}/>
        </header>
    )
}