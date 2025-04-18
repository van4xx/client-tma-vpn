import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%' 
    }}>
      <img 
        src="https://i.imgur.com/JkqUm8k.png" 
        alt="VPN Logo" 
        style={{ width: '150px', marginBottom: '20px' }} 
      />
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>
        BLACKTEMPLE
      </h1>
      <p style={{ textAlign: 'center', color: '#999', fontSize: '16px' }}>
        .space
      </p>
      <div style={{ position: 'absolute', bottom: '20px' }}>
        <p style={{ textAlign: 'center', color: '#999', fontSize: '14px' }}>
          Version: 5.0
        </p>
      </div>
    </div>
  );
};

export default SplashScreen; 