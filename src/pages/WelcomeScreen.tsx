import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div style={{ padding: '20px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="header">
        <h1>Быстро подключение</h1>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Все очень просто</h2>
        <p style={{ color: '#999', fontSize: '18px' }}>
          Вам нужно выполнить три простых шага
        </p>
      </div>
      
      <div style={{ flex: 1 }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ marginRight: '15px', backgroundColor: '#1f3854', borderRadius: '12px', padding: '12px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>Выбрать тариф</h3>
            <p style={{ color: '#999', fontSize: '14px' }}>У нас гибкая тарифная система</p>
          </div>
        </div>
        
        <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ marginRight: '15px', backgroundColor: '#1f3854', borderRadius: '12px', padding: '12px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 10H23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>Оплата</h3>
            <p style={{ color: '#999', fontSize: '14px' }}>Мы принимаем оплату через СБП / Мир / MasterCard / VISA</p>
          </div>
        </div>
        
        <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ marginRight: '15px', backgroundColor: '#1f3854', borderRadius: '12px', padding: '12px' }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '5px' }}>Получите ключ</h3>
            <p style={{ color: '#999', fontSize: '14px' }}>Ключ для подключения к VPN</p>
          </div>
        </div>
      </div>

      <button 
        className="button" 
        onClick={onStart}
        style={{ marginTop: 'auto' }}
      >
        Начать
      </button>
    </div>
  );
};

export default WelcomeScreen; 