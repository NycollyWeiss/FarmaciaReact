

function Footer() {

    let data = new Date().getFullYear()

    return (
            <div className="flex justify-center bg-fuchsia-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl'>
                    Projeto FarmGen | Copyright: {data}
                        </p>
                    <p className='text-lg'>Feito com muito Odio</p>
                </div>
            </div>
        
    )
}

export default Footer