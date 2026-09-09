import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { LabKidsSalesPage } from './components/LabKidsSalesPage';
import { LabKidsEnglishSalesPage } from './components/LabKidsEnglishSalesPage';
import { ThankYouPage } from './components/ThankYouPage';

function PortuguesePage() {
  const navigate = useNavigate();
  return (
    <LabKidsSalesPage 
      onOpenAuth={() => {}} 
      onSelectPlan={() => {}} 
      onEnterPlatform={() => window.location.href = '/obrigado'} 
      onOpenBiblicalSales={() => {}} 
      onOpenEnglishVersion={() => navigate('/en')} 
    />
  );
}

function EnglishPage() {
  const navigate = useNavigate();
  return (
    <LabKidsEnglishSalesPage
      onOpenAuth={() => {}}
      onEnterPlatform={() => {}}
      onOpenPortugueseVersion={() => navigate('/')}
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortuguesePage />} />
        <Route path="/en" element={<EnglishPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}
