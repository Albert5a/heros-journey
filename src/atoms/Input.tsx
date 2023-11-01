interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange }: InputProps) => {
  return (
    <input
      className="bg-white text-black text-center w-36 sm:w-[240px] md:w-[320px] outline-none px-2 py-1 rounded-lg"
      onChange={onChange}
      placeholder="Pesquisar Heói"
    />
  );
};

export default Input;
