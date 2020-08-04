const FineCard = (props) => {
  if (!props.fineInfo) return (<div className="FineCard"></div>)
  else return (
    <div className="FineCard">
      <div className="info-title">
        <p>Постановление #{props.fineInfo.number}</p>
      </div>
      <div className="fine-info">
        <div className="property">
          <p className="property-title">Свидетельство о регистрации:</p>
          <p className="value">{props.fineInfo.doc_number}</p>
        </div>
        <div className="property">
          <p className="property-title">Дата постановления:</p>
          <p className="value">{!!props.fineInfo.bill_at && props.fineInfo.bill_at.match(/\d+\-\d+\-\d+/)[0]}</p>
        </div>
        <div className="property">
          <p className="property-title">Нарушение:</p>
          <p className="value">{props.fineInfo.koap_code}</p>
        </div>
        <div className="property">
          <p className="property-title">Получатель платежа:</p>
          <p className="value">{props.fineInfo.payee_username}</p>
        </div>
        <div className="property">
          <p className="property-title">ИНН:</p>
          <p className="value">{props.fineInfo.payee_inn}</p>
        </div>
        <div className="property">
          <p className="property-title">КПП:</p>
          <p className="value">{props.fineInfo.payee_kpp}</p>
        </div>
        <div className="property">
          <p className="property-title">Расчетный счет:</p>
          <p className="value">{props.fineInfo.payee_bank_account}</p>
        </div>
        <div className="property">
          <p className="property-title">Банк получателя:</p>
          <p className="value">{props.fineInfo.payee_bank_name}</p>
        </div>
        <div className="property">
          <p className="property-title">БИК:</p>
          <p className="value">{props.fineInfo.payee_bank_bik}</p>
        </div>
        <div className="property">
          <p className="property-title">ОКТМО(ОКАТО):</p>
          <p className="value">{props.fineInfo.payee_oktmo}</p>
        </div>
        <div className="property">
          <p className="property-title">КБК:</p>
          <p className="value">{props.fineInfo.kbk}</p>
        </div>
        <div className="property">
          <p className="property-title">Сумма штафа:</p>
          <p className="value">{props.fineInfo.amount}</p>
        </div>
        <div className="property">
          <p className="property-title">Скидка:</p>
          <p className="value">{props.fineInfo.discount_at}</p>
        </div>
        <div className="property">
          <p className="property-title">К оплате:</p>
          <p className="value">{props.fineInfo.amount_to_pay}</p>
        </div>
      </div>

      <style jsx>{`
        .FineCard {
          max-width: 685px;
          margin: 0 22px 0 25px;
          padding: 22px 15px 20px;
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
        }

        .info-title p {
          font-size: 18px;
          line-height: 21px;
          margin: 0 0 10px;
        }

        .property {
          display: flex;
        }

        .property-title {
          min-width: 208px;
          margin: 0;
          padding: 4px 0;
          font-size: 14px;
          line-height: 16px;
        }

        .value {
          width: 100%;
          max-width: 434px;
          font-size: 14px;
          line-height: 16px;
          margin: 0 0 0 20px;
          padding: 4px 0;
        }

        @media screen and (max-width: 480px) {
          .property { display: block; }
          .value { margin: 0; }
        }
      `}</style>
    </div>
  )
}

export default FineCard;
