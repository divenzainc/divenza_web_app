import MainLayout from '@/layout/main/Index';
import PolicyLayout, { PolicySection } from '@/components/policies/PolicyLayout';
import { Cookie } from 'lucide-react';

const cookieTypes = [
  {
    name: 'Essential / Strictly Necessary Cookies',
    color: '#3F3369',
    bg: 'rgba(63,51,105,0.04)',
    border: 'rgba(63,51,105,0.12)',
    desc: 'Required for the Website to function properly. They cannot be disabled without affecting basic site operation.',
    examples: [
      'Remembering your cookie consent choice',
      'Session management (keeping you logged in)',
      'Security features (e.g., CSRF protection)',
    ],
    basis: 'Legitimate interest / necessity for providing the service.',
  },
  {
    name: 'Functional Cookies',
    color: '#5a4d8a',
    bg: 'rgba(90,77,138,0.04)',
    border: 'rgba(90,77,138,0.12)',
    desc: 'These improve functionality and personalization but are not strictly necessary.',
    examples: [
      'Remembering language or region preferences',
      'Storing form data for easier submission',
    ],
    basis: 'Consent (you can opt out).',
  },
  {
    name: 'Performance / Analytics Cookies',
    color: '#32A790',
    bg: 'rgba(50,167,144,0.04)',
    border: 'rgba(50,167,144,0.15)',
    desc: 'These help us understand how visitors use the Website so we can improve it.',
    examples: [
      'Google Analytics (tracks page views, bounce rate, traffic sources)',
      'Other analytics tools (e.g., Hotjar for heatmaps/session recordings — if used)',
    ],
    basis: 'Consent.',
  },
  {
    name: 'Advertising / Marketing Cookies',
    color: '#4bc4a8',
    bg: 'rgba(75,196,168,0.04)',
    border: 'rgba(75,196,168,0.2)',
    desc: 'These are used to deliver relevant ads and measure campaign effectiveness.',
    examples: [
      'Google Ads remarketing',
      'Facebook Pixel / Meta Ads tracking',
      'LinkedIn Insight Tag',
    ],
    basis: 'Consent.',
  },
];

