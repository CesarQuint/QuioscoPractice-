import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco";

const Categoria = ({categoria}) => {
    const {categoriaActual,handleClickCategoria}=useQuiosco()
    const {nombre,icono,id}=categoria;
  return (
    <div 
    onClick={()=>handleClickCategoria(id)}
    className={`${categoriaActual?.id===id?"bg-amber-400":""} flex items-center gap-6 w-full border p-5 hover:bg-amber-400 transition-colors ease-linear hover:cursor-pointer`}>
        <Image
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
            alt="imagen Icono"
        />
        <button
        type="button" className="text-2xl font-bold hover:cursor-pointer" 
        >{nombre}</button>
    </div>
  )
}

export default Categoria