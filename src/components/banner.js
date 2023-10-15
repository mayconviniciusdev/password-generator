import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div style={{position: 'relative', height: '90vh'}} className=" p-0 !important bg-gradient-to-t from-white/10 to-standard-turquoise/90">
      <div className="absolute inset-0 p-40 text-center flex flex-col justify-center">
        <p className="text-lg text-standard-blue/60 font-semibold">FERRAMENTA DE GERAÇÃO DE SENHA</p>
        <h1 className="text-6xl font-bold py-10 text-standard-turquoise">Precisa de uma senha <span className="block">segura e exclusiva?</span></h1>
        <p className="flex mx-auto text-3xl text-standard-blue/60">
          <FaRegArrowAltCircleDown className="mx-2"/>
          <FaRegArrowAltCircleDown className="mx-2"/>
          <FaRegArrowAltCircleDown className="mx-2"/>
          <FaRegArrowAltCircleDown className="mx-2"/>
        </p>
      </div>
    </div>
  )
}

export default Banner;