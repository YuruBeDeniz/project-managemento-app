import { ChangeEvent, useState } from "react";

export default function ExampleForm() {
    const [value, setValue] = useState<string>('');
  
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };
  
    return (
      <form>
        <input type="text" value={value} onChange={handleChange} />
        <pre>{value}</pre>
      </form>
    );
  }