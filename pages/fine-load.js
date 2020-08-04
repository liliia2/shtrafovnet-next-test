const FineLoad = () => {
  return (
    <div className="FineLoad">
      <div className="fine-load">
        <img src="/image/ic-loading.svg" alt="load" className="load" />
        <p>Загрузка</p>
      </div>

      <style jsx>{`
        .FineLoad {
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 51px 0;
        }

        .fine-load {
          text-align: center;
        }

        .fine-load p {
          margin: 24px 0;
          font-size: 18px;
          line-height: 21px;
        }

        .load {
          animation: spin 1s step-end infinite;
        }

        @keyframes spin {
          0%  { transform: rotate(0deg); }
          10% { transform: rotate(36deg); }
          20% { transform: rotate(72deg); }
          30% { transform: rotate(108deg); }
          40% { transform: rotate(144deg); }
          50% { transform: rotate(180deg); }
          60% { transform: rotate(216deg); }
          70% { transform: rotate(252deg); }
          80% { transform: rotate(288deg); }
          90% { transform: rotate(324deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default FineLoad;
