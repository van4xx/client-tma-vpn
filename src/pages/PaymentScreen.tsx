import React, { useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { createPayment, validatePayment } from '../api';

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
  const [paymentId, setPaymentId] = useState<string>('');
  const [paymentLink, setPaymentLink] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number>(900); // 15 minutes in seconds
  
  useEffect(() => {
    // Create payment when component mounts
    if (plan) {
      createNewPayment();
    }
  }, [plan]);
  
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
  
  const createNewPayment = async () => {
    if (!plan) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real app, we would use the actual tariffId that the plan belongs to
      const tariffId = 'blackrock'; // This would be passed from the parent component
      
      const paymentData = await createPayment(tariffId, plan.id);
      setPaymentId(paymentData.paymentId);
      setPaymentLink(paymentData.paymentUrl);
    } catch (err) {
      setError('Failed to create payment. Please try again.');
      console.error('Payment creation error:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  const handlePayClick = async () => {
    if (!paymentId) return;
    
    setIsLoading(true);
    
    try {
      // In a real app, this would redirect to the payment gateway
      // For demo purposes, we'll simulate a payment check
      setTimeout(async () => {
        try {
          const result = await validatePayment(paymentId);
          
          if (result.success) {
            onPaymentComplete();
          } else {
            setError('Payment validation failed. Please try again.');
          }
        } catch (err) {
          setError('Failed to validate payment. Please try again.');
          console.error('Payment validation error:', err);
        } finally {
          setIsLoading(false);
        }
      }, 1500);
    } catch (err) {
      setError('Payment processing failed. Please try again.');
      setIsLoading(false);
    }
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
        
        {error && (
          <div style={{ 
            padding: '10px', 
            backgroundColor: 'rgba(244, 67, 54, 0.1)', 
            color: '#f44336',
            borderRadius: '8px',
            marginBottom: '15px',
            width: '100%',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}
        
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
          
        <button 
          className="button" 
          onClick={handlePayClick}
          disabled={isLoading || !paymentId}
        >
          {isLoading ? 'Обработка...' : 'Оплатить'}
        </button>
      </div>
    </div>
  );
};

export default PaymentScreen; 