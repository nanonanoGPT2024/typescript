import { useState } from "react"

const InputForm: React.FC = () => {
    const[text, setText] = useState<string>("");


    const hadleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };


    return (
        <div>
            <input type="text" value={text} onChange={hadleChange} />
            <p>Hasil Input : {text}</p>
        </div>
    )
}


export default InputForm;