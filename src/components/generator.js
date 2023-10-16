import { FaClipboard } from "react-icons/fa";

const Generator = () => {
  return (
    <div className="max-w-3xl mx-auto pt-40 pb-20">
      <form id="pg-form" className="shadow-xl shadow-standard-blue/80 p-20 items-center rounded-xl">
        <div className="flex mx-5">
          <input
          type="text"
          id="result"
          className="outline-none rounded-l-xl p-4 cursor-pointer w-full bg-black/5"
          readOnly/>
          <p className="bg-standard-blue text-white/90 rounded-r-xl p-5 items-center"><FaClipboard/></p>
        </div> 

        <button type="submit" className="p-5 my-8 w-full font-semibold text-white bg-standard-blue rounded-xl bg-gradient-to-r from-standard-turquoise to-standard-blue">GERAR SENHA</button>

        <div className="flex mx-5">
          <label htmlFor="length" className="flex-1 p-4 bg-standard-turquoise text-right text-white/90 rounded-l-xl">Números de caracteres</label>
          <input type="number" id="length" min={8} max={20} className="rounded-r-xl outline-none pl-5 bg-black/5"/>
        </div>
  
        <div className="my-8 flex flex-col flex-wrap items-end content-center">
          <div className="py-2 flex justify-center items-center">
            <label htmlFor="number" className="mr-2 text-standard-blue text-lg font-semibold">Incluir números</label>
            <input type="checkbox" id="number" className="appearance-none w-5 h-5 rounded-md cursor-pointer bg-standard-blue/80 checked:bg-standard-turquoise/80"/>
          </div>

          <div className="py-2 flex justify-center items-center">
            <label htmlFor="uppercase" className="mr-2 text-standard-blue text-lg font-semibold">Incluir letras maiúsculas</label>
            <input type="checkbox" id="uppercase" className="appearance-none w-5 h-5 rounded-md cursor-pointer bg-standard-blue/80 checked:bg-standard-turquoise/80"/>
          </div>

          <div className="py-2 flex justify-center items-center">
            <label htmlFor="symbol" className="mr-2 text-standard-blue text-lg font-semibold">Incluir caracteres especiais</label>
            <input type="checkbox" id="symbol" className="appearance-none w-5 h-5 rounded-md cursor-pointer bg-standard-blue/80 checked:bg-standard-turquoise/80"/>
          </div>

          <div className="py-2 flex justify-center items-center">
            <label htmlFor="lowercase" className="mr-2 text-standard-blue text-lg font-semibold">Incluir letras minúsculas</label>
            <input type="checkbox" id="lowercase" className="appearance-none w-5 h-5 rounded-md cursor-pointer bg-standard-blue/80 checked:bg-standard-turquoise/80"/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Generator;