import CardCategoria from "../../components/categorias/cardcategoria/CardCategoria";
import ListaHome from "../../components/listaHome/ListaHome";

function Home() {
    return (
        <>
        <div className="bg-fuchsia-900 flex justify-center">
            <div className='container grid grid-cols-2 text-white'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>

                    </h2>
                    <p className='text-8xl font-caveat font-extralight '>
                    FarmaGen
                    </p>

                    <div className="flex text-2xl justify-around gap-4 ">
                        <div className=' text-white  font-extralight font-caveat'>
                        Se até seu deploy precisa de saúde,
                        imagina você.
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <img src="https://s3-alpha-sig.figma.com/img/90f2/3390/bef5416b535346c561ab8ca61d81b67b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WZXTQ6I4nHmFPH67alYGMK-Ap3NZ0UPkeW2OND~dfGROFLi1cqi8sWBis4m3jwV--R~kRTstWTrk3zUEbbSky6EKBJEELzgdqVw6LXsQIv2gUai7qYvM6Isj4QaXCVQt7-g1HY1pQGygQJ50onhhtP3gZ59EvusEUVTOAxUNFqU-hTemIeWteJ-lBO0rFi0J3rcCAre0wVIWO6h-CencIuwZMBpKyOrlqGKrD1GvuaaWL-zWvHjLftnn4wo~mOlvn5lsKBbujHq1I2z1sdtMURnCVTwnQMYqVKQw5iulG~ShKmVGmLjG~FP0v3rOW5Kexrdnm2NLfE19hM14FkxwTw__"
                        alt="Imagem Página Home"
                        className='w-2/3'
                    />
                </div>
            </div>
        </div>  

        <ListaHome />
</>

    );
}

export default Home;
