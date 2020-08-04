import { useState } from 'react'

import ControlDigit from './control-digit';
import FineCard from './fine-card';
import FineLoad from './fine-load';
import FineNotFound from './fine-not-found';

const FineSearcher = () => {
  const [uin, setUin] = useState('');
  const [formatHint, setFormatHint] = useState('');
  const [showControlDigitHint, setShowControlDigitHint] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fineInfo, setFineInfo] = useState(null);

  const handleOnChange = () => e => {
    if (isLoaded) {
      setFineInfo(null);
      setIsLoaded(false);
      setError(false);
    }
    if (showControlDigitHint) { setShowControlDigitHint(false); }
    setUin(e.target.value);
    checkInputText(e.target.value);
  };

  const checkInputText = (inputUin) => {
    if (inputUin.match(/\D/)) {
      setFormatHint('УИН должен состоять только из цифр');
    } else if (inputUin.length !== 20 && inputUin.length !== 25) {
      setFormatHint(
        `УИН номера имеют длину 20 или 25 цифр и имеют проверочный символ
        в конце. Количество введенных символов не совпадает с необходимым`
      );
    } else { setFormatHint(''); }
    if (!inputUin.match(/\D/) && inputUin.length === 19 || inputUin.length === 24) {
      setShowControlDigitHint(inputUin);
    }
  };

  const handleClick = () => {
    setLoading(true);
    fetch(`https://test-task.shtrafovnet.com/fines/${uin}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setError(false);
          setLoading(false);
          setShowControlDigitHint(false);
          setFineInfo(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(true);
          setLoading(false);
        }
      )
  };

  const setUinWithControlDigitHint = (fullUin) => {
    setUin(fullUin);
    checkInputText(fullUin);
    setError(false);
    setShowControlDigitHint(false);
  };

  return (
    <div className="FineSearcher">
      <main>
        <div className="description">
          <p>Получение информации о штрафе по УИН</p>
        </div>
        <div className="search">
          <form>
            <input
              type="text" placeholder="Введите УИН"
              name="uin" maxLength="30"
              value={uin} onChange={handleOnChange()}  />
            <button type="button" onClick={() => handleClick()}>
              Найти
            </button>
          </form>
          {!!showControlDigitHint &&
            <ControlDigit
              inputUin={showControlDigitHint}
              onClick={(fullUin) => setUinWithControlDigitHint(fullUin)} />
          }
          {!isLoaded && !!formatHint.length &&
            <div className="format-hint">{formatHint}</div>
          }
        </div>
        {loading && <FineLoad />}
        {fineInfo && <FineCard fineInfo={fineInfo} />}
        {error && <FineNotFound uin={uin} />}
      </main>

      <style jsx>{`
        .FineSearcher {
          height: 100%;
          width: 100%;
          padding: 0;
        }

        .description {
          margin: 0 34px 24px;
          font-size: 18px;
        }

        form {
          display: flex;
          margin: 20px 24px 24px 34px;
        }

        .search input {
          width: 100%;
          max-width: 403px;
          padding: 6px;
          margin-right: 11px;
          border: 1px solid #979797;
          outline: none;
          font-size: 18px;
          line-height: 21px;
        }
        
        .search button {
          width: 117px;
          height: 35px;
          background: #63C556;
          color: white;
          border: none;
          outline: none;
          font-size: 18px;
        }

        .format-hint {
          margin: 20px 34px 24px;
          color: grey;
        }
      `}</style>
    </div>
  )
}

export default FineSearcher;
