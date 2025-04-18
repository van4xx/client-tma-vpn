import React from 'react';

interface TariffSelectionProps {
  onTariffSelect: () => void;
  onDeviceTypeSelect: () => void;
}

const TariffSelection: React.FC<TariffSelectionProps> = ({ onTariffSelect, onDeviceTypeSelect }) => {
  return (
    <div>
      <div className="header">
        <h1>Выберите тариф</h1>
      </div>
      
      <div className="plans-container">
        {/* BLACKROCK Tariff */}
        <div className="plan-card" onClick={onTariffSelect}>
          <div className="plan-header">
            <div className="plan-icon" style={{ backgroundColor: '#1a3b80', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#2171FE" stroke="#2171FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#2171FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#2171FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3>BLACKROCK</h3>
              <p style={{ fontSize: '14px', color: '#999' }}>3.8 рубля в сутки</p>
            </div>
          </div>
          
          <div className="plan-description">
            Быстрый интернет до 200 МБ/с, случайная страна Европы и вариант выбрать Россию в качестве региона. Идеален для активного использования социальных сетей, ведения блога, просмотра видеоконтента
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" alt="Russia" width="20" height="15" style={{ marginRight: '10px', borderRadius: '2px' }} />
            <div className="speed-badge">200 МБ/с</div>
          </div>
        </div>
        
        {/* MYSTERY Tariff */}
        <div className="plan-card" onClick={onTariffSelect}>
          <div className="plan-header">
            <div className="plan-icon" style={{ backgroundColor: '#801a1a', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FE2121" stroke="#FE2121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#FE2121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#FE2121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3>MYSTERY</h3>
              <p style={{ fontSize: '14px', color: '#999' }}>9.2 рубля в сутки</p>
            </div>
          </div>
          
          <div className="plan-description">
            Сверхбыстрый интернет до 1-5 ГБ/с. 10 стран на выбор. Идеальный для профессиональной работы, игр, ведения видеоблогов.
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
            <img src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" alt="UK" width="20" height="15" style={{ borderRadius: '2px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg" alt="Germany" width="20" height="15" style={{ borderRadius: '2px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" alt="China" width="20" height="15" style={{ borderRadius: '2px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" alt="Netherlands" width="20" height="15" style={{ borderRadius: '2px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg" alt="Poland" width="20" height="15" style={{ borderRadius: '2px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg" alt="Russia" width="20" height="15" style={{ borderRadius: '2px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA" width="20" height="15" style={{ borderRadius: '2px' }} />
          </div>
          
          <div className="speed-badge" style={{ marginTop: '15px' }}>1-5 ГБ/с</div>
        </div>
        
        {/* BLACKEASY Tariff */}
        <div className="plan-card" onClick={onTariffSelect}>
          <div className="plan-header">
            <div className="plan-icon" style={{ backgroundColor: '#2e2e2e', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3>BLACKEASY</h3>
              <p style={{ fontSize: '14px', color: '#999' }}>1.8 рубля в сутки</p>
            </div>
          </div>
          
          <div className="plan-description">
            Простой интернет до 50 МБ/с случайная страна Европы. Отличный для просмотра контента в социальных сетях
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '5px' }}>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="speed-badge">50 МБ/с</div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', marginBottom: '10px' }}>
        <h4 style={{ color: '#999', marginBottom: '10px' }}>Обозначения:</h4>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '10px' }}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#999999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ color: '#999', fontSize: '14px' }}>Случайная страна</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="USA" width="20" height="15" style={{ marginRight: '10px', borderRadius: '2px' }} />
          <span style={{ color: '#999', fontSize: '14px' }}>Возможность менять на конкретную страну</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <div className="speed-badge" style={{ marginRight: '10px' }}>1GB/сек</div>
          <span style={{ color: '#999', fontSize: '14px' }}>Скорость</span>
        </div>
      </div>
    </div>
  );
};

export default TariffSelection; 