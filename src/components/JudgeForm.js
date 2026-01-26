import React, { useState } from 'react';
import './JudgeForm.css';

const JudgeForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    jobTitle: '',
    expertise: '',
    city: '',
    linkedIn: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const steps = [
    {
      id: 'intro',
      title: 'HACKACCINO 2026',
      subtitle: 'Call for Mentors & Judges',
      content: (
        <div className="intro-content">
          <div className="intro-image">
            <div className="image-placeholder judge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
            </div>
          </div>
          <p className="intro-description">
            Computer Society of India, Bennett University Student Chapter invites experienced professionals 
            to join Hackaccino 2026 as Mentors and Judges. Scheduled for April 2026, this 24-hour hackathon 
            will bring together 1500+ students in a dynamic and innovative environment. Your expertise will 
            help guide, evaluate, and inspire the next generation of innovators.
          </p>
        </div>
      )
    },
    {
      id: 'fullName',
      title: 'Full Name',
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
      id: 'organization',
      title: 'Organization / Institution',
      field: 'organization',
      type: 'text',
      placeholder: 'Enter your organization or institution name',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: 'email',
      title: 'Email Address',
      field: 'email',
      type: 'email',
      placeholder: 'your.email@example.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    },
    {
      id: 'phone',
      title: 'Phone Number',
      field: 'phone',
      type: 'tel',
      placeholder: '+91 XXXXX XXXXX',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      id: 'jobTitle',
      title: 'Job Title / Designation',
      field: 'jobTitle',
      type: 'text',
      placeholder: 'e.g., Senior Software Engineer, Product Manager, Professor',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: 'expertise',
      title: 'Primary Domain of Expertise',
      field: 'expertise',
      type: 'text',
      placeholder: 'e.g., AI/ML, Web Development, Cybersecurity, Data Science',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 'city',
      title: 'City',
      field: 'city',
      type: 'text',
      placeholder: 'Enter your city',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      id: 'linkedIn',
      title: 'LinkedIn Profile URL',
      field: 'linkedIn',
      type: 'url',
      placeholder: 'https://linkedin.com/in/yourprofile',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      id: 'thankyou',
      title: 'Thank You!',
      content: (
        <div className="thankyou-content">
          <div className="success-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <p className="thankyou-message">
            Thank you for expressing interest in being a Mentor or Judge at Hackaccino 2026. 
            Our team will review your details and reach out with further information.
          </p>
        </div>
      )
    }
  ];

  const validateStep = () => {
    const step = steps[currentStep];
    const newErrors = {};

    if (step.field) {
      const value = formData[step.field];
      if (!value || value.trim() === '') {
        newErrors[step.field] = 'This field is required';
      } else if (step.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[step.field] = 'Please enter a valid email address';
        }
      } else if (step.type === 'tel') {
        const phoneRegex = /^[0-9+\s-]{10,}$/;
        if (!phoneRegex.test(value)) {
          newErrors[step.field] = 'Please enter a valid phone number';
        }
      } else if (step.type === 'url') {
        try {
          new URL(value);
        } catch {
          newErrors[step.field] = 'Please enter a valid URL';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 0 || validateStep()) {
      if (currentStep === steps.length - 2) {
        // Show thank you page immediately
        setCurrentStep(prev => prev + 1);
        // Submit in background
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
        body: JSON.stringify({ ...formData, formType: 'judge' })
      });

      console.log('Form submitted successfully:', formData);
      setIsSubmitting(false);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Don't show error to user since they're already on thank you page
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
      </div>
    );
  };

  return (
    <div className={`judge-form ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <button 
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle theme"
      >
        <div className="toggle-track">
          <div className="toggle-thumb">
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </div>
        </div>
      </button>
      <div className="form-container">
        <div className="form-header">
          <h1>HACKACCINO 2026</h1>
          <p>Call for Mentors & Judges</p>
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

export default JudgeForm;
