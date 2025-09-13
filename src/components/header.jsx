const Header = () => {
    return (
        <header className="w-full h-16px-10  border-b border-cinza-principal  text-preto-principal font-fonte-principal text-xl font-normal shadow-md                       
        ">
            <nav className="flex flex-row justify-between items-center h-full">
                {/* Seção Logo */}
                <div className="flex flex-row gap-4 items-center">
                    <img src="/src/assets/logo.svg" alt="logo" />
                    <p>Doatinga</p>
                </div>

                {/* Seção de Links de Navegação */}
                <div className="flex flex-row gap-12 items-center">
                    <a href="/" className="hover:text-gray-500 transition-colors">Início</a>
                    <a href="/pontos-de-coleta" className="hover:text-gray-500 transition-colors">Pontos de coleta</a>
                    <a href="/como-doar" className="hover:text-gray-500 transition-colors">Como doar</a>
                </div>

                {/* Seção de Cadastro */}
                <div className="flex items-center">
                    <a href="/cadastro" className="hover:text-gray-500 transition-colors pr-5">Cadastro</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;