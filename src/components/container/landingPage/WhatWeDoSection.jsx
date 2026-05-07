import FullContainer from '../../common/FullContainer'
import Container from '../../common/container'

function WhatWeDoSection() {
  const items = [
    {
      title: 'Concept and product design',
      body: 'We start with a clear vision: products people actually want. Every concept is built around real consumer behavior, not trend-chasing claims.',
    },
    {
      title: 'Precision formulation',
      body: 'Our team develops high-performance protein formulas using advanced science and clean ingredients for taste and functionality.',
    },
    {
      title: 'Taste and experience',
      body: 'This is where most brands fail and we do not. Through chef-led development, we engineer texture, flavor, and mouthfeel people enjoy.',
    },
    {
      title: 'Testing and optimization',
      body: 'We refine every detail through real feedback and iterative testing, improving consistency, stability, and performance before launch.',
    },
    {
      title: 'Production and scale',
      body: 'From pilot batches to full production, we ensure your product scales without losing quality, taste, or integrity.',
    },
  ]

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-linear-to-r from-black via-[#16130b] to-[#2c240f]" />
        <div className="absolute -right-20 top-0 h-[420px] w-[420px] rounded-full bg-amber-300/30 blur-[110px]" />
      </div>

      <FullContainer className="relative">
        <Container className="max-w-7xl">
          <div className="text-center">
            <span className="inline-flex font-inter rounded-full backdrop-blur-sm bg-white/10 border-t-[0.5px] border-l-[0.5px] border-white/70 py-2 px-4 text-xs lg:text-[16px] font-light capitalize  text-amber-300">
              What We Do
            </span>
            <h2 className="mt-4 font-bebas text-[45px] font-normal leading-[1.2] text-white uppercase md:text-[72px]">
              Full control from idea to{' '}
              <span className="font-dirty-brush text-[45px] leading-[1.2] text-primary tracking-[-0.04em] md:text-[72px]">shelf.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {items.map((item) => (
              <article
                key={item.title}
                className="rounded-[22px] border border-black/80 bg-white p-1 shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
              >
                <div className="h-full rounded-[18px] border border-black/15 p-5">
                  <h3 className="font-bebas text-[32px] font-normal leading-[0.9] text-black uppercase md:text-[34px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-inter text-[16px] font-light leading-relaxed text-black">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </FullContainer>
    </section>
  )
}

export default WhatWeDoSection
