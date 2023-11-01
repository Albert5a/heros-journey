
interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({onChange}: InputProps) => {

    return ( 
        <input className="bg-white text-black" onChange={onChange} placeholder="Pesquisar" />
     );
}
 
export default Input;