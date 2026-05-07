import FullContainer from '../../common/FullContainer'
import Container from '../../common/container' // Note: Ensure this matches your file name (Container vs container)

const METHOD_PANEL_PATH_D =
  'M0.0613046 405.005C-1.02828 421.729 12.5501 435.73 29.2961 435.049C90.6052 432.558 226.499 427.377 296.307 427.377C367.775 427.377 518.363 432.807 581.801 435.222C597.733 435.829 610.956 423.081 610.956 407.137L610.957 142.39C610.957 127.576 599.442 115.313 584.657 114.381L540.223 111.579C513.483 109.894 492.401 88.1665 491.522 61.3882L490.399 27.1448C489.899 11.9167 477.34 -0.131165 462.105 0.0012207L28.0986 3.77213C11.8112 3.91364 -0.957717 17.7866 0.210932 34.0326C3.76569 83.4493 10.1423 181.761 8.82236 234.717C7.56978 284.972 2.85162 362.175 0.0613046 405.005Z'

const METHOD_PANEL_PATH_D_2 =
  'M0.0047304 28.5854C-0.291885 12.2338 13.3434 -0.786235 29.6698 0.167309C93.423 3.89082 242.033 12.0668 317.757 12.0668C394.336 12.0668 556.063 3.70516 623.223 0.0429144C639.525 -0.845993 653.17 12.1529 652.844 28.4752C651.098 116.036 646.185 369.276 646.185 447.511C646.185 527.349 651.301 834.983 652.948 931.925C653.22 947.978 640.089 960.874 624.044 960.303C550.353 957.679 360.633 951.078 317.757 951.078C275.312 951.078 99.9017 957.547 29.1935 960.222C13.0262 960.834 -0.199742 947.839 0.194146 931.665C2.34207 843.466 8.31086 580.899 6.71847 447.511C5.16658 317.516 1.41931 106.567 0.0047304 28.5854Z'



function ProteinMethodSection() {
  const steps = [
    {
      title: 'Understand',
      body: 'Deep consumer insight, taste preferences, and market gaps. We identify what people truly want - not what trends suggest.',
      output: 'Consumer insights and product direction',
    },
    {
      title: 'Formulate',
      body: 'Advanced protein formulation using high-quality ingredients, functional blends, and scientific precision.',
      output: 'Optimized protein formulas',
    },
    {
      title: 'Develop',
      body: 'Chef-led development focused on taste, texture, and real eating experience.',
      output: 'Market-ready product prototypes',
    },
    {
      title: 'Refine',
      body: 'Testing feedback loops and continuous improvement to perfect every detail.',
      output: 'Final refined product',
    },
    {
      title: 'Scale',
      body: 'From pilot to production - ensuring consistency, quality, and scalability.',
      output: 'Launch-ready product',
    },
  ]

  return (
    <section id="how-we-work" className="bg-[#f5f5f5]">
      <FullContainer>
        <Container className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
          {/* Left Column: Content */}
          <div className="rounded-3xl ">
            <span className="inline-flex rounded-full bg-[#e1e2e4] px-4 py-2 text-xs lg:text-[16px] font-light text-[#6e6e6f]">
              The Forever Protein Method
            </span>
            <h2 className="mt-4 font-bebas text-[45px] font-normal leading-[1.2] text-black uppercase md:text-[72px]">
              Consumer first.
              <span className="mt-2 block font-dirty-brush text-[45px] leading-[1.2] text-primary tracking-[-0.04em] md:text-[72px]">
                Always.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-sm lg:text-lg leading-relaxed font-light text-[#747474]">
              At Forever Protein, we start with one thing - what people actually want to eat. Not just nutrition on paper, but real taste, texture, and experience.
            </p>

            <div className="relative mt-10 overflow-hidden rounded-3xl p-5 lg:py-8 lg:px-16 lg:pb-20 text-black">
              <div className='absolute z-10 top-0 right-0 border-21 h-22 w-22 flex items-center justify-center rounded-full border-black bg-primary p-[0.3px]'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 18.667C24.9998 19.2191 24.5522 19.667 24 19.667C23.4478 19.667 23.0002 19.2191 23 18.667V10.4141L8.70702 24.707C8.31649 25.0976 7.68348 25.0976 7.29295 24.707C6.90243 24.3165 6.90243 23.6835 7.29295 23.293L21.5859 9H13.333C12.7809 8.99982 12.333 8.55218 12.333 8C12.333 7.44782 12.7809 7.00018 13.333 7H24C24.5523 7 25 7.44772 25 8V18.667Z" fill="black" />
                </svg>
              </div>
              <svg
                width="611"
                height="436"
                viewBox="0 0 611 436"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute hidden lg:block inset-0 h-full w-full"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d={METHOD_PANEL_PATH_D} fill="#F9B407" />
              </svg>
              <svg
                viewBox="0 0 382 348"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute lg:hidden inset-0 z-0 h-full w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M0.0055629 28.6301C-0.311506 12.5522 12.9005 -0.465208 28.9727 0.0677058C70.577 1.4472 145.824 3.74153 186.088 3.74153C226.881 3.74153 308.938 1.38652 353.302 0.0138185C369.585 -0.489985 382.851 12.9093 382.214 29.1871C380.641 69.414 378.088 138.369 378.088 162.294C378.088 187.146 380.843 272.727 382.392 318.919C382.938 335.188 369.621 348.516 353.353 347.905C304.076 346.052 209.291 342.604 186.316 342.604C163.651 342.604 76.4124 345.959 29.5704 347.829C13.2894 348.479 -0.118555 335.196 0.353861 318.909C1.55771 277.405 3.40992 203.165 2.62168 162.294C1.86774 123.202 0.702432 63.9669 0.0055629 28.6301Z"
                  fill="#F9B407"
                />
              </svg>

              <p className="relative z-10 mt-4 font-inter text-[16px] font-light leading-relaxed max-w-[calc(100%-100px)]">
                We are a next-generation protein innovation team combining food scientists, formulation experts, chefs, engineers, and technology specialists to build products that truly stand out.
              </p>
              <p className="relative z-10 mt-4 font-inter text-[16px] font-light leading-relaxed">
                Using advanced methods, clean ingredients, and deep consumer insight, we develop protein foods that do not just perform - they get chosen again and again.
              </p>
              <p className="relative z-10 mt-4 font-inter text-[16px] font-light leading-relaxed">
                Because in the end, the best protein product is not the one with the highest numbers - it is the one people crave.
              </p>
            </div>
          </div>

          {/* Right Column: Steps Loop */}
          <div className="rounded-3xl relative  p-5 md:p-8">

            <svg
              width="653"
              height="961"
              viewBox="0 0 653 961"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 z-0 h-full w-full"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d={METHOD_PANEL_PATH_D_2} fill="white" />
            </svg>
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`border-b z-10 relative border-slate-200 py-5 first:pt-0 last:border-b-0 last:pb-0 ${index === 0 ? 'lg:pt-20' : ''}`}
              >
                <h3 className="font-inter text-[32px] font-black leading-none text-slate-950 uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 font-inter text-[16px] font-light leading-relaxed text-slate-600">
                  {step.body}
                </p>
                <div className="mt-3 inline-block rounded-full bg-amber-400 w-fit px-3 py-1 text-xs lg:text-[16px] font-medium text-black">
                  <span className="uppercase font-semibold">Output:</span> {step.output}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </FullContainer>
    </section>
  )
}

export default ProteinMethodSection