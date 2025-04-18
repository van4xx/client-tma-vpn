import React from 'react';

interface PaymentSuccessScreenProps {
  onGetKey: () => void;
}

const PaymentSuccessScreen: React.FC<PaymentSuccessScreenProps> = ({ onGetKey }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100%', 
      padding: '20px' 
    }}>
      <div style={{ 
        width: '100px', 
        height: '100px', 
        borderRadius: '50%', 
        backgroundColor: '#4caf50', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <h1 style={{ fontSize: '28px', marginBottom: '15px', textAlign: 'center' }}>
        Оплата прошла!
      </h1>
      
      <p style={{ color: '#999', fontSize: '16px', textAlign: 'center', marginBottom: '40px' }}>
        Мы пополнили Ваш баланс и отправили на указанную почту чек
      </p>
      
      <button 
        className="button" 
        onClick={onGetKey}
      >
        Получить ключ
      </button>
    </div>
  );
};

export default PaymentSuccessScreen; 