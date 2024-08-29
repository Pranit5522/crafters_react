import React, { useState } from "react";
import './FAQ.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function FAQ(props) {
  const [isExpanded, setExpanded] = useState(false);

  function handleClick() {
    setExpanded((prevValue) => !prevValue);
  }

  return (
    <div className="faqs">
      <div className="dropdown" onClick={handleClick}>
        <p className="question">
          {props.question}
        </p>
        <div>
          {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      <div className={`answer ${isExpanded ? 'expanded' : ''}`}>
        {props.answer}
      </div>
    </div>
  );
}

export default FAQ;
