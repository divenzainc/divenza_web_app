import MainLayout from '@/layout/main/Index';
import PolicyLayout, { PolicySection } from '@/components/policies/PolicyLayout';
import { RotateCcw } from 'lucide-react';

const sections: PolicySection[] = [
  {
    id: 'general-principles',
    number: '1',
    title: 'General Principles',
    content: (
      <>
        <div className="space-y-3">
          {[
            {
              label: 'Digital & Custom Services',
              color: '#3F3369',
              bg: 'rgba(63,51,105,0.04)',
              border: 'rgba(63,51,105,0.12)',
              text: 'Once access is granted, deliverables are provided, or work begins (e.g., custom code, AI models, marketing campaigns), refunds are generally not available due to immediate value delivery and irreversible effort/costs.',
            },
            {
              label: 'Subscriptions',
              color: '#32A790',
              bg: 'rgba(50,167,144,0.04)',
              border: 'rgba(50,167,144,0.15)',
              text: 'Pro-rated refunds may apply in limited cases. See the eligibility section below for full details.',
            },
            {
              label: 'No "Change of Mind" Refunds',
              color: '#5a4d8a',
              bg: 'rgba(90,77,138,0.04)',
              border: 'rgba(90,77,138,0.12)',
              text: 'Refunds are not issued for dissatisfaction unrelated to material non-performance, change of mind, or minor issues resolvable via support.',
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl p-4 border" style={{ background: item.bg, borderColor: item.border }}>
              <h3 className="font-semibold text-sm mb-1.5" style={{ color: item.color }}>{item.label}</h3>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">
          We comply with applicable Sri Lankan laws, including the Consumer Affairs Authority Act. Disputes may
          be directed to the Consumer Affairs Authority if required.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    number: '2',
    title: 'Refund Eligibility by Service Type',
    content: (
      <div className="space-y-5">
        {/* Custom Development */}
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'rgba(63,51,105,0.15)' }}>
          <div className="px-5 py-3" style={{ background: 'linear-gradient(135deg, rgba(63,51,105,0.08), rgba(63,51,105,0.04))' }}>
            <h3 className="font-semibold" style={{ color: '#3F3369' }}>
              A. Custom Development Projects, AI Automations, Web/Mobile Apps, Digital Marketing Campaigns
            </h3>
          </div>
          <div className="px-5 py-4 space-y-3">
            <p className="text-sm text-gray-600">
              These are bespoke services based on your requirements, proposals, statements of work (SOW), or agreements.
            </p>
            <div className="space-y-2">
              {[
                { label: 'Deposits/Upfront Payments', eligible: false, desc: 'Non-refundable (covers initial planning, architecture, design, or setup).' },
                { label: 'Milestone Payments', eligible: 'partial', desc: 'Refundable only if we materially fail to deliver agreed milestones after reasonable cure periods (e.g., 14–30 days). Refunds limited to the specific undelivered milestone amount, minus costs incurred.' },
                { label: 'Completed Deliverables', eligible: false, desc: 'No refunds once final delivery/acceptance occurs (or after warranty period if specified in SOW).' },
                { label: 'Cancellation by Client', eligible: 'partial', desc: 'You may cancel mid-project; you pay for completed work + reasonable termination fees (e.g., 20–50% of remaining value, as per agreement).' },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-3 text-sm rounded-lg p-3" style={{ background: 'rgba(63,51,105,0.02)' }}>
                  <span
                    className="mt-0.5 px-2 py-0.5 rounded-full text-xs font-semibold shrink-0"
                    style={
                      row.eligible === false
                        ? { background: 'rgba(239,68,68,0.1)', color: '#dc2626' }
                        : { background: 'rgba(234,179,8,0.12)', color: '#a16207' }
                    }
                  >
                    {row.eligible === false ? 'Non-refundable' : 'Conditional'}
                  </span>
                  <div>
                    <p className="font-medium text-gray-700">{row.label}</p>
                    <p className="text-gray-500 mt-0.5">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subscriptions */}
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'rgba(50,167,144,0.2)' }}>
          <div className="px-5 py-3" style={{ background: 'linear-gradient(135deg, rgba(50,167,144,0.08), rgba(50,167,144,0.04))' }}>
            <h3 className="font-semibold" style={{ color: '#32A790' }}>
              B. Subscription-Based Products (DI Seller, DI POS Cloud, DI Tech Cloud)
            </h3>
          </div>
          <div className="px-5 py-4 space-y-3">
            <p className="text-sm text-gray-600">Monthly/annual subscriptions auto-renew.</p>
            <div className="space-y-2">
              {[
                { label: 'Within 14 Days of Initial Purchase', eligible: true, desc: 'Full refund of the first billing period only if you have not substantially used the service (e.g., no significant data import, transactions processed, or custom setup).' },
                { label: 'After 14 Days', eligible: false, desc: 'No refunds for partial months/periods. You may cancel to prevent future billing (effective at end of current period).' },
                { label: 'Service Discontinuation by Us', eligible: true, desc: 'Prorated refund issued for unused days if we terminate your access for reasons other than your breach.' },
                { label: 'Trial Periods (if offered)', eligible: true, desc: 'No charge during trial; no refund needed.' },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-3 text-sm rounded-lg p-3" style={{ background: 'rgba(50,167,144,0.03)' }}>
                  <span
                    className="mt-0.5 px-2 py-0.5 rounded-full text-xs font-semibold shrink-0"
                    style={
                      row.eligible === true
                        ? { background: 'rgba(34,197,94,0.1)', color: '#16a34a' }
                        : { background: 'rgba(239,68,68,0.1)', color: '#dc2626' }
                    }
                  >
                    {row.eligible === true ? 'Eligible' : 'Non-refundable'}
                  </span>
                  <div>
                    <p className="font-medium text-gray-700">{row.label}</p>
                    <p className="text-gray-500 mt-0.5">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* One-time fees */}
        <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'rgba(90,77,138,0.15)' }}>
          <div className="px-5 py-3" style={{ background: 'linear-gradient(135deg, rgba(90,77,138,0.07), rgba(90,77,138,0.03))' }}>
            <h3 className="font-semibold" style={{ color: '#5a4d8a' }}>C. One-Time Fees (Setup, Consulting, Training, Add-ons)</h3>
          </div>
          <div className="px-5 py-4">
            <p className="text-sm text-gray-600">
              Generally non-refundable once service begins or is delivered. Exceptions apply only for material
              non-delivery after reasonable attempts to resolve.
            </p>
          </div>
        </div>

        {/* Payment Processing */}
        <div
          className="rounded-xl p-4 border text-sm"
          style={{ borderColor: 'rgba(63,51,105,0.1)', background: 'rgba(63,51,105,0.02)' }}
        >
          <h3 className="font-semibold mb-1.5" style={{ color: '#3F3369' }}>D. Payment Processing Fees</h3>
          <p className="text-gray-600">
            Third-party fees (e.g., Stripe, PayPal, bank charges) are non-refundable and will be deducted from
            any approved refund.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'how-to-request',
    number: '3',
    title: 'How to Request a Refund',
    content: (
      <>
        <p>Contact us within the applicable window:</p>
        <div
          className="mt-4 rounded-xl p-4 border"
          style={{ borderColor: 'rgba(50,167,144,0.2)', background: 'rgba(50,167,144,0.04)' }}
        >
          <a href="mailto:contact@divenzainc.com" className="font-semibold hover:underline" style={{ color: '#32A790' }}>
            contact@divenzainc.com
          </a>
          <p className="text-sm text-gray-600 mt-1">Include: order/invoice number, reason for request, and supporting proof if applicable.</p>
        </div>
        <div className="mt-4 space-y-2">
          {[
            'Provide details: invoice/reference, date of purchase, specific issue, and supporting evidence (e.g., screenshots, support tickets).',
            'We review requests within 7–14 business days.',
            'Approved refunds are processed to the original payment method within 10–30 business days (depending on processor).',
            'We may offer alternatives (e.g., credits, fixes, partial refunds, or service extensions) instead of cash refunds.',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2.5 text-sm">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3F3369' }} />
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: 'non-refundable',
    number: '4',
    title: 'Non-Refundable Situations',
    content: (
      <div className="space-y-2">
        {[
          'Change of mind or no longer needing the service/product',
          'Minor bugs/feature requests resolvable via support/updates',
          'Violations of our Terms of Service (e.g., misuse, fraud)',
          'Completed/accepted deliverables or used subscription periods',
          'Third-party costs already incurred',
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm"
            style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-red-400" />
            <span className="text-gray-600">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'chargebacks',
    number: '5',
    title: 'Chargebacks & Disputes',
    content: (
      <p>
        Unauthorized chargebacks may result in account suspension and legal action for recovery of funds and fees.
        We strongly encourage using our support or refund process first to resolve any issues promptly and fairly.
      </p>
    ),
  },
  {
    id: 'changes',
    number: '6',
    title: 'Changes to This Refund Policy',
    content: (
      <p>
        We may update this policy. Changes will be posted here with a new &ldquo;Last Updated&rdquo; date. Continued use of
        our services after changes constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '7',
    title: 'Contact Us',
    content: (
      <p>
        Questions about refunds? Email us at:{' '}
        <a href="mailto:contact@divenzainc.com" className="font-medium hover:underline" style={{ color: '#32A790' }}>
          contact@divenzainc.com
        </a>
        . We appreciate your business and aim to resolve issues fairly and promptly. Thank you for choosing Divenza!
      </p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <MainLayout>
      <PolicyLayout
        title="Refund Policy"
        subtitle="Our approach to refunds for payments made for Divenza's products and services."
        lastUpdated="March 17, 2026"
        icon={<RotateCcw className="w-7 h-7 text-white" />}
        preamble={
          <p>
            Divenza Pvt Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;Divenza&rdquo;) is committed to customer satisfaction.
            Due to the digital and custom nature of our offerings, refunds are limited and subject to the terms
            below. All refunds are at our sole discretion and processed only where eligible under this policy.
            We comply with applicable Sri Lankan laws including the Consumer Affairs Authority Act.
          </p>
        }
        sections={sections}
      />
    </MainLayout>
  );
}
