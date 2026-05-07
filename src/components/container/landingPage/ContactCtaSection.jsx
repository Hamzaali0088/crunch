import { useState } from 'react'
import FullContainer from '../../common/FullContainer'
import Container from '../../common/container'

const iconClassName = 'h-4 w-4 text-amber-400'

function AddressIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={iconClassName} aria-hidden>
      <path
        d="M12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19 10.4c0 5.3-7 11.1-7 11.1S5 15.7 5 10.4a7 7 0 1 1 14 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_119_760)">
        <path d="M3.14 2.25977H5.78L7.1 5.33977L5.34 6.65977C6.132 8.41977 7.1 9.38777 8.86 10.1798L10.18 8.41977L13.26 9.73977V12.8198C6.66 12.8198 0.5 6.65977 0.5 3.13977L3.14 2.25977Z" stroke="#F9B407" stroke-width="1.144" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_119_760">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>

  )
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2H3C1.89543 2 1 2.89543 1 4V10C1 11.1046 1.89543 12 3 12H11C12.1046 12 13 11.1046 13 10V4C13 2.89543 12.1046 2 11 2Z" stroke="#F9B407" stroke-width="1.4" />
      <path d="M1 5L7 9L13 5" stroke="#F9B407" stroke-width="1.4" />
    </svg>

  )
}

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="7" fill="#EEF4FF" />
      <g clip-path="url(#clip0_119_774)">
        <path d="M14 19.5C17.0376 19.5 19.5 17.0376 19.5 14C19.5 10.9624 17.0376 8.5 14 8.5C10.9624 8.5 8.5 10.9624 8.5 14C8.5 17.0376 10.9624 19.5 14 19.5Z" stroke="#F9B407" stroke-width="1.4" />
        <path d="M14 11V14L16 16" stroke="#F9B407" stroke-width="1.4" stroke-linecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_119_774">
          <rect width="14" height="14" fill="white" transform="translate(7 7)" />
        </clipPath>
      </defs>
    </svg>

  )
}

function ContactCtaSection() {
  const [countryCode, setCountryCode] = useState('+1')

  const countryCodeOptions = [
    { code: '+1', label: 'US/CA' },
    { code: '+44', label: 'UK' },
    { code: '+61', label: 'AU' },
    { code: '+91', label: 'IN' },
    { code: '+971', label: 'UAE' },
  ]

  const infoCards = [
    {
      title: 'Address',
      value: '470 S Pecos Rd, Suite 103\nLas Vegas, NV 89121',
      Icon: EmailIcon,
    },
    {
      title: 'Phone',
      value: '702-983-9300',
      Icon: PhoneIcon,
    },
    {
      title: 'Email',
      value: 'info@foreverprotein.com',
      Icon: EmailIcon,
    },
    {
      title: 'Office Hours',
      value: 'Monday - Friday (9 AM - 05 PM)',
      Icon: ClockIcon,
    },
  ]

  return (
    <section id="contact-cta" className="bg-[#101010]">
      <FullContainer>
        <Container className="grid gap-8 md:grid-cols-[0.95fr_1.25fr]">
          <div className="">
            <span className="inline-flex items-center gap-2 rounded-full w-full max-w-md bg-white px-4 py-1 text-xs font-medium uppercase tracking-widest text-black">
              <div className=''>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_119_705)">
                    <path d="M9 1H3C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H9C10.1046 11 11 10.1046 11 9V3C11 1.89543 10.1046 1 9 1Z" stroke="#CF9607" stroke-width="1.5" />
                    <path d="M1 4H11" stroke="#CF9607" stroke-width="1.3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_119_705">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </div> 
                <p className="font-inter text-[9px] lg:text-[11px] font-medium leading-relaxed text-black whitespace-pre-line">
                Contact Us</p>
            </span>

            <h2 className="mt-4 font-bebas text-[64px] font-normal leading-[1.2] text-white uppercase md:text-[72px]">
              Get in touch
              <br />
              with us
            </h2>

            <p className="mt-4 max-w-sm text-base leading-relaxed text-slate-300">
              Fill out the form below and our team will get back to you within 1-2
              business days.
            </p>

            <div className="grid gap-3 grid-cols-2 max-w-md mt-7">
              {infoCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-xl border border-white bg-[#101010] p-4"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white">
                    <card.Icon />
                  </span>
                  <p className="mt-1 font-inter text-[9px] lg:text-[11px] font-light leading-relaxed text-white whitespace-pre-line">
                    {card.value}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border-t-[8px] border-x border-amber-400 bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-7">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-900">
                  First Name
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-amber-400 focus:ring-1"
                    placeholder="Enter first name"
                  />
                </label>
                <label className="text-sm font-semibold text-slate-900">
                  Last Name
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-amber-400 focus:ring-1"
                    placeholder="Enter last name"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-900">
                  Work Email
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-amber-400 focus:ring-1"
                    placeholder="Enter work email"
                  />
                </label>
                <label className="text-sm font-semibold text-slate-900">
                  Phone Number
                  <div className="mt-1 flex w-full overflow-hidden rounded-lg border border-slate-200 ring-amber-400 focus-within:ring-1">
                    <select
                      value={countryCode}
                      onChange={(event) => setCountryCode(event.target.value)}
                      className="w-[95px] border-r border-slate-200 bg-slate-50 px-2 py-2 text-sm font-medium text-slate-900 outline-none"
                      aria-label="Country code"
                    >
                      {countryCodeOptions.map((option) => (
                        <option key={option.code} value={option.code}>
                          {option.code} {option.label}
                        </option>
                      ))}
                    </select>
                    <input
                      className="w-full px-3 py-2 text-sm text-slate-900 outline-none"
                      placeholder="Enter phone number"
                      type="tel"
                    />
                  </div>
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-900">
                  Job Title
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-amber-400 focus:ring-1"
                    placeholder="Enter job title"
                  />
                </label>
                <label className="text-sm font-semibold text-slate-900">
                  Company Name
                  <input
                    className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-amber-400 focus:ring-1"
                    placeholder="Enter company name"
                  />
                </label>
              </div>

              <label className="block text-sm font-semibold text-slate-900">
                Message
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none ring-amber-400 focus:ring-1"
                  placeholder="Enter message"
                />
              </label>

              <button
                type="button"
                className="w-full rounded-lg bg-amber-400 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-amber-300"
              >
                Submit
              </button>
            </form>
          </div>
        </Container>
      </FullContainer>
    </section>
  )
}

export default ContactCtaSection