const sections: PolicySection[] = [
  {
    id: 'what-are-cookies',
    number: '1',
    title: 'What Are Cookies?',
    content: (
      <>
        <p>
          Cookies are small text files that are placed on your device (computer, mobile phone, tablet) when you
          visit a website. They allow the website to recognize your device and remember certain information (such
          as preferences or login status) between visits.
        </p>
        <p className="mt-3">We also use similar technologies, including:</p>
        <ul className="mt-2 space-y-1.5 list-none">
          {[
            'Web beacons/pixels (small images that track user behavior)',
            'Local storage / HTML5 storage',
            'Session storage',
            'SDKs in mobile apps (if applicable)',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3F3369' }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm italic text-gray-500">
          These are collectively referred to as &ldquo;cookies&rdquo; in this policy.
        </p>
      </>
    ),
  },
  {
    id: 'types-of-cookies',
    number: '2',
    title: 'Types of Cookies We Use',
    content: (
      <div className="space-y-4">
        {cookieTypes.map((type) => (
          <div
            key={type.name}
            className="rounded-xl p-5 border"
            style={{ background: type.bg, borderColor: type.border }}
          >
            <h3 className="font-semibold mb-2" style={{ color: type.color }}>{type.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{type.desc}</p>
            <div className="mb-2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: type.color, opacity: 0.7 }}>Examples</p>
              <ul className="space-y-1 list-none">
                {type.examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: type.color }} />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs mt-3 text-gray-500">
              <strong className="text-gray-700">Legal basis:</strong> {type.basis}
            </p>
          </div>
        ))}
        <div
          className="rounded-xl p-5 border"
          style={{ background: 'rgba(63,51,105,0.03)', borderColor: 'rgba(63,51,105,0.1)' }}
        >
          <h3 className="font-semibold mb-2" style={{ color: '#3F3369' }}>Third-Party Cookies</h3>
          <p className="text-sm text-gray-600">
            Some cookies are placed by third-party services we integrate (e.g., Google, Meta, YouTube embeds,
            payment gateways). These parties may use your data for their own purposes. Refer to their privacy
            policies for details.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'cookie-duration',
    number: '3',
    title: 'How Long Cookies Stay on Your Device',
    content: (
      <div className="grid sm:grid-cols-2 gap-3">
        <div
          className="rounded-xl p-4 border"
          style={{ borderColor: 'rgba(63,51,105,0.12)', background: 'rgba(63,51,105,0.03)' }}
        >
          <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#3F3369' }}>Session Cookies</h3>
          <p className="text-sm text-gray-600">Deleted automatically when you close your browser.</p>
        </div>
        <div
          className="rounded-xl p-4 border"
          style={{ borderColor: 'rgba(50,167,144,0.15)', background: 'rgba(50,167,144,0.03)' }}
        >
          <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#32A790' }}>Persistent Cookies</h3>
          <p className="text-sm text-gray-600">Remain until their expiration date or until you delete them (typically 1 month to 2 years).</p>
        </div>
      </div>
    ),
  },
  {
    id: 'cookie-choices',
    number: '4',
    title: 'Your Cookie Choices & How to Manage Cookies',
    content: (
      <>
        <p>You have the right to accept or reject non-essential cookies.</p>

        <div className="mt-4 space-y-4">
          <div className="rounded-xl p-4 border" style={{ borderColor: 'rgba(63,51,105,0.12)', background: 'rgba(63,51,105,0.03)' }}>
            <h3 className="font-semibold mb-2" style={{ color: '#3F3369' }}>Cookie Consent Banner</h3>
            <p className="text-sm text-gray-600 mb-2">When you first visit our Website, you will see a cookie banner allowing you to:</p>
            <ul className="space-y-1 list-none">
              {['Accept all cookies', 'Reject non-essential cookies', 'Customize your preferences (e.g., allow analytics but not marketing)'].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#3F3369' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-2">
              You can change your preferences at any time by clicking the &ldquo;Cookie Settings&rdquo; link in the footer.
            </p>
          </div>

          <div className="rounded-xl p-4 border" style={{ borderColor: 'rgba(50,167,144,0.15)', background: 'rgba(50,167,144,0.03)' }}>
            <h3 className="font-semibold mb-2" style={{ color: '#32A790' }}>Browser Settings</h3>
            <p className="text-sm text-gray-600 mb-2">You can manage cookies directly in your browser:</p>
            <ul className="space-y-1 list-none">
              {[
                'Google Chrome: Settings → Privacy and security → Cookies and other site data',
                'Firefox: Preferences → Privacy & Security → Cookies and Site Data',
                'Safari: Preferences → Privacy → Manage Website Data',
                'Microsoft Edge: Settings → Cookies and site permissions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#32A790' }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-2 italic">Disabling cookies may limit some Website features.</p>
          </div>

          <div className="rounded-xl p-4 border" style={{ borderColor: 'rgba(90,77,138,0.12)', background: 'rgba(90,77,138,0.03)' }}>
            <h3 className="font-semibold mb-2" style={{ color: '#5a4d8a' }}>Opt-Out Tools for Specific Providers</h3>
            <ul className="space-y-1.5 list-none">
              {[
                { label: 'Google Analytics', note: 'tools.google.com/dlpage/gaoptout' },
                { label: 'Google Ads', note: 'adssettings.google.com' },
                { label: 'Meta (Facebook/Instagram)', note: 'facebook.com/settings?tab=ads' },
                { label: 'Your Online Choices', note: 'youronlinechoices.com (for EU/UK users)' },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: '#5a4d8a' }} />
                  <span><strong>{item.label}:</strong> {item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'do-not-track',
    number: '5',
    title: 'Do Not Track Signals',
    content: (
      <p>
        We do not currently respond to &ldquo;Do Not Track&rdquo; (DNT) browser signals because there is no uniform industry
        standard. We will reassess if a standard emerges.
      </p>
    ),
  },
  {
    id: 'international-security',
    number: '6',
    title: 'International Transfers & Security',
    content: (
      <>
        <p>
          Cookies may involve data transfers outside Sri Lanka (e.g., to Google servers in the US). We use
          appropriate safeguards (e.g., standard contractual clauses) and rely on consent where required. For
          more information, see our{' '}
          <a href="/privacy-policy" className="font-medium hover:underline" style={{ color: '#3F3369' }}>
            Privacy Policy
          </a>
          .
        </p>
        <p className="mt-3">
          We take reasonable steps to secure data collected via cookies, but no method is 100% secure.
        </p>
      </>
    ),
  },
  {
    id: 'updates',
    number: '7',
    title: 'Updates to This Cookie Policy',
    content: (
      <p>
        We may update this policy from time to time. Changes will be posted here with an updated &ldquo;Last Updated&rdquo;
        date. Significant changes may be notified via the Website or email.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '8',
    title: 'Contact Us',
    content: (
      <p>
        If you have questions about our use of cookies, email us at:{' '}
        <a href="mailto:contact@divenzainc.com" className="font-medium hover:underline" style={{ color: '#32A790' }}>
          contact@divenzainc.com
        </a>
        . Thank you for visiting divenzainc.com. We value your privacy and strive to make your experience
        transparent and secure.
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <MainLayout>
      <PolicyLayout
        title="Cookie Policy"
        subtitle="How and why we use cookies and similar tracking technologies on our website."
        lastUpdated="March 17, 2026"
        icon={<Cookie className="w-7 h-7 text-white" />}
        preamble={
          <p>
            Divenza Pvt Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;Divenza&rdquo;) uses cookies and similar tracking technologies
            on our website{' '}
            <a href="https://www.divenzainc.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: '#32A790' }}>
              www.divenzainc.com
            </a>{' '}
            to enhance your experience, analyze usage, and deliver personalized content and advertising. By
            continuing to use the Website after being presented with our cookie banner, you agree to our use of
            cookies as described in this policy. This Cookie Policy should be read together with our{' '}
            <a href="/privacy-policy" className="font-medium hover:underline" style={{ color: '#3F3369' }}>Privacy Policy</a>{' '}
            and{' '}
            <a href="/terms-of-services" className="font-medium hover:underline" style={{ color: '#3F3369' }}>Terms of Service</a>.
          </p>
        }
        sections={sections}
      />
    </MainLayout>
  );
}
