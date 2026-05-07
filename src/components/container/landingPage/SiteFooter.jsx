import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#242424]">
      <FullContainer>
        <Container className="grid gap-10 md:grid-cols-2 lg:gap-20">
          <div>
            <img src="/st-images/logo.png" alt="Forever Protein logo" className="h-16 lg:h-[86px] w-auto" />
            <div className="mt-5  max-w-[600px] font-inter text-[14px] lg:text-[16px] font-light leading-relaxed text-[#cdd4dd] grid gap-5 md:gap-10 md:grid-cols-2">
              <p>
                Forever Protein
                <br />
                Building the next generation of protein products where science
                meets taste and performance.
              </p>
              <p>
                From concept to commercialization, we create products that
                deliver nutrition and real consumer experience.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-10'>

            <div>
              <h3 className="text-base font-semibold text-white">Menu</h3>
              <nav className="mt-3 space-y-2 font-inter text-[14px] lg:text-[16px] font-light leading-relaxed text-[#cdd4dd]">
                <a className="block hover:text-amber-300" href="#why-us">
                  Why Us
                </a>
                <a className="block hover:text-amber-300" href="#how-we-work">
                  How We Work
                </a>
                <a className="block hover:text-amber-300" href="#who-we-are">
                  Who We Are
                </a>
                <a className="block hover:text-amber-300" href="#recipes">
                  The Recipes
                </a>
              </nav>

              <h3 className="mt-6 text-base font-semibold text-white">Social Media</h3>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex h-14 w-14  items-center justify-center border border-white/20 text-xs font-black text-amber-400"
                  aria-label="Facebook"
                >
                  <div className='h-8 w-8 flex items-center justify-center bg-black'>
                    <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.83333 9.58333H7.91667L8.75 6.25H5.83333V4.58333C5.83333 3.725 5.83333 2.91667 7.5 2.91667H8.75V0.116667C8.47833 0.0808334 7.4525 0 6.36917 0C4.10667 0 2.5 1.38083 2.5 3.91667V6.25H0V9.58333H2.5V16.6667H5.83333V9.58333Z" fill="#F9B407" />
                    </svg>
                  </div>


                </a>
                <a
                  href="#"
                  className="inline-flex h-14 w-14 items-center justify-center border border-white/20 text-xs font-black text-amber-400"
                  aria-label="Instagram"
                >
                  <div className='h-8 w-8 flex items-center justify-center bg-black'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.7833 2.88333C12.5856 2.88333 12.3922 2.94198 12.2278 3.05186C12.0633 3.16175 11.9351 3.31792 11.8595 3.50065C11.7838 3.68338 11.764 3.88444 11.8025 4.07842C11.8411 4.2724 11.9364 4.45059 12.0762 4.59044C12.2161 4.73029 12.3943 4.82553 12.5882 4.86412C12.7822 4.9027 12.9833 4.8829 13.166 4.80721C13.3487 4.73152 13.5049 4.60335 13.6148 4.4389C13.7247 4.27445 13.7833 4.08111 13.7833 3.88333C13.7833 3.61812 13.678 3.36376 13.4904 3.17623C13.3029 2.98869 13.0485 2.88333 12.7833 2.88333ZM16.6167 4.9C16.6003 4.2086 16.4708 3.52454 16.2333 2.875C16.0224 2.31879 15.6925 1.81538 15.2667 1.4C14.854 0.972855 14.3496 0.645147 13.7917 0.441667C13.1439 0.196801 12.459 0.0643417 11.7667 0.05C10.8833 -4.65661e-08 10.6 0 8.33333 0C6.06667 0 5.78333 -4.65661e-08 4.9 0.05C4.20763 0.0643417 3.52279 0.196801 2.875 0.441667C2.31832 0.647711 1.81447 0.975069 1.4 1.4C0.972855 1.81265 0.645147 2.31703 0.441667 2.875C0.196801 3.52279 0.0643417 4.20763 0.05 4.9C-4.65661e-08 5.78333 0 6.06667 0 8.33333C0 10.6 -4.65661e-08 10.8833 0.05 11.7667C0.0643417 12.459 0.196801 13.1439 0.441667 13.7917C0.645147 14.3496 0.972855 14.854 1.4 15.2667C1.81447 15.6916 2.31832 16.019 2.875 16.225C3.52279 16.4699 4.20763 16.6023 4.9 16.6167C5.78333 16.6667 6.06667 16.6667 8.33333 16.6667C10.6 16.6667 10.8833 16.6667 11.7667 16.6167C12.459 16.6023 13.1439 16.4699 13.7917 16.225C14.3496 16.0215 14.854 15.6938 15.2667 15.2667C15.6935 14.8521 16.0236 14.3485 16.2333 13.7917C16.4708 13.1421 16.6003 12.4581 16.6167 11.7667C16.6167 10.8833 16.6667 10.6 16.6667 8.33333C16.6667 6.06667 16.6667 5.78333 16.6167 4.9ZM15.1167 11.6667C15.1108 12.1957 15.0149 12.7198 14.8333 13.2167C14.7003 13.5793 14.4866 13.907 14.2083 14.175C13.9379 14.4502 13.6109 14.6635 13.25 14.8C12.7531 14.9816 12.229 15.0774 11.7 15.0833C10.8667 15.125 10.5583 15.1333 8.36667 15.1333C6.175 15.1333 5.86667 15.1333 5.03333 15.0833C4.48404 15.0941 3.93704 15.0095 3.41667 14.8333C3.07182 14.6894 2.75992 14.4768 2.5 14.2083C2.22341 13.9406 2.01237 13.6127 1.88333 13.25C1.6792 12.7462 1.56633 12.21 1.55 11.6667C1.55 10.8333 1.5 10.525 1.5 8.33333C1.5 6.14167 1.5 5.83333 1.55 5C1.55304 4.45915 1.65178 3.9231 1.84167 3.41667C1.98837 3.06493 2.21355 2.75138 2.5 2.5C2.75244 2.21266 3.06553 1.98496 3.41667 1.83333C3.9245 1.64957 4.45995 1.55375 5 1.55C5.83333 1.55 6.14167 1.5 8.33333 1.5C10.525 1.5 10.8333 1.5 11.6667 1.55C12.1957 1.55591 12.7198 1.65172 13.2167 1.83333C13.5954 1.97388 13.9352 2.20237 14.2083 2.5C14.4806 2.75669 14.6938 3.06945 14.8333 3.41667C15.0187 3.92407 15.1146 4.4598 15.1167 5C15.1583 5.83333 15.1667 6.14167 15.1667 8.33333C15.1667 10.525 15.1583 10.8333 15.1167 11.6667ZM8.33333 4.05833C7.48817 4.05998 6.66247 4.3121 5.96055 4.78285C5.25862 5.25359 4.71198 5.92183 4.38969 6.70313C4.06741 7.48443 3.98394 8.34372 4.14983 9.17244C4.31572 10.0012 4.72353 10.7621 5.32173 11.3591C5.91993 11.9562 6.68168 12.3625 7.51072 12.5268C8.33976 12.6911 9.19889 12.6059 9.97956 12.2821C10.7602 11.9583 11.4274 11.4104 11.8968 10.7075C12.3661 10.0047 12.6167 9.17849 12.6167 8.33333C12.6178 7.77092 12.5077 7.21384 12.2927 6.69413C12.0777 6.17442 11.7621 5.70234 11.3641 5.30504C10.966 4.90774 10.4933 4.59306 9.97316 4.37911C9.45304 4.16515 8.89574 4.05614 8.33333 4.05833ZM8.33333 11.1083C7.78449 11.1083 7.24797 10.9456 6.79163 10.6407C6.33528 10.3357 5.9796 9.90234 5.76957 9.39528C5.55953 8.88822 5.50458 8.33025 5.61165 7.79196C5.71873 7.25366 5.98302 6.7592 6.37111 6.37111C6.7592 5.98302 7.25366 5.71873 7.79196 5.61165C8.33025 5.50458 8.88822 5.55953 9.39528 5.76957C9.90234 5.9796 10.3357 6.33528 10.6407 6.79163C10.9456 7.24797 11.1083 7.78449 11.1083 8.33333C11.1083 8.69775 11.0366 9.0586 10.8971 9.39528C10.7576 9.73196 10.5532 10.0379 10.2956 10.2956C10.0379 10.5532 9.73196 10.7576 9.39528 10.8971C9.0586 11.0366 8.69775 11.1083 8.33333 11.1083Z" fill="#F9B407" />
                    </svg>
                  </div>


                </a>
              </div>
            </div>

            <div className=''>
              <h3 className="text-base font-semibold text-white">Office Location</h3>
              <p className="mt-3 font-inter text-[14px] lg:text-[16px] font-light  text-[#cdd4dd]">
                4760 S. Pecos Road, Suite 10391
                <br />
                Las Vegas, NV 89121
              </p>

              <p className="mt-6 font-inter text-[14px] lg:text-[16px] font-light  text-[#cdd4dd]">
                info@foreverprotein.com
                <br />
                702-983-9300
              </p>

              <h3 className="mt-6 text-base font-semibold text-white">Office Location</h3>
              <div className="mt-3 flex items-center border-b border-white/15 py-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent font-inter text-[14px] lg:text-[16px] font-light  text-white outline-none placeholder:text-[#cdd4dd]"
                />
                <button
                  type="button"
                  className="ml-2 font-inter text-[14px] lg:text-[16px] font-light text-[#cdd4dd] cursor-pointer hover:text-amber-300"
                >
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.750122 3.75L5.94396 7.21256C6.24361 7.41232 6.39343 7.5122 6.55552 7.58296C6.69939 7.64577 6.85015 7.69142 7.0047 7.71896C7.17881 7.75 7.35888 7.75 7.719 7.75H13.7812C14.1414 7.75 14.3214 7.75 14.4955 7.71896C14.6501 7.69142 14.8009 7.64577 14.9447 7.58296C15.1068 7.51221 15.2566 7.41232 15.5563 7.21256L20.7501 3.75M5.55012 16.75H15.9501C17.6303 16.75 18.4704 16.75 19.1121 16.423C19.6766 16.1354 20.1355 15.6765 20.4231 15.112C20.7501 14.4702 20.7501 13.6302 20.7501 11.95V5.55C20.7501 3.86984 20.7501 3.02976 20.4231 2.38803C20.1355 1.82354 19.6766 1.3646 19.1121 1.07698C18.4704 0.75 17.6303 0.75 15.9501 0.75H5.55012C3.86996 0.75 3.02989 0.75 2.38815 1.07698C1.82366 1.3646 1.36472 1.82354 1.0771 2.38803C0.750122 3.02976 0.750122 3.86984 0.750122 5.55V11.95C0.750122 13.6302 0.750122 14.4702 1.0771 15.112C1.36472 15.6765 1.82366 16.1354 2.38815 16.423C3.02989 16.75 3.86996 16.75 5.55012 16.75Z" stroke="#F9B407" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </button>
              </div>
            </div>
          </div>

        </Container>

        <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-5 text-center font-inter text-[14px] lg:text-[16px] font-light leading-relaxed text-white">
          ©Forever Protein. All rights reserved.
        </p>
      </FullContainer>
    </footer>
  )
}

export default SiteFooter
