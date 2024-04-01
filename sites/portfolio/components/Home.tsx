export const Home = () => {
  return (
    <section id="home" className="grid">
      <div className="home-container">
        <div className="home-intro">
          <p>
            Hoi, mijn naam is{' '}
            <span className="home-intro-name">Maarten Hogeveen</span>.
            <br />
            Front-end web developer / designer
          </p>
        </div>
        <div className="home-button">
          <a href="#portfolio" className="button" role="button">
            Bekijk mijn werk
          </a>
        </div>
      </div>
    </section>
  )
}
