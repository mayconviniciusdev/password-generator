import Image from "next/image";
import {FaGithub, FaGlobe, FaInstagram} from 'react-icons/fa';

const Header = () => {
  return (
    <main className="flex max-w-6xl m-auto px-6">
      <div className="py-12 flex-1">
        <Image
        src='/logo-powered.png'
        alt="Presentation logo"
        width={350}
        height={350}/>
      </div>

      <div className="py-12 flex items-center">
        <FaGlobe className="cursor-pointer text-standard-blue text-2xl"/>
        <FaGithub className="mx-3 cursor-pointer text-standard-blue text-2xl"/>
        <FaInstagram className="cursor-pointer text-standard-blue text-2xl"/>
      </div>
    </main>
  )
}

export default Header;