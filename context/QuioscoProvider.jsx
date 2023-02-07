import { useState,useEffect,createContext } from "react";
import axios from "axios";

const QuioscoContext=createContext()

const QuioscoProvider=({children})=>{
    const [categorias,setCategorias]=useState([])
    const [categoriaActual,setCategoriaActual]=useState({})
    const[producto,setProducto]=useState({})
    const [modal,setModal]=useState(false)


    const obtenerCategorias=async ()=>{
        const {data}=await axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(()=>{
        obtenerCategorias()
    },[])

    useEffect(()=>{
        setCategoriaActual(categorias[1])
    },[categorias])

    const handleClickCategoria=id=>{
        const categoria=categorias.filter(cat=>cat.id===id)
        setCategoriaActual(categoria[0])
    }

    const handleSetProducto=producto=>{
        setProducto(producto)
    }

    const handleChangeModal=()=>{
        setModal(!modal)
    }

    return(
        <QuioscoContext.Provider
        value={{
            categorias,
            handleClickCategoria,
            categoriaActual,
            handleSetProducto,
            producto,
            handleChangeModal,
            modal
        }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export{
    QuioscoProvider  
}
export default QuioscoContext