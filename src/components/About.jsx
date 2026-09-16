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
          I focus my work on full-stack development and AI/ML, where I enjoy building impact-driven, human-facing products and applying my skills to problems across industries like healthcare, engineering, and finance. I’m always excited to take on new challenges, explore unfamiliar areas of computer science, and pick up new technologies along the way.

I also like to dabble in systems and low-level engineering, particularly through my coursework. I’ve tackled complex recursion problems in C and built projects like a shell, memory allocator, and HTTP server from scratch. I enjoy understanding how things work under the hood just as much as building polished experiences on top of them.

If any of that sounds interesting, feel free to keep exploring my space! 💖
        </p>
      </div>
    </section>
  )
}

export default About
