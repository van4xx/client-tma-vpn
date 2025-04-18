import React, { useState } from 'react';

interface Plan {
  id: string;
  name: string;
  price: number;
  totalPrice: number;
  duration: string;
  durationHours?: number;
  speed: string;
  isSelected?: boolean;
}

interface PlanSelectionProps {
  onPlanSelect: (plan: Plan) => void;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({ onPlanSelect }) => {
  const [plans, setPlans] = useState<Plan[]>([
    {
      id: 'demo',
      name: 'Демо',
      price: 10,
      totalPrice: 10,
      duration: '48 часов',
      durationHours: 48,
      speed: '200 МБ/с',
      isSelected: true
    },
    {
      id: 'month1',
      name: '1 месяц',
      price: 3.8,
      totalPrice: 114,
      duration: '1 месяц',
      speed: '200 МБ/с',
      isSelected: false
    },
    {
      id: 'month3',
      name: '3 месяца',
      price: 3.8,
      totalPrice: 342,
      duration: '3 месяца',
      speed: '200 МБ/с',
      isSelected: false
    }
  ]);
  
  const [email, setEmail] = useState<string>('');
  const [autoPayment, setAutoPayment] = useState<boolean>(true);
  
  const handlePlanSelect = (id: string) => {
    const updatedPlans = plans.map(plan => ({
      ...plan,
      isSelected: plan.id === id
    }));
    
    setPlans(updatedPlans);
  };
  
  const getSelectedPlan = (): Plan | undefined => {
    return plans.find(plan => plan.isSelected);
  };
  
  const handleSubmit = () => {
    const selectedPlan = getSelectedPlan();
    if (selectedPlan) {
      onPlanSelect(selectedPlan);
    }
  };
  
  return (
    <div>
      <div className="header">
        <h1>Выберите длительность</h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div className="plan-icon" style={{ backgroundColor: '#1a3b80', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#2171FE" stroke="#2171FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#2171FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#2171FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2>BLACKROCK</h2>
        <div className="speed-badge" style={{ marginLeft: 'auto' }}>200 МБ/с</div>
      </div>
      
      <div className="plans-container">
        {plans.map(plan => (
          <div 
            key={plan.id}
            className="plan-card" 
            style={{ 
              borderColor: plan.isSelected ? '#2171FE' : 'transparent',
              borderWidth: plan.isSelected ? '2px' : '0',
              borderStyle: 'solid',
              position: 'relative'
            }}
            onClick={() => handlePlanSelect(plan.id)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '20px' }}>{plan.name}</h3>
              <div style={{ textAlign: 'right' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>{plan.price}</h2>
                <p style={{ color: '#999', fontSize: '14px' }}>руб/{plan.id === 'demo' ? '48 часов' : 'сутки'}</p>
              </div>
            </div>
            <p style={{ color: '#999', fontSize: '14px', marginTop: '5px' }}>
              Всего за {plan.totalPrice} руб.
            </p>
            
            {plan.isSelected && (
              <div style={{ 
                position: 'absolute', 
                top: '10px', 
                right: '10px', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                backgroundColor: '#fff'
              }}>
                <div style={{ 
                  width: '14px', 
                  height: '14px', 
                  borderRadius: '50%', 
                  backgroundColor: '#2171FE',
                  margin: '3px'
                }}></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '5px' }}>
          <label htmlFor="email" style={{ fontSize: '14px', color: '#fff' }}>
            Введите e-mail для чека <span style={{ color: '#999' }}>(Не обязательно)</span>
          </label>
        </div>
        <input 
          type="email" 
          id="email"
          className="input" 
          placeholder="Введите почту" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <div 
            onClick={() => setAutoPayment(!autoPayment)}
            style={{ 
              width: '24px', 
              height: '24px', 
              borderRadius: '50%', 
              border: '2px solid #2171FE', 
              marginRight: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {autoPayment && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#2171FE" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <label style={{ fontSize: '14px' }}>Подключить автоплатеж</label>
        </div>
        
        <p style={{ fontSize: '12px', color: '#999', marginBottom: '20px' }}>
          Нажимая кнопку Оплатить вы соглашаетесь с <a href="#" style={{ color: '#2171FE' }}>Политика возврата</a>, <a href="#" style={{ color: '#2171FE' }}>Политика в отношении обработки персональных данных</a>
        </p>
        
        <button className="button" onClick={handleSubmit}>
          Оплатить
        </button>
      </div>
    </div>
  );
};

export default PlanSelection; 