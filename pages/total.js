import Layout from "@/layout/Layout"
import { useEffect ,useCallback} from "react";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "@/helpers";

export default function Total(){
    const {pedido,nombre,setNombre,colocarOrden,total}=useQuiosco()

    const comprobarPedido=useCallback(()=>{
        return pedido.length===0 || nombre==='' ||nombre.length<3
    },[pedido,nombre])

    useEffect(()=>{
        comprobarPedido()
    },[pedido,comprobarPedido])

    

    return (
        <Layout pagina="Total y Confirmar Pedido">
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuacion</p>
            <form onSubmit={e=>colocarOrden(e)}>
                <div>
                    <label className="block uppercase text-slate-800 font-bold text-xl" htmlFor="nombre">Nombre</label>
                    <input
                    value={nombre}
                    onChange={(e=>setNombre(e.target.value))}
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                    ></input>
                </div>
                <div className="mt-10">
                    <p className="text-2xl">
                        Total a pagar {""}<span className="font-bold">{formatearDinero(total)}</span>
                    </p>
                </div>
                <div className="mt-5">
                    <input
                    type="submit"
                    className=" disabled:cursor-not-allowed disabled:bg-indigo-200
                    hover:bg-indigo-800 hover:cursor-pointer text-center bg-indigo-600 w-full lg:w-auto
                    px-5 py-2 rounded uppercase font-bold text-white"
                    value="Confirmar Pedido"
                    disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}