import me from '../assets/me.jpeg'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-photo">
        <div className="polaroid">
          <img src={me} alt="me" className="polaroid-img polaroid-img--sm" />
          <p className="polaroid-caption">that's me! ♡</p>
        </div>
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
        </p>
      </div>
    </section>
  )
}

export default About
