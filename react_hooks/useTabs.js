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
    if(!allTabs || Array.isArray(allTabs)){
        return;
    }
    const [currentIndex, setCurrentIndex] = useState(initTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
})

function App() {
   const { currentItem, changeItem} = useTabs(0,content);
    
    return (
      <div className="App">
        <h1>Hello </h1>
        {content.map((section, idx) => {
            <button  key={idx} onClick={()=>changeItem(idx)}>{section.tab}</button>
        })}
        <div>{currentItem.content}</div>
      </div>
    );
  }

export default useInput
