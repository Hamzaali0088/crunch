import FullContainer from '../../common/FullContainer'
import Container from '../../common/container'

function WhyUsSection() {
  const cards = [
    {
      title: 'The protein market is overcrowded.',
      subtitle: 'The market needs better products.',
      body: 'The protein industry isn’t short on options — it’s full of products that prioritize numbers over experience. Chalky textures, artificial taste, and forgettable formulas dominate the shelf. We believe protein should be something people want to eat, not something they force down.',
    },
    {
      title: "Brands don't need more formulas.",
      subtitle: 'Brands need better execution.',
      body: 'The ingredients already exist. The science is proven. What’s missing is the ability to turn those into products people actually enjoy. We combine food science with real culinary thinking to create protein products that perform — and taste incredible.',
    },
    {
      title: "Consumers don't compromise.",
      subtitle: 'There are no trade-offs.',
      body: 'Taste, nutrition, texture, and clean ingredients — today’s consumer expects all of it. Not one over the other. We build protein products that deliver on every front, creating experiences that drive repeat consumption, not just first-time trials.',
    },
  ]

  return (
    <section id="why-us" className="relative overflow-hidden bg-[#040404]">
      <FullContainer className="relative">
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <img
                src="/st-images/whyUs.png"
                alt="Protein bar and chips visual"
                className="w-full max-w-xl rounded-2xl object-cover shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
              />
            </div>
            <div>
              <span className="inline-flex rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                Why Us
              </span>
              <h2 className="mt-4 font-bebas text-[45px] font-normal leading-[1.2] text-white uppercase md:text-[72px]">
                Real protein innovation only matters when people
                <span className="block font-dirty-brush text-[45px] leading-[1.2] text-primary tracking-[-0.04em] md:text-[72px] w-fit">crave it.</span>
              </h2>
              <p className="mt-5 font-inter text-sm lg:text-[16px] font-semibold max-w-2xl leading-relaxed text-slate-300">
                Too many protein products focus on function and forget the experience. The result is a market full of ideas that look good on paper but fall short where it counts taste, texture, and real consumer appeal.
                <br />
                We take a different approach. By combining advanced food science with chef-driven development, we create protein products that deliver both performance and flavor. Every detail from ingredients to mouthfeel is engineered to meet the highest standard.
                <br />
                From idea to market, we build protein foods that people don’t just try they come back for.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:gap-16 md:grid-cols-3 max-w-6xl mx-auto">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[28px] border border-white/20 bg-linear-to-b from-white to-white/10 p-1 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
              >
                <div className="h-full rounded-[24px] bg-linear-to-b from-white to-[#1a1a1a] from-20% to-75% px-3 py-10 border-2 border-black">
                  <h3 className="font-bebas text-[32px] font-normal leading-[0.9] text-black uppercase md:text-[58px]">
                    {card.title}
                  </h3>
                  <p className="font-inter text-[16px] font-light max-w-2xl mt-2 leading-tight text-white md:text-[24px]">
                    {card.subtitle}
                  </p>
                  <p className="font-inter text-[14px] font-light max-w-2xl mt-4 leading-tight text-white md:text-[16px]">
                    {card.body}
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

export default WhyUsSection


