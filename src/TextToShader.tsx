import { FormEvent, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";


function TextToShader() {
    const [statement, setStatement] = useState<string>('');

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        
    }

    return (
        <>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleFormSubmit(e)} >
                <InputText
                    value={statement}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatement(e.target.value)}
                />
                <Button label="Submit" type="submit" />
            </form>
            <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <div>
                    Sample:
                    <canvas id="myCanvas" width="300" height="300" style={{ display: "block", border: "1px solid red" }}>
                    </canvas>
                </div>
                <div>
                    Code:
                    <code style={{ display: "block", border: "1px solid red", width:"300", height:"300" }}>
                        Text in a pre element
                        is displayed in a fixed-width
                        font, and it preserves
                        both      spaces and
                        line breaks
                    </code>
                </div>
            </div>
        </>
    )
}

export default TextToShader
