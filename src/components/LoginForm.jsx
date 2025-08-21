import { useState } from 'react';
import './LoginForm.css';

export const LoginForm = () => {

    const [text, setText] = useState("");

    console.log(text);
    

  return (
    <div>
      <input type='text' onChange={(event) => setText(event.target.value)} value={text}/>
    </div>
  );
};