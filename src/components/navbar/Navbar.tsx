import { Link } from "react-router-dom"

function Navbar() {
    return (
        
            <div className='w-full flex justify-center py-4
            bg-fuchsia-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">Projeto FarmaGen </Link> 

                    <div className='flex gap-12'>
                        
                        <Link to='/categorias' className='hover:underline font-extralight'>Lista Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline font-extralight'>Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        
    )
}

export default Navbar;