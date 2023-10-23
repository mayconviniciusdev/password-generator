"use client"
import { useState } from "react";
import { FaClipboard } from "react-icons/fa";
import toast from "react-hot-toast";

import { useForm } from "../js/useForm";
import { getRandomChar, getSpecialChar } from "@/js/utils";

const Generator = () => {
  const [values, setValues] = useForm({
  length: 8,
  uppercase: true,
  lowercase: false,
  number: true,
  symbol: false });

  const [result, setResult] = useState("");
  const fieldsArray = [
  {field: values.uppercase, getChar: () => getRandomChar(65, 90)},
  {field: values.lowercase, getChar: () => getRandomChar(97, 122)},
  {field: values.number, getChar: () => getRandomChar(48, 57)},
  {field: values.symbol, getChar: () => getSpecialChar()} ];

  const handleSubmit = (e) => {
  e.preventDefault();
  let generatedPassword = '';
  const checkedFields = fieldsArray.filter(({field}) => field);

  for(let i = 0; i < values.length; i++) {
  const index = Math.floor(Math.random() * checkedFields.length);
  const letter = checkedFields[index]?.getChar();

  if(letter) { generatedPassword += letter}}
  if (generatedPassword) {setResult(generatedPassword)}
  else {toast.error('Selecione pelo menos uma opção');} }

  const handleClipboard = async () => {
  if (result) {await navigator.clipboard.writeText(result); toast.success('Senha copiada!');} 
  else {toast.error('Ouve algum problema, desculpe.');} };

  return (
    <div className="max-w-3xl mx-auto pt-40 pb-20">
      <form id="pg-form" onSubmit={handleSubmit}
      className="shadow-xl shadow-standard-blue/80 p-20 items-center rounded-xl">
        <div className="flex mx-5">
          <input
          type="text"
          id="result"
          className="outline-none rounded-l-xl p-4 w-full bg-black/5"
          readOnly
          value={result}/>
          <p onClick={handleClipboard} className="bg-standard-blue text-white/90 rounded-r-xl p-5 items-center cursor-pointer"><FaClipboard/></p>
        </div> 

        <button type="submit" className="p-5 my-8 w-full font-semibold text-white bg-standard-blue rounded-xl bg-gradient-to-r from-standard-turquoise to-standard-blue">GERAR SENHA</button>

        <div className="flex mx-5">
          <label htmlFor="length" className="flex-1 p-4 bg-standard-turquoise text-right text-white/90 rounded-l-xl">Números de caracteres</label>
          <input type="number" id="length" min={8} max={20} name="length" value={values.length} onChange={setValues} 
          className="rounded-r-xl outline-none pl-5 bg-black/5"/>
        </div>
  
        <div className="my-8 flex flex-col flex-wrap items-end content-center">
          <div className="py-2 flex justify-center items-center">
            <label htmlFor="number" className="mr-2 text-standard-blue text-lg font-semibold">Incluir números</label>
            <input type="checkbox" id="number" name="number" checked={values.number} onChange={setValues}
            className="appearance-none w-5 h-5 rounded-md cursor-pointer bg-standard-blue/80 checked:bg-standard-turquoise/80"/>
          </div>

          <div className="py-2 flex justify-center items-center">
            <label htmlFor="uppercase" className="mr-2 text-standard-blue text-lg font-semibold">Incluir letras maiúsculas</label>
            <input type="checkbox" id="uppercase" name="uppercase" checked={values.uppercase} onChange={setValues}
            className="appearance-none w-5 h-5 rounded-md cursor-pointer bg-standard-blue/80 checked:bg-standard-turquoise/80"/>
          </div>

          <div className="py-2 flex justify-center items-center">
            <label htmlFor="symbol" className="mr-2 text-standard-blue text-lg font-semibold">Incluir caracteres especiais</label>
            <input type="checkbox" id="symbol" name="symbol" checked={values.symbol} onChange={setValues}
            className="appearance-none w-5 h-5 rounded-md cursor-pointer bg-standard-blue/80 checked:bg-standard-turquoise/80"/>
          </div>

          <div className="py-2 flex justify-center items-center">
            <label htmlFor="lowercase" className="mr-2 text-standard-blue text-lg font-semibold">Incluir letras minúsculas</label>
            <input type="checkbox" id="lowercase" name="lowercase" checked={values.lowercase} onChange={setValues}
            className="appearance-none w-5 h-5 rounded-md cursor-pointer bg-standard-blue/80 checked:bg-standard-turquoise/80"/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Generator;