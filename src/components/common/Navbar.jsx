import { useEffect, useState } from 'react'
import Container from './Container'

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navLinks = [
    { href: '#why-us', label: 'Why Us' },
    { href: '#how-we-work', label: 'How We Work' },
    { href: '#recipes', label: 'Recipes' },
    { href: '#who-we-are', label: 'Who We Are' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <div className={`fixed top-5 left-0 z-50 w-full transition-all duration-300 px-4 ${hasScrolled ? '' : 'pt-5! lg:top-18!'}`}>
        <Container>
          <div
            className={`navbar rounded-[40px] bg-white/10 p-[5px] sm:p-[10px] transition-colors duration-300 lg:p-[16px] xl:p-[18px] xl:px-[20px] ${hasScrolled ? 'scrolled' : ''
              }`}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-1 sm:py-2">
              <img src="/st-images/logo.png" alt="Brand logo" className="h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] xl:h-[74px] w-auto" />
              <div className="font-inter hidden items-center gap-6 text-[15px] font-light uppercase text-slate-200 md:flex">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="hover:text-primary">
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="#contact-cta"
                className="font-inter hidden bg-primary hover-bg-primary-dark rounded-full px-4 lg:px-6 py-2 text-xs lg:text-[16px] font-medium uppercase text-black md:inline-flex"
              >
                Work With Us
              </a>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/40 text-white md:hidden"
                aria-label="Open menu"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div
        className={`fixed inset-0 z-70 bg-black/55 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-80 flex h-full w-[82%] max-w-[320px] flex-col justify-between overflow-y-auto bg-[#242424] px-6 py-8 text-white transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className=''>

          <div className="mb-8 flex items-center justify-between">
            <img src="/st-images/logo.png" alt="Brand logo" className="h-12 w-auto" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="font-inter space-y-4 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block hover:border-primary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact-cta"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-inter mt-7 w-fit inline-flex text-center flex-col items-center justify-center rounded-full bg-primary px-6 py-2 text-xs lg:text-[16px] font-medium uppercase text-black"
          >
            Work With Us
          </a>
        </div>


        <div className="mt-10 border-t border-white/15 pt-8">
          <h3 className="text-base font-semibold text-white">Office Location</h3>
          <p className="mt-3 font-inter text-[14px] font-light text-[#cdd4dd]">
            4760 S. Pecos Road, Suite 10391
            <br />
            Las Vegas, NV 89121
          </p>

          <p className="mt-6 font-inter text-[14px] font-light text-[#cdd4dd]">
            info@foreverprotein.com
            <br />
            702-983-9300
          </p>

          <h3 className="mt-6 text-base font-semibold text-white">Office Location</h3>
          <div className="mt-3 flex items-center border-b border-white/15 py-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent font-inter text-[14px] font-light text-white outline-none placeholder:text-[#cdd4dd]"
            />
            <button type="button" className="ml-2 text-[#cdd4dd] hover:text-amber-300" aria-label="Send email">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.750122 3.75L5.94396 7.21256C6.24361 7.41232 6.39343 7.5122 6.55552 7.58296C6.69939 7.64577 6.85015 7.69142 7.0047 7.71896C7.17881 7.75 7.35888 7.75 7.719 7.75H13.7812C14.1414 7.75 14.3214 7.75 14.4955 7.71896C14.6501 7.69142 14.8009 7.64577 14.9447 7.58296C15.1068 7.51221 15.2566 7.41232 15.5563 7.21256L20.7501 3.75M5.55012 16.75H15.9501C17.6303 16.75 18.4704 16.75 19.1121 16.423C19.6766 16.1354 20.1355 15.6765 20.4231 15.112C20.7501 14.4702 20.7501 13.6302 20.7501 11.95V5.55C20.7501 3.86984 20.7501 3.02976 20.4231 2.38803C20.1355 1.82354 19.6766 1.3646 19.1121 1.07698C18.4704 0.75 17.6303 0.75 15.9501 0.75H5.55012C3.86996 0.75 3.02989 0.75 2.38815 1.07698C1.82366 1.3646 1.36472 1.82354 1.0771 2.38803C0.750122 3.02976 0.750122 3.86984 0.750122 5.55V11.95C0.750122 13.6302 0.750122 14.4702 1.0771 15.112C1.36472 15.6765 1.82366 16.1354 2.38815 16.423C3.02989 16.75 3.86996 16.75 5.55012 16.75Z" stroke="#F9B407" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
