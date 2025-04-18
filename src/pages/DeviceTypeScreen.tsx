import React, { useState } from 'react';

interface DeviceTypeScreenProps {
  onNext: () => void;
}

const DeviceTypeScreen: React.FC<DeviceTypeScreenProps> = ({ onNext }) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  
  const slides = [
    {
      title: 'Телевизоры',
      description: 'Приложение совместимо с любыми телевизорами и ТВ-приставками на базе AndroidTV. Наслаждайтесь неограниченным доступом к Netflix и YouTube прямо с вашего телевизора.'
    },
    {
      title: 'Мобильные устройства',
      description: 'Наше приложение доступно для установки на любом мобильном устройстве, независимо от производителя и операционной системы. Работает со всеми мобильными провайдерами, обеспечивая непрерывный доступ и удобство использования.'
    },
    {
      title: 'Роутеры',
      description: 'Установите наше приложение на роутер и обеспечьте себе удобство в маршрутизации к различным сайтам и сервисам. Простое и эффективное решение для вашей сетевой навигации.'
    }
  ];
  
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
  };
  
  const getButtonText = () => {
    if (activeSlide < slides.length - 1) {
      return 'Дальше';
    }
    return 'Поехали!';
  };
  
  const handleNext = () => {
    if (activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      onNext();
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="header">
        <h1>{slides[activeSlide].title}</h1>
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px 0' }}>
        <p style={{ fontSize: '18px', lineHeight: 1.5, marginBottom: '40px' }}>
          {slides[activeSlide].description}
        </p>
        
        <div style={{ flexGrow: 1 }}>
          {/* Background image/animation would go here */}
          <div style={{ 
            width: '100%', 
            height: '300px', 
            background: 'url("https://i.imgur.com/RjJqGpn.png") no-repeat center center',
            backgroundSize: 'cover',
            opacity: 0.7
          }}></div>
        </div>
      </div>
      
      <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
        {slides.map((_, index) => (
          <div 
            key={index}
            onClick={() => handleDotClick(index)}
            style={{ 
              width: '10px', 
              height: '10px', 
              borderRadius: '50%', 
              margin: '0 5px',
              backgroundColor: activeSlide === index ? '#2171FE' : '#555',
              cursor: 'pointer'
            }}
          ></div>
        ))}
      </div>
      
      <button 
        className="button" 
        onClick={handleNext}
      >
        {getButtonText()}
      </button>
    </div>
  );
};

export default DeviceTypeScreen; 