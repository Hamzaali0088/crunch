import FullContainer from '../../common/FullContainer'
import Container from '../../common/container'

function IdeaToImpactSection() {
  const cards = [
    {
      title: 'Paragraph',
      body: 'Whether you are launching your first protein product or expanding an established brand, we bring precision, speed, and commitment to every stage.',
    },
    {
      title: 'Startups',
      body: 'Founders build something new, and we build the product behind it. From concept to launch, we help you move with clarity and confidence.',
    },
    {
      title: 'Growing brands',
      body: 'Scale without compromise. As demand increases, we help maintain taste, texture, and consistency so your product performs as you grow.',
    },
    {
      title: 'Established companies',
      body: 'From concept to shelf, we bring product ideas to life with full-stack support so every launch is built to win in the market.',
    },
  ]

  return (
    <section className="bg-[#2a2d2f]">
      <FullContainer>
        <Container className="grid items-center gap-10 md:grid-cols-[1fr_1.15fr]">
          <div>
            <span className="inline-flex font-inter rounded-full backdrop-blur-sm bg-white/10 border-t-[0.5px] border-l-[0.5px] border-white/70 py-2 px-4 text-xs lg:text-[16px] font-light capitalize  text-amber-300">
              Who We Work With
            </span>
            <h2 className="mt-4 font-bebas text-[45px] font-normal leading-[1.2] text-white uppercase md:text-[72px]">
              From idea to impact.
              <br />
              Built to <span className="font-dirty-brush text-[45px] leading-[1.2] text-primary tracking-[-0.04em] md:text-[72px]">scale.</span>
            </h2>
            <p className="mt-5 font-inter text-sm lg:text-[16px] font-light max-w-xl leading-relaxed text-white">
              Too many protein products focus on function and forget the
              experience. We combine advanced food science with chef-driven
              development to build products that deliver on taste, texture, and
              real consumer appeal.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className="relative isolate flex min-h-[220px] flex-col justify-start overflow-hidden rounded-[18px] p-5"
              >
                <svg
                  viewBox="0 0 382 348"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M0.0055629 28.6301C-0.311506 12.5522 12.9005 -0.465208 28.9727 0.0677058C70.577 1.4472 145.824 3.74153 186.088 3.74153C226.881 3.74153 308.938 1.38652 353.302 0.0138185C369.585 -0.489985 382.851 12.9093 382.214 29.1871C380.641 69.414 378.088 138.369 378.088 162.294C378.088 187.146 380.843 272.727 382.392 318.919C382.938 335.188 369.621 348.516 353.353 347.905C304.076 346.052 209.291 342.604 186.316 342.604C163.651 342.604 76.4124 345.959 29.5704 347.829C13.2894 348.479 -0.118555 335.196 0.353861 318.909C1.55771 277.405 3.40992 203.165 2.62168 162.294C1.86774 123.202 0.702432 63.9669 0.0055629 28.6301Z"
                    fill="#ffffff"
                  />
                </svg>

                <h3 className="relative z-10 font-bebas text-[32px] leading-[0.9] font-normal text-black uppercase md:text-[34px]">
                  {card.title}
                </h3>
                <p className="relative z-10 mt-3 font-inter text-[16px] leading-relaxed font-light text-black">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </FullContainer>
    </section>
  )
}

export default IdeaToImpactSection
