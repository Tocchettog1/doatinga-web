const Header = () => { 
    return ( 
        <div className="pr-10 pl-10 border-b-1 border-cinza-principal  w-full h-full text-preto-principal font-fonte-principal text-xl font-normal shadow-[0_5px_7px_-2px_rgba(0,0,0,0.1)]">
            <nav className="flex flex-row gap-4 justify-between">
                <div className="flex flex-row gap-4   p-4 rounded-lg items-center">
                    <img src="/src/assets/logo.svg" alt="logo" />
                    <p>Doatinga</p>
                </div>
                <div className="flex flex-row gap-30   p-4 rounded-lg items-center">
                    <p>Início</p>
                    <p>Pontos de coleta</p>
                    <p>Como doar</p>

                </div>
                <div className="flex flex-row gap-4 p-4 rounded-lg items-center">
                    <p>Cadastro</p>
                </div>
            </nav>
        </div>
    )
}

export default Header;  