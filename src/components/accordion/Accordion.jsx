import { useState } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import './Accordion.scss';

function Accordion({ accordionData }) {
  const [selected, setSelected] = useState(null);
  // eslint-disable-next-line consistent-return
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div
          key={item.question}
          role="button"
          tabIndex="0"
          className="accordion-item"
          onKeyDown={() => {
            toggle(index);
          }}
          onClick={() => {
            toggle(index);
          }}
        >
          <div className="accordion-item-title">
            <h3>{item.question}</h3>
            <span>{selected === index ? '-' : '+'}</span>
          </div>
          <div className={`accordion-item-content ${selected === index ? 'show' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

Accordion.propTypes = {
  accordionData: arrayOf(
    shape({
      question: string.isRequired,
      answer: string.isRequired,
    }),
  ).isRequired,
};

export default Accordion;
