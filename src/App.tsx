import React, { useState } from 'react';
import WebApp from '@twa-dev/sdk';
import SplashScreen from './pages/SplashScreen';
import WelcomeScreen from './pages/WelcomeScreen';
import TariffSelection from './pages/TariffSelection';
import PlanSelection from './pages/PlanSelection';
import PaymentScreen from './pages/PaymentScreen';
import AccessKeyScreen from './pages/AccessKeyScreen';
import PaymentSuccessScreen from './pages/PaymentSuccessScreen';
import DeviceTypeScreen from './pages/DeviceTypeScreen';

type AppPage = 
  | 'splash'
  | 'welcome'
  | 'tariffs'
  | 'plans'
  | 'payment'
  | 'success'
  | 'key'
  | 'device-type';

interface SelectedPlan {
  id: string;
  name: string;
  price: number;
  duration: string;
  speed: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<AppPage>('splash');
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan | null>(null);
  const [accessKey, setAccessKey] = useState<string>('');
  
  // Handle back button navigation logic
  const handleBackNavigation = () => {
    switch (currentPage) {
      case 'welcome':
        setCurrentPage('splash');
        break;
      case 'tariffs':
        setCurrentPage('welcome');
        break;
      case 'plans':
        setCurrentPage('tariffs');
        break;
      case 'payment':
        setCurrentPage('plans');
        break;
      case 'success':
        // Usually don't go back from success
        break;
      case 'key':
        setCurrentPage('success');
        break;
      case 'device-type':
        setCurrentPage('tariffs');
        break;
      default:
        setCurrentPage('splash');
    }
  };
  
  // Set up back button functionality
  React.useEffect(() => {
    WebApp.BackButton.onClick(handleBackNavigation);
    
    return () => {
      WebApp.BackButton.offClick(handleBackNavigation);
    };
  }, [currentPage]);
  
  // Show or hide back button based on current page
  React.useEffect(() => {
    if (currentPage === 'splash') {
      WebApp.BackButton.hide();
    } else {
      WebApp.BackButton.show();
    }
  }, [currentPage]);
  
  // Splash screen timer
  React.useEffect(() => {
    if (currentPage === 'splash') {
      const timer = setTimeout(() => {
        setCurrentPage('welcome');
      }, 2000);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, [currentPage]);
  
  // Render component based on current page
  const renderPage = () => {
    switch (currentPage) {
      case 'splash':
        return <SplashScreen />;
      
      case 'welcome':
        return <WelcomeScreen onStart={() => setCurrentPage('tariffs')} />;
      
      case 'tariffs':
        return (
          <TariffSelection 
            onTariffSelect={() => setCurrentPage('plans')} 
            onDeviceTypeSelect={() => setCurrentPage('device-type')}
          />
        );
        
      case 'plans':
        return (
          <PlanSelection 
            onPlanSelect={(plan) => {
              setSelectedPlan(plan);
              setCurrentPage('payment');
            }}
          />
        );
        
      case 'payment':
        return (
          <PaymentScreen 
            plan={selectedPlan}
            onPaymentComplete={() => setCurrentPage('success')}
          />
        );
        
      case 'success':
        return (
          <PaymentSuccessScreen 
            onGetKey={() => {
              // Simulate getting a VPN key from the server
              setAccessKey('vless://ad8a405e-fec0-455c-8e7f-15dfd095eace');
              setCurrentPage('key');
            }}
          />
        );
        
      case 'key':
        return (
          <AccessKeyScreen 
            accessKey={accessKey}
            onHome={() => setCurrentPage('tariffs')}
          />
        );
        
      case 'device-type':
        return (
          <DeviceTypeScreen 
            onNext={() => setCurrentPage('tariffs')}
          />
        );
        
      default:
        return <SplashScreen />;
    }
  };
  
  return (
    <div className="container">
      {renderPage()}
      <div className="wave-bg"></div>
    </div>
  );
};

export default App; 