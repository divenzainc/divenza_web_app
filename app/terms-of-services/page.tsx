import MainLayout from '@/layout/main/Index';
import PolicyLayout, { PolicySection } from '@/components/policies/PolicyLayout';
import { FileText } from 'lucide-react';

const sections: PolicySection[] = [
  {
    id: 'services-overview',
    number: '1',
    title: 'Services Overview',
    content: (
      <>
        <p>
          Divenza provides IT and digital solutions, including but not limited to:
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-2.5">
          {[
            'Custom web and mobile application development',
            'AI-powered automations (chatbots, process automation, predictive analytics, custom AI models)',
            'Digital marketing (PPC, SEO, content, social media, email campaigns)',
            'E-commerce platforms (DI Seller)',
            'Cloud infrastructure and consulting (DI Tech Cloud)',
            'Point-of-sale systems (DI POS Cloud)',
            'UI/UX design, branding, and ongoing support',
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-2.5 rounded-lg px-3 py-2.5 text-sm"
              style={{ background: 'rgba(63,51,105,0.04)', border: '1px solid rgba(63,51,105,0.1)' }}
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3F3369' }} />
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500 italic">
          Specific scope, deliverables, timelines, fees, and milestones are defined in separate proposals, order
          forms, statements of work (&ldquo;SOW&rdquo;), or agreements (&ldquo;Project Agreements&rdquo;). In case of conflict, the
          Project Agreement prevails over these Terms.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    number: '2',
    title: 'Eligibility and Accounts',
    content: (
      <>
        <p>
          You must be at least 18 years old (or the age of majority in your jurisdiction) to use the Services.
          If using Services for a business, you represent you have authority to bind it.
        </p>
        <p className="mt-3">For account-based Services (e.g., DI Seller, DI POS Cloud client portals), you agree to:</p>
        <ul className="mt-2 space-y-1.5 list-none">
          {[
            'Provide accurate, current information',
            'Maintain confidentiality of login credentials',
            'Notify us immediately of unauthorized access',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#32A790' }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">We reserve the right to suspend or terminate accounts for violations.</p>
      </>
    ),
  },
  {
    id: 'use-of-services',
    number: '3',
    title: 'Use of Services',
    content: (
      <>
        <p>
          You agree to use the Services only for lawful purposes and in compliance with these Terms and
          applicable laws (including Sri Lanka&rsquo;s Personal Data Protection Act No. 9 of 2022).
        </p>
        <p className="mt-3 font-medium text-gray-700">You shall not:</p>
        <ul className="mt-2 space-y-1.5 list-none">
          {[
            'Reverse engineer, decompile, disassemble, or attempt to derive source code',
            'Use the Services to infringe intellectual property, violate privacy, or transmit harmful code',
            'Overload, interfere with, or disrupt the Services',
            'Use automated means (bots, scrapers) without permission',
            'Resell or sublicense the Services without written consent',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3F3369' }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div
          className="mt-4 rounded-xl p-4 border text-sm"
          style={{ borderColor: 'rgba(50,167,144,0.2)', background: 'rgba(50,167,144,0.04)' }}
        >
          <p className="font-semibold mb-1" style={{ color: '#32A790' }}>AI-Related Services</p>
          <p className="text-gray-600">
            Outputs from AI features are probabilistic and may contain inaccuracies. You are responsible for
            reviewing, verifying, and using any AI-generated content appropriately. Do not use AI outputs to
            train competing models or represent them as human-generated without disclosure.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    number: '4',
    title: 'Intellectual Property',
    content: (
      <div className="space-y-4">
        {[
          {
            label: 'Our IP',
            color: '#3F3369',
            bg: 'rgba(63,51,105,0.04)',
            border: 'rgba(63,51,105,0.12)',
            text: 'We (or our licensors) own all rights, title, and interest in the Services, underlying code, designs, trademarks, and pre-existing materials. We grant you a limited, non-exclusive, non-transferable license to use the Services during the applicable term solely for your internal business purposes.',
          },
          {
            label: 'Your IP',
            color: '#32A790',
            bg: 'rgba(50,167,144,0.04)',
            border: 'rgba(50,167,144,0.15)',
            text: 'You retain ownership of your pre-existing materials and any content you provide ("Client Materials"). You grant us a limited license to use Client Materials as necessary to provide the Services.',
          },
          {
            label: 'Work Product',
            color: '#5a4d8a',
            bg: 'rgba(90,77,138,0.04)',
            border: 'rgba(90,77,138,0.12)',
            text: 'Unless otherwise specified in a Project Agreement, upon full payment, we assign ownership of custom deliverables (e.g., final code, designs) to you, excluding our pre-existing tools, frameworks, or generic components (which we license to you on a perpetual, non-exclusive basis).',
          },
        ].map((item) => (
          <div key={item.label} className="rounded-xl p-4 border" style={{ background: item.bg, borderColor: item.border }}>
            <h3 className="font-semibold mb-2 text-sm" style={{ color: item.color }}>{item.label}</h3>
            <p className="text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'payments',
    number: '5',
    title: 'Payments and Fees',
    content: (
      <ul className="space-y-2 list-none">
        {[
          'Fees are specified in Project Agreements or on the Website (for subscription products like DI Seller plans).',
          'Payments are due as invoiced (e.g., upfront deposits, milestones, monthly subscriptions).',
          'Late payments incur interest at 1.5% per month or the maximum allowed by law.',
          'All fees exclude taxes; you are responsible for applicable taxes.',
          'Subscription renewals are automatic unless canceled per the terms.',
          'Refunds are generally non-refundable except as explicitly stated in a Project Agreement.',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3F3369' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'term-termination',
    number: '6',
    title: 'Term and Termination',
    content: (
      <>
        <ul className="space-y-2 list-none">
          {[
            'Website/Services Access: Ongoing until terminated by either party.',
            'Project Agreements: Term as specified; may include initial term + auto-renewal.',
            'We may suspend/terminate access for non-payment, breach, or illegal use.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#32A790' }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          <strong className="text-gray-700">Upon termination:</strong> Pay all outstanding fees; cease use;
          return/destroy confidential information.
        </p>
      </>
    ),
  },
  {
    id: 'warranties',
    number: '7',
    title: 'Warranties and Disclaimers',
    content: (
      <>
        <p>
          We warrant that Services will be provided with reasonable skill and care. For custom development, we
          warrant deliverables will substantially conform to agreed specifications for a limited warranty period
          (typically 30–90 days post-delivery, as per SOW).
        </p>
        <div
          className="mt-4 rounded-xl p-4 border text-sm"
          style={{ borderColor: 'rgba(63,51,105,0.15)', background: 'rgba(63,51,105,0.04)' }}
        >
          <p className="font-semibold mb-1 uppercase text-xs tracking-wider" style={{ color: '#3F3369' }}>Disclaimer</p>
          <p className="text-gray-600">
            EXCEPT AS EXPRESSLY PROVIDED, SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND (EXPRESS
            OR IMPLIED), INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. AI
            outputs are not guaranteed accurate or error-free due to their probabilistic nature.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 'liability',
    number: '8',
    title: 'Limitation of Liability',
    content: (
      <>
        <p>
          To the maximum extent permitted by law, Divenza&rsquo;s total liability shall not exceed the fees paid in
          the 12 months preceding the claim.
        </p>
        <p className="mt-3">
          We are not liable for indirect, consequential, incidental, special, or punitive damages (lost profits,
          data loss, business interruption), even if advised of the possibility.
        </p>
      </>
    ),
  },
  {
    id: 'indemnification',
    number: '9',
    title: 'Indemnification',
    content: (
      <ul className="space-y-2 list-none">
        {[
          'You agree to indemnify us against claims arising from your breach, Client Materials, or misuse of Services.',
          'We indemnify you against claims that Services infringe third-party IP (subject to prompt notice and cooperation).',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#3F3369' }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'confidentiality',
    number: '10',
    title: 'Confidentiality',
    content: (
      <p>
        Each party agrees to keep the other&rsquo;s confidential information secure and use it only for the purpose
        of these Terms/Project Agreements.
      </p>
    ),
  },
  {
    id: 'governing-law',
    number: '11',
    title: 'Governing Law and Dispute Resolution',
    content: (
      <>
        <p>
          These Terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka, without regard
          to conflict of laws principles.
        </p>
        <p className="mt-3">
          Any disputes shall be resolved exclusively in the courts of Colombo, Sri Lanka.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    number: '12',
    title: 'Changes to Terms',
    content: (
      <p>
        We may update these Terms. Changes will be posted here with an updated date. Continued use constitutes
        acceptance. Significant changes may be notified via email or Website notice.
      </p>
    ),
  },
  {
    id: 'miscellaneous',
    number: '13',
    title: 'Miscellaneous',
    content: (
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          { label: 'Entire Agreement', desc: 'These Terms + Project Agreements constitute the full agreement.' },
          { label: 'Severability', desc: 'Invalid provisions do not affect others.' },
          { label: 'Force Majeure', desc: 'Not liable for delays due to events beyond our control.' },
          { label: 'Assignment', desc: 'You may not assign without consent; we may assign to affiliates/successors.' },
          { label: 'No Waiver', desc: 'Failure to enforce does not waive rights.' },
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
    id: 'contact',
    number: '14',
    title: 'Contact Us',
    content: (
      <p>
        Questions about these Terms? Contact us at:{' '}
        <a href="mailto:contact@divenzainc.com" className="font-medium hover:underline" style={{ color: '#32A790' }}>
          contact@divenzainc.com
        </a>
        . Thank you for choosing Divenza. We look forward to partnering for your success!
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <MainLayout>
      <PolicyLayout
        title="Terms of Service"
        subtitle="The legal agreement governing your use of Divenza's website, products, and services."
        lastUpdated="March 17, 2026"
        icon={<FileText className="w-7 h-7 text-white" />}
        preamble={
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;you&rdquo;,
            &ldquo;your&rdquo;, or &ldquo;Client&rdquo;) and Divenza Pvt Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;Divenza&rdquo;), governing your
            access to and use of our website{' '}
            <a href="https://www.divenzainc.com" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={{ color: '#32A790' }}>
              www.divenzainc.com
            </a>
            , our products (including DI Seller, DI Tech Cloud, and DI POS Cloud), services, and any related
            offerings (collectively, the &ldquo;Services&rdquo;). By accessing or using the Website or Services, you agree
            to be bound by these Terms. If you do not agree, do not access or use the Website or Services.
          </p>
        }
        sections={sections}
      />
    </MainLayout>
  );
}
