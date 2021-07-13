// useInput은 기본적으로 input컴포넌트의 정보를 업뎃
// useInput은 매개변수로 initValue를 받고

import React, {useState} from 'react'

const useInput = (initValue, validator) => {
    const [Value, setValue] = useState(initValue);
    // const onChange = event => {
    //     console.log(event.target)
    // }
    // return {Value, onChange};
    
    const onChange = event => {
        const {target : {Value}} = event;
        let willUpdate = true;
        if(typeof validator === "function") willUpdate = validator(Value);
        if(willUpdate) setValue(Value);
    };
    return {Value, onChange};
}


function App() {
    const maxLen = (Value) => Value.length < 10;
    const name = useInput("Mr.", maxLen);
    
    return (
      <div className="App">
        <h1>Hello </h1>
        {/* <input placeholder="Name" value={name.Value} /> onChange={name.onChange}*/}
        {/* 밑의 형식으로 해도 동일 */}
        <input placeholder="Name" {...name} />
      </div>
    );
  }

export default useInput
