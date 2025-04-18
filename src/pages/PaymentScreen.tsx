import React, { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

interface Plan {
  id: string;
  name: string;
  price: number;
  duration: string;
  speed: string;
}

interface PaymentScreenProps {
  plan: Plan | null;
  onPaymentComplete: () => void;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ plan, onPaymentComplete }) => {
  const [paymentLink, setPaymentLink] = useState<string>('https://securepayments.tinkoff.ru/SSBH5kiG');
  const [countdown, setCountdown] = useState<number>(900); // 15 minutes in seconds
  
  useEffect(() => {
    // Start countdown timer
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  const handlePayClick = () => {
    // In a real app, this would integrate with Telegram Payments
    // For demo, we'll just simulate a payment
    
    // The real implementation would use Telegram's WebApp.openInvoice
    // Or redirect to a payment processing URL
    
    // For demo purposes, let's simulate a delayed payment
    setTimeout(() => {
      onPaymentComplete();
    }, 1500);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentLink);
    WebApp.showPopup({
      title: 'Ссылка скопирована',
      message: 'Ссылка для оплаты скопирована в буфер обмена',
      buttons: [{ type: 'close' }]
    });
  };
  
  if (!plan) {
    return <div>Ошибка: План не выбран</div>;
  }
  
  return (
    <div>
      <div className="header">
        <h1>Пополнение баланса</h1>
      </div>
      
      <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '30px 20px' }}>
        <div style={{ 
          backgroundColor: '#2171FE', 
          borderRadius: '20px', 
          width: '80px', 
          height: '80px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="11" width="18" height="11" rx="2" fill="none" stroke="white" strokeWidth="2"/>
            <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        
        <h2 style={{ marginBottom: '10px', fontSize: '24px' }}>Пополнение баланса</h2>
        <p style={{ textAlign: 'center', color: '#999', marginBottom: '20px' }}>
          Откройте ссылку на оплату прямо в телеграм-браузере или скопируйте и откройте в браузере телефона
        </p>
        
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>Время жизни сессии на оплату</h3>
          <div style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '20px' 
          }}>
            {formatTime(countdown)}
          </div>
          
          <div className="card" style={{ display: 'flex', alignItems: 'center', padding: '10px', marginBottom: '20px' }}>
            <div style={{ marginRight: '15px', backgroundColor: '#1f3854', borderRadius: '12px', padding: '12px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '5px' }}>Скопируйте ссылку</h4>
              <p style={{ color: '#999', fontSize: '12px' }}>
                Если не открывается оплата скопируйте ссылку
              </p>
            </div>
          </div>
          
          <div className="card" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '12px 15px', 
            borderRadius: '12px', 
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {paymentLink}
            </div>
            <button 
              onClick={copyToClipboard}
              style={{ 
                backgroundColor: 'transparent', 
                border: 'none', 
                padding: '8px',
                cursor: 'pointer'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="9" width="13" height="13" rx="2" stroke="white" strokeWidth="2"/>
                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="white" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
          
        <button className="button" onClick={handlePayClick}>
          Оплатить
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen; 