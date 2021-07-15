// useTab 은 기본적으로 input컴포넌트의 정보를 업뎃
// useInput은 매개변수로 initValue를 받고

import React, {useState} from 'react'

const content = [
    {
        tab: 'Section 1',
        content: "I'm the contnent of the section 1"
    },
    {
        tab: 'Section 2',
        content: "I'm the contnent of the section 2"
    }
];

const useTabs = ((initTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initTab);
})

function App() {
   
    
    return (
      <div className="App">
        <h1>Hello </h1>
      </div>
    );
  }

export default useInput
