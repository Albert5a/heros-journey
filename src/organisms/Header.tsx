"use client";
import Input from "@/atoms/Input";
import { useSearchStore } from "@/store/searchStore";
import Image from "next/image";
import perfil from "../../public/perfil.png";

const Header = () => {
  const setSearchHero = useSearchStore((state) => state.setSearchHero);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchHero(e.target.value);
  };

  return (
    <header className="bg-slate-400 w-[100vw] p-2 flex items-center justify-around mb-2">
      <div className="flex flex-col p-1 items-center justify-center">
        <Image
          width={64}
          height={64}
          className="rounded-full"
          src={perfil}
          alt="foto de perfil"
        />
        <h3>Albert Soares</h3>
      </div>
      <div className="flex flex-col p-1 items-center justify-center">
        <h1 className="text-lg md:text-2xl p-2">Jornada do Herói</h1>
        <Input onChange={handleSearch} />
      </div>
    </header>
  );
};

export default Header;
