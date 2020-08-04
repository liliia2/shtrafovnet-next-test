import { useState } from 'react'

const ControlDigit = (props) => {
  const [controlDigitHint, setControlDigitHint] = useState(null);

  const getControlDigit = (uin) => {
    let numbers = uin.split('');
    let i = 1;
    let sum = getSum(numbers, i);
    if (sum % 11 > 9) sum = getSum(numbers, i + 2);
    let controlDigit = (sum % 11) % 10;
    let fullUin = uin + controlDigit.toString();
    return fullUin;
  };
  
  const getSum = (arr, i) => {
    let count = 0;
    arr.map(num => {
      count += num * i;
      i = (i < 10) ? (i + 1) : (i + 1) % 10;
    });
    return count;
  };

  if (props.inputUin && !controlDigitHint) {
    let controlDigit = getControlDigit(props.inputUin);
    setControlDigitHint(controlDigit);
  }

  return (
    <div className="ControlDigit">
      {controlDigitHint &&
        <div
          className="control-digit-hint"
          onClick={() => props.onClick(controlDigitHint)}>
          <p>{controlDigitHint}</p>
        </div>
      }

      <style jsx>{`
        .ControlDigit {
          height: 100%;
          width: 100%;
          padding: 0;
          margin: -19px 34px 24px;
        }

        .control-digit-hint {
          width: fit-content;
          height: 27px;
          position: relative;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        }

        .control-digit-hint p {
          font-size: 18px;
          line-height: 21px;
          padding: 3px 6px;
        }
      `}</style>
    </div>
  )
}

export default ControlDigit;
