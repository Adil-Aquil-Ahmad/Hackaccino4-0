import React, { useState } from 'react';
import './JudgeForm.css';

const JudgeForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    organization: '',
    email: '',
    phone: '',
    expertise: '',
    experience: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const steps = [
    {
      id: 'intro',
      title: 'HACKACCINO 4.0',
      subtitle: 'Call for Judges',
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
            Computer Society of India, Bennett University Student Chapter invites industry experts 
            and professionals to judge our flagship 24-hour hackathon, Hackaccino 2026. Scheduled 
            for April 2026, this event brings together 1500+ talented students showcasing innovative 
            solutions. Your expertise will help identify and encourage the next generation of innovators.
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
      id: 'designation',
      title: 'What is your current designation?',
      field: 'designation',
      type: 'text',
      placeholder: 'e.g., Senior Software Engineer, CTO, Professor',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: 'organization',
      title: 'Which organization do you work for?',
      field: 'organization',
      type: 'text',
      placeholder: 'Enter your organization name',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      id: 'contact',
      title: 'Contact Email / Phone Number',
      fields: ['email', 'phone'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )
    },
    {
      id: 'expertise',
      title: 'What is your area of expertise?',
      field: 'expertise',
      type: 'choice',
      options: ['AI/ML', 'Web Development', 'Mobile Development', 'Cloud Computing', 'Blockchain', 'IoT', 'Cybersecurity', 'Data Science', 'Other'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      id: 'experience',
      title: 'Years of professional experience?',
      field: 'experience',
      type: 'choice',
      options: ['0-2 years', '3-5 years', '6-10 years', '10+ years'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
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
            Thank you for your interest in judging Hackaccino 2026. Our team will reach out 
            to you soon with event details and judging guidelines.
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
      }
    }

    if (step.fields) {
      step.fields.forEach(field => {
        const value = formData[field];
        if (!value || value.trim() === '') {
          newErrors[field] = 'This field is required';
        } else if (field === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            newErrors[field] = 'Please enter a valid email address';
          }
        } else if (field === 'phone') {
          const phoneRegex = /^[0-9]{10}$/;
          if (!phoneRegex.test(value.replace(/\D/g, ''))) {
            newErrors[field] = 'Please enter a valid 10-digit phone number';
          }
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 0 || validateStep()) {
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
        body: JSON.stringify({ ...formData, formType: 'judge' })
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

  const handleChoiceSelect = (field, value) => {
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
        
        {step.field && step.type === 'text' && (
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

        {step.field && step.type === 'choice' && (
          <div className="choice-group">
            {step.options.map((option) => (
              <button
                key={option}
                className={`choice-button ${formData[step.field] === option ? 'selected' : ''}`}
                onClick={() => handleChoiceSelect(step.field, option)}
              >
                {option}
              </button>
            ))}
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
    <div className="judge-form">
      <div className="form-container">
        <div className="form-header">
          <h1>HACKACCINO 4.0</h1>
          <p>Call for Judges</p>
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
