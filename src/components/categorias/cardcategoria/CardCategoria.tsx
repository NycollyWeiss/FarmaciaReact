import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border-[5px] h-[160px] justify-center items-center border-fuchsia-900 flex flex-col w-[370px] rounded-[15px] overflow-hidden'>
            <header className='py-0.5 pt-[40px] px-1 bg-white text-fuchsia-900 font-bold text-2xl '>
                {categoria.nome}
            </header>
            <p className=' text-[70x] bg-white h-full'>{categoria.descricao}</p>

            <div className="flex space-x-3 py-1 gap-4 mb-[40px] justify-center items-center place-content-evenly pb-[px] pt-[10px]">
                    <Link
                        to={`/editarcategoria/${categoria.id}`}
                        className="w-[150px] text-black bg-blue-300 hover:bg-blue-400 
                        border-[1.5px] border-black rounded-[9px]
                        flex items-center justify-center py-3 text-lg font-semibold">
                        Editar
                        </Link>
                        <Link
                            to={`/deletarcategoria/${categoria.id}`}
                            className="w-[150px] text-black bg-red-400 hover:bg-red-500  
                                    border-[1.5px] border-black rounded-[9px]
                                    flex items-center justify-center py-3  text-lg font-semibold">
                                    Apagar
                        </Link>
                        </div>

        </div>
    );
}

export default CardCategoria;