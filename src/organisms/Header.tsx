"use client";
import Input from "@/atoms/Input";
import { useSearchStore } from "@/store/searchStore";

const Header = () => {
  const setSearchHero = useSearchStore((state) => state.setSearchHero);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchHero(e.target.value);
  };

  return (
    <header className="bg-slate-400 w-[100%]">
      <h2>Jornada do Herói</h2>
      <Input onChange={handleSearch} />
    </header>
  );
};

export default Header;
