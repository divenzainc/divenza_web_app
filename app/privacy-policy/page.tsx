import MainLayout from '@/layout/main/Index';
import PolicyLayout, { PolicySection } from '@/components/policies/PolicyLayout';
import { ShieldCheck } from 'lucide-react';

const sections: PolicySection[] = [
  {
    id: 'who-we-are',
    number: '1',
    title: 'Who We Are',
    content: (
      <>
        <p>
          Divenza Pvt Ltd is a private limited company registered in Sri Lanka. We provide IT solutions,
          including custom software development, web and mobile applications, AI automations, digital marketing,
          e-commerce platforms (DI Seller), cloud infrastructure (DI Tech Cloud), point-of-sale systems
          (DI POS Cloud), and related consulting services.
        </p>
        <p>
          For privacy inquiries, contact us at:{' '}
          <a href="mailto:contact@divenzainc.com" className="font-medium hover:underline" style={{ color: '#32A790' }}>
            contact@divenzainc.com
          </a>
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    number: '2',
    title: 'Information We Collect',
    content: (
      <>
        <p>We collect the following types of information:</p>

        <div className="mt-4 space-y-5">
          <div className="rounded-xl p-4 border" style={{ borderColor: 'rgba(63,51,105,0.12)', background: 'rgba(63,51,105,0.03)' }}>
            <h3 className="font-semibold text-gray-800 mb-2" style={{ color: '#3F3369' }}>Personal Information You Provide</h3>
            <ul className="space-y-1.5 list-none">
              {[
                'Name, email address, phone number, company name, job title',
                'Billing/shipping details (for paid services or products)',
                'Messages, inquiries, project requirements, or feedback submitted via contact forms, email, WhatsApp, or calls',
                'Account credentials (if you create an account on DI Seller, DI POS Cloud, or client portals)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3F3369' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-4 border" style={{ borderColor: 'rgba(50,167,144,0.15)', background: 'rgba(50,167,144,0.03)' }}>
            <h3 className="font-semibold mb-2" style={{ color: '#32A790' }}>Automatically Collected Information</h3>
            <ul className="space-y-1.5 list-none">
              {[
                'IP address, browser type, device information, operating system',
                'Pages visited, time/date of access, referral sources',
                'Cookies, web beacons, and similar technologies (see our Cookie Policy for details)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#32A790' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl p-4 border" style={{ borderColor: 'rgba(63,51,105,0.12)', background: 'rgba(63,51,105,0.02)' }}>
            <h3 className="font-semibold mb-2" style={{ color: '#5a4d8a' }}>Information from Third Parties</h3>
            <ul className="space-y-1.5 list-none">
              {[
                'Analytics data from Google Analytics or similar tools',
                'Payment processor data (e.g., transaction IDs — we do not store full card details)',
                'Social media or advertising platforms (if you interact with our ads)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#5a4d8a' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'how-we-use',
    number: '3',
    title: 'How We Use Your Information',
    content: (
      <>
        <p>We use your information to:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            'Respond to inquiries, provide quotes, consultations, or support',
            'Deliver and improve our services/products (e.g., project development, software updates, client dashboards)',
            'Process payments and manage subscriptions (e.g., DI Seller monthly plans)',
            'Send service-related communications (updates, invoices, support tickets)',
            'Send marketing emails/newsletters (only with your consent)',
            'Analyze website usage and improve user experience',
            'Comply with legal obligations, prevent fraud, or enforce our terms',
            'Protect the security of our systems and users',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'linear-gradient(135deg, #3F3369, #32A790)' }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'legal-basis',
    number: '4',
    title: 'Legal Basis for Processing (Where Applicable)',
    content: (
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { label: 'Contractual Necessity', desc: 'To provide services you request or have contracted for.' },
          { label: 'Consent', desc: 'For marketing communications or non-essential cookies.' },
          { label: 'Legitimate Interests', desc: 'Website analytics, fraud prevention, service improvement.' },
          { label: 'Legal Obligation', desc: 'Tax, accounting, or regulatory compliance.' },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-4 border"
            style={{ borderColor: 'rgba(63,51,105,0.1)', background: 'rgba(63,51,105,0.02)' }}
          >
            <p className="font-semibold text-sm mb-1" style={{ color: '#3F3369' }}>{item.label}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'sharing',
    number: '5',
    title: 'Sharing Your Information',
    content: (
      <>
        <p>
          <strong className="text-gray-800">We do not sell your personal information.</strong> We may share it with:
        </p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            'Service providers (hosting, cloud providers, payment gateways, analytics tools, email services) under strict confidentiality',
            'Business partners (only with your explicit consent or as necessary for project delivery)',
            'Legal authorities (if required by law, court order, or to protect rights/safety)',
            'In the event of merger, acquisition, or asset sale (your data may transfer with notice)',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#32A790' }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'international-transfers',
    number: '6',
    title: 'International Data Transfers',
    content: (
      <p>
        We operate in Sri Lanka and Canada. Your data may be transferred to and processed in these or other countries
        where our service providers are located. We use appropriate safeguards (e.g., standard contractual clauses)
        to protect cross-border transfers in line with applicable laws.
      </p>
    ),
  },
  {
    id: 'data-security',
    number: '7',
    title: 'Data Security',
    content: (
      <p>
        We implement reasonable technical and organizational measures to protect your data from unauthorized access,
        loss, misuse, or alteration (e.g., encryption, access controls, secure servers). However, no internet
        transmission or storage is 100% secure — we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: 'data-retention',
    number: '8',
    title: 'Data Retention',
    content: (
      <>
        <p>We keep your personal information only as long as necessary:</p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            'Active clients/projects: duration of the relationship + up to 7 years for legal/tax purposes',
            'Inquiries/marketing: until you unsubscribe or withdraw consent',
            'Website logs/analytics: typically 12–26 months',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3F3369' }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 'your-rights',
    number: '9',
    title: 'Your Rights',
    content: (
      <>
        <p>
          Depending on your location and applicable law (e.g., Sri Lanka PDPA, GDPR if applicable), you may have rights to:
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
          {[
            'Access, correct, or delete your personal data',
            'Restrict or object to processing',
            'Withdraw consent (where processing is consent-based)',
            'Data portability',
            'Lodge a complaint with a supervisory authority',
          ].map((right) => (
            <div
              key={right}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
              style={{ background: 'rgba(50,167,144,0.05)', border: '1px solid rgba(50,167,144,0.15)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#32A790' }} />
              <span className="text-sm">{right}</span>
            </div>
          ))}
        </div>
        <p className="mt-4">
          To exercise these rights, email{' '}
          <a href="mailto:contact@divenzainc.com" className="font-medium hover:underline" style={{ color: '#32A790' }}>
            contact@divenzainc.com
          </a>
          . We respond within 30 days (or as required by law).
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    number: '10',
    title: 'Cookies and Tracking Technologies',
    content: (
      <p>
        We use cookies and similar technologies. See our separate{' '}
        <a href="/cookie-policy" className="font-medium hover:underline" style={{ color: '#3F3369' }}>
          Cookie Policy
        </a>{' '}
        for details on types, purposes, and how to manage preferences.
      </p>
    ),
  },
  {
    id: 'childrens-privacy',
    number: '11',
    title: "Children's Privacy",
    content: (
      <p>
        Our Website and services are not directed to children under 16. We do not knowingly collect personal
        information from children. If we learn we have collected such data, we will delete it.
      </p>
    ),
  },
  {
    id: 'changes',
    number: '12',
    title: 'Changes to This Privacy Policy',
    content: (
      <p>
        We may update this policy from time to time. Changes will be posted here with an updated "Last Updated"
        date. Significant changes may be notified via email or prominent notice on the Website.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '13',
    title: 'Contact Us',
    content: (
      <p>
        If you have questions about this Privacy Policy or our data practices, email us at:{' '}
        <a href="mailto:contact@divenzainc.com" className="font-medium hover:underline" style={{ color: '#32A790' }}>
          contact@divenzainc.com
        </a>
        . Thank you for trusting Divenza with your information. We are committed to handling it responsibly.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <PolicyLayout
        title="Privacy Policy"
        subtitle="How Divenza collects, uses, and protects your personal information."
        lastUpdated="March 17, 2026"
        icon={<ShieldCheck className="w-7 h-7 text-white" />}
        preamble={
          <p>
            Divenza Pvt Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;Divenza&rdquo;) is committed to protecting your
            privacy and handling your personal information responsibly. This Privacy Policy explains how we collect,
            use, disclose, store, and protect your personal data when you visit our website{' '}
            <a href="https://www.divenzainc.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: '#32A790' }}>
              www.divenzainc.com
            </a>
            , use our services, products (including DI Seller, DI Tech Cloud, and DI POS Cloud), contact us, or
            otherwise interact with us. By accessing or using our Website or services, you agree to the practices
            described in this Privacy Policy.
          </p>
        }
        sections={sections}
      />
    </MainLayout>
  );
}
