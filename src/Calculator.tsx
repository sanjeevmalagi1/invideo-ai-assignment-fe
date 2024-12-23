import { FormEvent, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from "primereact/button";


function evaluateExpression(expression: string): number | string {
    try {
        // Validate the input to allow only numbers and basic operators
        if (!/^[\d+\-*/ ().]+$/.test(expression)) {
            throw new Error("Invalid characters in the expression");
        }

        // Use Function constructor to evaluate the expression
        const result = new Function(`return (${expression});`)();

        if (typeof result !== "number" || isNaN(result)) {
            throw new Error("Evaluation did not result in a valid number");
        }

        return result;
    } catch (error) {
        return `Error: ${(error as Error).message}`;
    }
}

function Calculator() {
    const [expression, setExpression] = useState<string>('');
    const [result, setResult] = useState<number | string>('');

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = evaluateExpression(expression)
        setResult(res)
    }

    return (
        <>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleFormSubmit(e)} >
                <InputText
                    value={expression}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpression(e.target.value)}
                />
                <Button label="Submit" type="submit" />
            </form>
            
            <pre>
                {result}
            </pre>
        </>
    )
}

export default Calculator
