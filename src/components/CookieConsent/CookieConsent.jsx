import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations/translations';
import { enableAnalytics, disableAnalytics } from '../../firebase';
import './CookieConsent.css';

const CONSENT_KEY = 'cookie_consent';

function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // storage unavailable
  }
}

export function CookieConsent() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [visible, setVisible] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === 'accepted') {
      enableAnalytics();
    } else if (consent === 'rejected') {
      disableAnalytics();
    } else {
      // No choice yet — show the banner, analytics stays off
      setVisible(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    setConsent('accepted');
    enableAnalytics();
    setVisible(false);
  }, []);

  const handleReject = useCallback(() => {
    setConsent('rejected');
    disableAnalytics();
    setVisible(false);
  }, []);

  const gdpr = t.gdpr || {};

  return (
    <>
      {visible && (
        <div className="cookie-banner" role="dialog" aria-label={gdpr.bannerTitle || 'Cookie consent'}>
          <div className="cookie-banner-inner">
            <div className="cookie-banner-text">
              <h3>{gdpr.bannerTitle}</h3>
              <p>
                {gdpr.bannerText}{' '}
                <button
                  type="button"
                  className="cookie-link-btn"
                  onClick={() => setShowPrivacy(true)}
                >
                  {gdpr.privacyLink}
                </button>
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button type="button" className="cookie-btn cookie-btn-reject" onClick={handleReject}>
                {gdpr.reject}
              </button>
              <button type="button" className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
                {gdpr.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div className="privacy-overlay" onClick={(e) => e.target === e.currentTarget && setShowPrivacy(false)}>
          <div className="privacy-modal" role="dialog" aria-label={gdpr.privacyTitle}>
            <div className="privacy-modal-header">
              <h2>{gdpr.privacyTitle}</h2>
              <button type="button" className="privacy-close-btn" onClick={() => setShowPrivacy(false)} aria-label="Close">
                ×
              </button>
            </div>
            <div className="privacy-modal-body">
              <h3>{gdpr.privacy?.dataController}</h3>
              <p>{gdpr.privacy?.dataControllerText}</p>

              <h3>{gdpr.privacy?.whatWeCollect}</h3>
              <p>{gdpr.privacy?.whatWeCollectText}</p>
              <ul>
                {gdpr.privacy?.collectedItems?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3>{gdpr.privacy?.whyWeCollect}</h3>
              <p>{gdpr.privacy?.whyWeCollectText}</p>

              <h3>{gdpr.privacy?.cookies}</h3>
              <p>{gdpr.privacy?.cookiesText}</p>
              <ul>
                {gdpr.privacy?.cookieItems?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3>{gdpr.privacy?.thirdParty}</h3>
              <p>{gdpr.privacy?.thirdPartyText}</p>

              <h3>{gdpr.privacy?.yourRights}</h3>
              <p>{gdpr.privacy?.yourRightsText}</p>
              <ul>
                {gdpr.privacy?.rightsItems?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3>{gdpr.privacy?.retention}</h3>
              <p>{gdpr.privacy?.retentionText}</p>

              <h3>{gdpr.privacy?.contact}</h3>
              <p>{gdpr.privacy?.contactText}</p>

              <p><em>{gdpr.privacy?.lastUpdated}</em></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
