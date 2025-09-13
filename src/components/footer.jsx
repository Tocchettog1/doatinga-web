import Mail from '@mui/icons-material/Mail';
import Favorite from '@mui/icons-material/Favorite';

const Footer = () => { 
    return ( 
        <div className="border-t-1 border-cinza-principal w-full bg-branco-principal text-preto-principal font-fonte-principal shadow-[0_-5px_7px_-2px_rgba(0,0,0,0.1)]">
            {/* Seções principais  */}
            <div className="flex justify-between px-10 py-2 items-center">
                {/* DOATINGA */}
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-3">
                        <img src="/src/assets/logo.svg" alt="logo" />
                        <h3 className="font-medium text-xl">Doatinga</h3>
                    </div>
                    <p className="text-sm font-extralight max-w-xs">
                        Conectando doadores com pontos de coleta em toda a cidade. 
                        Facilite suas doações e ajude quem mais precisa.
                    </p>
                </div>

                {/* Links úteis */}
                <div className="flex flex-col space-y-3 ">
                    <h3 className="font-medium text-xl">Links úteis</h3>
                    <div className="flex flex-col font-extralight space-y-1 text-sm">
                        <p>Como funciona</p>
                        <p>Tipos de doação</p>
                        <p>Pontos parceiros</p>
                    </div>
                </div>

                {/* Contato */}
                <div className="flex flex-col space-y-3">
                    <h3 className="font-medium text-xl">Contato</h3>
                    <div className="flex flex-col space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-amarelo-principal rounded flex items-center justify-center">
                                <Mail sx={{ fontSize: 12, color: 'white' }} />
                            </div>
                            <span className="font-extralight">contato@doatinga.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-amarelo-principal rounded flex items-center justify-center">
                                <Favorite sx={{ fontSize: 12, color: 'white' }} />
                            </div>
                            <span className="font-extralight">Feito com amor!</span>
                        </div>
                    </div>
                </div>

                {/* Faça parte Section */}
                <div className="flex flex-col space-y-3">
                    <h3 className="font-medium text-xl">Faça parte!</h3>
                    <p className="text-sm font-extralight">Cadastro de pontos de coleta</p>
                </div>
            </div>

            {/* Linha separadora e copyright */}
            <div className="border-t border-cinza-principal ">
                <div className="text-center py-4">
                    <p className="text-sm">© 2025 DoaçãoMapa. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;  