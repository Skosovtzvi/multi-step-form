import { useState } from 'react';
import Step1Email from './components/Step1Email';
import Step2Details from './components/Step2Details';
import Step3Referral from './components/Step3Referral';
import Step4ThankYou from './components/Step4ThankYou';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: '',
    favoriteColor: '#000000',
    referral: '',
    expand: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('');
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateCurrentStep = () => {
    if (step === 1) {
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setError('נא להזין כתובת אימייל תקינה');
        return false;
      }
    }

    if (step === 2) {
      if (!formData.name.trim() || !formData.age || !formData.favoriteColor) {
        setError('נא למלא את כל הפרטים (שם, גיל וצבע מועדף)');
        return false;
      }
    }

    if (step === 3) {
      if (!formData.referral) {
        setError('נא לבחור איך שמעת עלינו');
        return false;
      }
      if (formData.referral === 'other' && !formData.expand.trim()) {
        setError('נא לפרט בשדה ההרחבה (expand)');
        return false;
      }
    }

    setError('');
    return true;
  };

  const nextStep = () => {
    if (validateCurrentStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setError('');
    setStep((prev) => prev - 1);
  };

  const handleFinish = () => {
    if (validateCurrentStep()) {
      console.log('Form Submitted Data:', formData);
      setStep(4);
    }
  };

  return (
    <main className="wizard-container">
      {error && <p className="error-message">{error}</p>}

      {step === 1 && (
        <Step1Email
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <Step2Details
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <Step3Referral
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
          handleFinish={handleFinish}
        />
      )}

      {step === 4 && <Step4ThankYou />}
    </main>
  );
}

export default App;