import Header from "@/components/header";
import Banner from "@/components/banner";
import Article from "@/components/article";
import Generator from "@/components/generator";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <Header/>
      <Banner/>
      <Article/>
      <Generator/>
      <Toaster></Toaster>
    </main>
  )
}