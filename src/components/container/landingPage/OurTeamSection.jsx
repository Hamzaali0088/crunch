import FullContainer from '../../common/FullContainer'
import Container from '../../common/Container'

function OurTeamSection() {
  const members = [
    {
      name: 'Ariel Cohen',
      role: 'Co Founder CEO',
      headline: 'Former CEO of HackerU Global Education (Today ThriveDX)',
      bio: 'Former CEO at HackerU global education (today ThriveDX), years of experience in international sales and business development. Successfully led several companies from early stage to exits.',
      image: '/st-images/member1.png',
    },
    {
      name: 'Guy Geva',
      role: 'VP of Operations',
      headline: 'Owner and Former CEO of TeamX',
      bio: 'Owner and former CEO of TeamX, a marketing and creative platform. Background in business development, startup operations, and scaling execution across multidisciplinary teams.',
      image: '/st-images/member2.png',
    },
    {
      name: 'Ben Idel',
      role: 'COO and Partnerships',
      headline: 'Global Business Development Consultant',
      bio: 'A strategic leader with years of experience in global expansion and scaling operations from early stage to growth. Focused on building sustainable systems for long-term success.',
      image: '/st-images/member3.png',
    },
  ]

  return (
    <section id="who-we-are" className="bg-black">
      <FullContainer>
        <Container>
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-start">
          <div>
            <span className="inline-flex font-inter rounded-full backdrop-blur-sm bg-white/10 border-t-[0.5px] border-l-[0.5px] border-white/70 py-2 px-4 text-xs lg:text-[16px] font-light capitalize  text-amber-300">
              Our Team
            </span>
              <h2 className="mt-4 font-bebas text-[45px] font-normal leading-[1.2] text-white uppercase md:text-[72px]">
              Built by experts.
              <br />
              Designed to be <span className="font-dirty-brush text-[45px] leading-[1.2] text-primary tracking-[-0.04em] md:text-[72px]">craved.</span>
            </h2>
          </div>
          <p className="max-w-md pt-2 font-inter text-[16px] font-light leading-relaxed text-white md:justify-self-end">
            A team of scientists, chefs, and innovators creating protein
            products that deliver both performance and taste.
          </p>
        </div>

        <div className="mt-10 space-y-8 lg:space-y-16">
          {members.map((member) => (
            <article
              key={member.name}
              className="grid gap-5 lg:gap-10 md:grid-cols-[1.1fr_1fr_1fr] md:items-center"
            >
              <div className="relative overflow-hidden rounded-3xl h-[402px] w-auto lg:min-w-[574px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div>
                <h3 className="font-inter text-[32px] font-normal leading-[0.9] text-primary uppercase md:text-[46px]">
                  {member.name}
                </h3>
                <p className="mt-1 font-inter text-[30px] font-light leading-relaxed text-white md:text-[34px]">{member.role}</p>
                <p className="mt-3 font-bebas text-[24px] font-light leading-[1.2] text-white md:text-[46px]">
                  {member.headline}
                </p>
              </div>

              <p className="font-inter text-[16px] font-light leading-relaxed text-white">{member.bio}</p>
            </article>
          ))}
        </div>
        </Container>
      </FullContainer>
    </section>
  )
}

export default OurTeamSection
