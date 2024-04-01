import Image from "next/image";

export default function HomePage() {
  return <main>

      <section id='home' className='grid'>
         <div className='home-container'>
            <div className='home-intro'>
               <p>
                  Hoi, mijn naam is <span className='home-intro-name'>Maarten Hogeveen</span>.
                  <br />
                  Front-end web developer / designer
               </p>
            </div>
            <div className='home-button'>
               <a href='#portfolio' className='button'>
                  Bekijk mijn werk
               </a>
            </div>
         </div>
      </section>

      <section id='over' className='grid'>
         <div className='over-image'>
            <Image src='/profile.webp' width={300} height={300} alt='Profile picture' loading='lazy' />
         </div>
         <div className='over-tekst'>
            Sinds mijn jeugd heb ik al een affiniteit gehad met <strong>technologie</strong>. Mijn
            moeder, die zelf ook een web developer en designer was, heeft mij van jongs af aan
            blootgesteld aan de online wereld en het werk wat er achter het web schuilt.
            <br />
            <br />
            Mijn interesses hebben ook altijd mijn affiniteit met technologie gereflecteerd. Of het
            nou het repareren van computers, gamen, video bewerking of streamen was om maar een paar
            dingen te noemen. Naast deze technische interesses heb ik ook altijd veel voldoening
            gehaald uit het helpen en gelukkig maken van anderen. Het maken van websites is een
            prachtig manier om deze twee aspecten van mij te combineren.
            <br />
            <br />
            Hieronder vindt u een representatie van aantal van mijn vaardigheden op het gebied van
            <strong> web development/design</strong> met daar onder mijn portfolio.
         </div>
      </section>
  </main>
}
