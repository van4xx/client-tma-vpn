import React from 'react';
import WebApp from '@twa-dev/sdk';

interface AccessKeyScreenProps {
  accessKey: string;
  onHome: () => void;
}

const AccessKeyScreen: React.FC<AccessKeyScreenProps> = ({ accessKey, onHome }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(accessKey);
    WebApp.showPopup({
      title: 'Ключ скопирован',
      message: 'Ключ доступа скопирован в буфер обмена',
      buttons: [{ type: 'close' }]
    });
  };
  
  return (
    <div>
      <div className="header">
        <h1>Ваш ключ доступа</h1>
      </div>
      
      <div className="card" style={{ marginBottom: '20px', padding: '25px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '20px', 
          backgroundColor: '#2171FE', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2"/>
            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        
        <p style={{ textAlign: 'center', color: '#999', fontSize: '14px', marginBottom: '20px' }}>
          Помните - 1 ключ работает только на одном устройстве, вы можете использовать его по очереди на разных девайсах но не одновременно
        </p>
        
        <div className="card" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '12px 15px', 
          borderRadius: '12px', 
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: '20px'
        }}>
          <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {accessKey}
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
        
        <div style={{ 
          backgroundColor: '#2196f3', 
          borderRadius: '15px', 
          padding: '15px', 
          display: 'flex', 
          marginBottom: '20px',
          width: '100%'
        }}>
          <div style={{ marginRight: '10px', flexShrink: 0 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#2196f3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 16H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 style={{ color: '#fff', marginBottom: '5px' }}>Не работает ключ?</h3>
            <p style={{ color: '#fff', fontSize: '14px' }}>
              Написать в поддержку
            </p>
          </div>
        </div>
        
        <div style={{ width: '100%' }}>
          <h3 style={{ marginBottom: '15px' }}>
            Добавьте ключ в программу
          </h3>
          <p style={{ color: '#999', fontSize: '14px', marginBottom: '10px' }}>
            У вас на устройстве должна быть установлена программа v2rayTun
          </p>
          
          <div className="card" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '15px', 
            marginBottom: '20px'
          }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '15px', 
              backgroundColor: '#1f3854', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              marginRight: '15px',
              flexShrink: 0
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17L6 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17L18 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 21H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4 style={{ marginBottom: '5px' }}>
                Скачайте приложение для ключа.
              </h4>
              <h3 style={{ color: '#2196f3' }}>
                Центр загрузки приложений
              </h3>
              <p style={{ color: '#999', fontSize: '12px' }}>
                Выберите приложение для Вашей операционной системы и протокола
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        className="button" 
        onClick={onHome}
      >
        На главную
      </button>
    </div>
  );
};

export default AccessKeyScreen; 