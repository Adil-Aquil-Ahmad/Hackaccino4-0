import React, { useState } from 'react';
import './CommunityPartnerForm.css';

const CommunityPartnerForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    collegeName: '',
    email: '',
    phone: '',
    organization: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const steps = [
    {
      id: 'intro',
      title: 'HACKACCINO 2026',
      subtitle: 'Call for Community Partner',
      content: (
        <div className="intro-content">
          <div className="intro-image">
            <div className="image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
          </div>
          <p className="intro-description">
            Computer Society of India, Bennett University Student Chapter invites colleges and 
            student organizations to partner with our flagship 24-hour hackathon, Hackaccino 2026. 
            Scheduled for April 2026, the event will host 1500+ students and focus on innovation, 
            collaboration, and technology.
          </p>
        </div>
      )
    },
    {
      id: 'fullName',
      title: 'What is your full name?',
      field: 'fullName',
      type: 'text',
      placeholder: 'Enter your full name',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      id: 'collegeName',
      title: 'College / University Name',
      field: 'collegeName',
      type: 'text',
      placeholder: 'Enter your college or university name',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    },
    {
      id: 'contact',
      title: 'Contact Information',
      fields: ['email', 'phone'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      id: 'organization',
      title: 'Are you part of any student organization?',
      subtitle: 'Mention NA if not part of any organization',
      field: 'organization',
      type: 'text',
      placeholder: 'Enter your organization name or NA',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 'thankyou',
      title: 'Thank You!',
      content: (
        <div className="thankyou-content">
          <div className="thankyou-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <p className="thankyou-message">
            Thank you for your interest in partnering with Hackaccino 2026. 
            Our team will review your submission and contact you shortly.
          </p>
        </div>
      )
    }
  ];

  const validateStep = () => {
    const step = steps[currentStep];
    const newErrors = {};

    if (step.field) {
      if (!formData[step.field]?.trim()) {
        newErrors[step.field] = 'This field is required';
      }
    }

    if (step.fields) {
      step.fields.forEach(field => {
        if (!formData[field]?.trim()) {
          newErrors[field] = 'This field is required';
        } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field])) {
          newErrors[field] = 'Please enter a valid email';
        } else if (field === 'phone' && !/^\+?[\d\s-]{10,}$/.test(formData[field])) {
          newErrors[field] = 'Please enter a valid phone number';
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 0 || currentStep === steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      return;
    }

    if (validateStep()) {
      if (currentStep === steps.length - 2) {
        handleSubmit();
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const scriptUrl = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
      
      if (!scriptUrl) {
        throw new Error('Google Script URL not configured. Please add REACT_APP_GOOGLE_SCRIPT_URL to your .env file');
      }

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'community' })
      });

      console.log('Form submitted successfully:', formData);
      setCurrentStep(prev => prev + 1);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const renderStep = () => {
    const step = steps[currentStep];

    if (step.content) {
      return step.content;
    }

    return (
      <div className="form-step">
        <div className="step-icon">{step.icon}</div>
        <h2 className="step-title">{step.title}</h2>
        {step.subtitle && <p className="step-subtitle">{step.subtitle}</p>}
        
        {step.field && (
          <div className="input-group">
            <input
              type={step.type}
              value={formData[step.field]}
              onChange={(e) => handleInputChange(step.field, e.target.value)}
              placeholder={step.placeholder}
              className={`form-input ${errors[step.field] ? 'error' : ''}`}
            />
            {errors[step.field] && (
              <span className="error-message">{errors[step.field]}</span>
            )}
          </div>
        )}

        {step.fields && (
          <div className="input-group multi">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Email address"
              className={`form-input ${errors.email ? 'error' : ''}`}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
            
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="Phone number"
              className={`form-input ${errors.phone ? 'error' : ''}`}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="community-partner-form">
      <div className="form-container">
        <div className="form-header">
          <h1>HACKACCINO 2026</h1>
          <p>Call for Community Partner</p>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>

        <div className="form-content">
          {renderStep()}
        </div>

        <div className="form-actions">
          {currentStep > 0 && currentStep < steps.length - 1 && (
            <button onClick={handleBack} className="btn-back">
              Back
            </button>
          )}
          
          {currentStep < steps.length - 1 && (
            <button 
              onClick={handleNext} 
              className="btn-next"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 
               currentStep === 0 ? 'Get Started' : 
               currentStep === steps.length - 2 ? 'Submit' : 'Next'}
            </button>
          )}
          
          {submitError && (
            <div className="submit-error">
              {submitError}
            </div>
          )}
        </div>

        <div className="form-footer">
          <p>Step {currentStep + 1} of {steps.length}</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartnerForm;
