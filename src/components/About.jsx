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
          I focus on full-stack development and AI/ML, building impact-driven, human-facing products across industries like healthcare, engineering, and finance. I love taking on new problems, learning new technologies, and exploring different areas of computer science.I also enjoy systems and low-level engineering, where I’ve built a shell, memory allocator, and HTTP server from scratch in C. If any of that sounds interesting, feel free to keep exploring my space! 💖
        </p>
      </div>
    </section>
  )
}

export default About
