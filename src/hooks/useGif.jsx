import { useState } from "react"
import { reqGif } from "../service/gif"

export const useGif = () => {

  const [arregloGifs, setArregloGifs] = useState([])
  
  const handleGetGif = async (categoria, e) => {

    e.preventDefault()

    reqGif(categoria).then((arregloGifs) => {
      setArregloGifs(arregloGifs)
    })
  }

  //retorno del hook
  return {
    handleGetGif,
    arregloGifs
  }
}