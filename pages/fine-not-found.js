const FineNotFound = (props) => {
  return (
    <div className="FineNotFound">
      <div className="not-found-field">
        <img
          src="/image/ic-not-found.svg"
          alt="not-found"
          className="ic-not-found" />
        <p>Штраф {props.uin} не найден</p>
      </div>

      <style jsx>{`
        .FineNotFound {
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 40px 0;
        }

        .not-found-field {
          text-align: center;
        }

        .ic-not-found {
          width: 92px;
          height: 92px;
        }

        .not-found-field p {
          margin: 24px 0;
          font-size: 18px;
          line-height: 21px;
        }
      `}</style>
    </div>
  )
}

export default FineNotFound;
