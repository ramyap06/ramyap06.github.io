const timelineItems = [
  {
    type: 'milestone',
    date: 'August 2024',
    title: 'Admitted to Purdue University',
    subtitle: 'Computer Science',
    desc: [
      'leap of faith into CS',
      'zero prior coding experience',
      'no AP CS, no bootcamp',
      'everything below is self-taught',
    ],
  },
  {
    type: 'milestone',
    date: 'August 2024',
    title: 'Java Prep',
    subtitle: 'Getting ready for CS 180',
    desc: [
      'learned Java syntax and OOP',
      'daily practice problems all summer',
      'started CS 180 on footing',
    ],
    skills: ['Java', 'Object-Oriented Programming'],
    link: 'https://github.com/ramyap06/Java-Practice',
  },
  {
    type: 'project',
    date: 'November 2024',
    title: 'Swap It',
    subtitle: 'CS 180 group project',
    desc: [
      'social media app with newsfeed',
      'upvote and downvote system built',
      'multithreaded TCP server handling concurrency',
      'persisted accounts across user sessions',
      'running code versus holding code',
    ],
    skills: ['Java', 'TCP/IP sockets', 'multithreading', 'Java Swing', 'JavaFX'],
    link: 'https://github.com/ramyap06/Swap-It',
  },
  {
    type: 'project',
    date: 'December 2024',
    title: 'DNA Sequence Analyzer',
    subtitle: 'First personal project',
    desc: [
      'reverse complements and GC content',
      'motif search across sequence data',
      'first CS and biology pairing',
      'the intersection I still chase',
    ],
    skills: ['Java', 'Java Swing', 'JavaFX', 'string algorithms'],
    link: 'https://github.com/ramyap06/dna-seq-analyzer',
  },
  {
    type: 'project',
    date: 'March 2025 – February 2026',
    title: 'Custom Memory Allocator',
    subtitle: 'Started as a freshman, finished sophomore year',
    desc: [
      'attempted malloc from scratch, freshman',
      'got stuck on block coalescing',
      'returned with systems background, finished',
      'free list, splitting, alignment handling',
      'unfinished at 18, solved at 19',
    ],
    skills: ['C', 'memory management', 'pointer arithmetic', 'gdb', 'valgrind'],
    link: 'https://github.com/ramyap06/custom-memory-allocator',
  },
  {
    type: 'experience',
    date: 'August 2024 – May 2025',
    title: 'Purdue MIND',
    subtitle: 'fNIR TBI Prediction',
    desc: [
      'predicted brain oxygenation from fNIRS',
      'cleaned noisy neuroimaging time series',
      'trained and compared regression models',
      'CS and biology at research scale',
    ],
    skills: ['Python', 'machine learning', 'pandas', 'numpy', 'scikit-learn', 'mne'],
    link: 'https://github.com/khushichoksi05/neurotech_fnir_mind',
  },
  {
    type: 'project',
    date: 'May 2025',
    title: 'Dino Game',
    subtitle: 'Recreating a childhood favorite',
    desc: [
      'recreated Chrome dino from scratch',
      'gravity, jump arcs, collision detection',
      'difficulty scaling ramping over time',
      'fun taught game loops fastest',
    ],
    skills: ['Python', 'pygame', 'game loops', '2D physics'],
    link: 'https://github.com/ramyap06/dino-game',
  },
  {
    type: 'project',
    date: 'June 2025',
    title: 'Tic Tac Toe',
    subtitle: 'From scratch',
    desc: [
      'two-player game built from scratch',
      'win detection and turn state',
      'no framework, raw DOM rendering',
      'adding minimax with alpha-beta pruning',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'DOM manipulation'],
    link: 'https://github.com/ramyap06/tic-tac-toe',
  },
  {
    type: 'project',
    date: 'August 2025',
    title: 'Stanford Open Policing Data Analysis',
    subtitle: 'EDA deep dive',
    desc: [
      'analyzed traffic stops across states',
      'examined stop and search disparities',
      'profiled data too large to eyeball',
      'self-test before applying to Boilerexams',
      'stopped waiting to feel qualified',
    ],
    skills: ['Python', 'exploratory data analysis', 'polars', 'numpy', 'matplotlib'],
    link: 'https://github.com/ramyap06/stanford-open-policing-data-analysis',
  },
  {
    type: 'experience',
    date: 'August 2025 – December 2025',
    title: 'Boilerexams',
    subtitle: 'Data Analyst',
    desc: [
      'analyzed student exam prep behavior',
      'tested optimal study time windows',
      'handled duplicate and missing session data',
      'real analytics is genuinely messy',
    ],
    skills: ['Python', 'exploratory data analysis', 'polars', 'numpy', 'matplotlib', 'seaborn'],
  },
  {
    type: 'experience',
    date: 'August 2025 – May 2026',
    title: 'Purdue MIND',
    subtitle: 'Flexor CTS Glove App',
    desc: [
      'carpal tunnel rehab app built',
      '4 exercises across 5 levels',
      'MediaPipe landmarks normalized, 13.5 point gain',
      'TensorFlow classifier at 69.3% accuracy',
      'earlier projects finally compounded here',
    ],
    skills: ['Python', 'React', 'Supabase', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    link: 'https://github.com/esmyla/MIND-CTS-Software',
  },
  {
    type: 'experience',
    date: 'August 2025 – May 2026',
    title: 'Purdue Data Mine × Frederick National Lab',
    subtitle: 'SPAC Spatial Analysis Toolkit',
    desc: [
      'open source spatial analysis toolkit',
      'Leiden clustering, 11 configurable parameters',
      '13-example notebook closing onboarding gap',
      'Git workshops enabling 5 features',
      'first real pull request workflow',
    ],
    skills: ['Python', 'scanpy', 'Leiden clustering', 'Shiny UI', 'Git'],
    link: 'https://github.com/ramyap06/SCSAWorkflow-2025',
  },
  {
    type: 'experience',
    date: 'October 2025 – May 2026',
    title: 'Hack the Future',
    subtitle: 'Sleep Pod Operations Platform',
    desc: [
      'operations platform for UK nonprofit',
      '8 supply chain processes automated',
      '4 fixed roles became unlimited',
      '36 email threads became 1',
      'software mattering to real organizations',
    ],
    skills: ['React.js', 'Node.js', 'MongoDB', 'FullCalendar', 'GetStream Chat', 'WebSocket'],
  },
  {
    type: 'experience',
    date: 'December 2025 – January 2026',
    title: 'Aiden AI',
    subtitle: 'Software Engineering Intern',
    desc: [
      'low-code map component for cases',
      'React shadow DOM avoiding style collisions',
      'JSON schema drove all configuration',
    ],
    skills: ['React.js', 'shadow DOM', 'low-code platforms'],
  },
  {
    type: 'experience',
    date: 'January 2026 – May 2026',
    title: 'Kong Lab',
    subtitle: 'Immune Survival Analysis',
    desc: [
      'gene features predicting breast cancer relapse',
      'C-index of 0.85, 4 cohorts',
      '21,655 genes reduced to 300',
      '25-minute reruns eliminated via checkpointing',
      'irreproducible results are not results',
    ],
    skills: ['R', 'survival analysis', 'Cox regression', 'RSF', 'CoxBoost', 'ComBat'],
    link: 'https://github.com/ramyap06/KongLab-ImmuneMLSurvivalAnalysis',
  },
  {
    type: 'project',
    date: 'February 7–8, 2026',
    title: 'BarBabes',
    subtitle: '1st place — Boilermaker Hackathon',
    desc: [
      '1st place among 33 teams',
      'sobriety scored from 3 signals',
      '14 Pydantic models, 16 endpoints',
      'real-time group risk alerts shipped',
      'first win, impostor feeling gone',
    ],
    skills: ['Python', 'FastAPI', 'Pydantic', 'MongoDB Atlas', 'Gemini API', 'NFC'],
    link: 'https://github.com/ramyap06/BarBabes',
  },
  {
    type: 'project',
    date: 'February 27–28, 2026',
    title: 'PWSense',
    subtitle: 'Hackathon project',
    desc: [
      'Prader-Willi symptom monitoring for caregivers',
      '6 signals into 15 visualizations',
      'speech emotion classified at 65%',
      '2 features from 1 recording',
      'rare disease made decisions consequential',
    ],
    skills: ['Python', 'TensorFlow', 'Librosa', 'Flask', 'React', 'RAVDESS'],
    link: 'https://github.com/ramyap06/PWSense',
  },
  {
    type: 'project',
    date: 'April 2026',
    title: 'THE Shell Project',
    subtitle: 'Systems programming',
    desc: [
      'Unix shell written in C',
      'fork, exec, and I/O redirection',
      'multi-stage pipelines and background jobs',
      'signal handling for foreground processes',
      'implementing beat reading about it',
    ],
    skills: ['C', 'process management', 'pipes', 'signal handling'],
  },
  {
    type: 'project',
    date: 'April 2026',
    title: 'HTTP Server from Scratch',
    subtitle: 'Systems programming',
    desc: [
      'concurrent HTTP/1.1 server on sockets',
      'parsed request lines and headers',
      'routed static files with status codes',
      'handled simultaneous connections correctly',
      'every framework suddenly made sense',
    ],
    skills: ['C', 'socket programming', 'HTTP/1.1', 'concurrency'],
  },
  {
    type: 'experience',
    date: 'June 2026 – August 2026',
    title: 'Manaaki Tech',
    subtitle: 'Software Engineering Intern',
    desc: [
      'first industry engineering internship',
      'JSON diff engine caught 130 edits',
      '89 properties unified into 1 schema',
      '7 REST endpoints demoed to CEO',
      'silent failures are the dangerous kind',
    ],
    skills: ['Python', 'Django', 'FastAPI', 'Pydantic', 'React', 'TypeScript', 'PostgreSQL'],
  },
]

const typeIcon = { experience: '💼', project: '🚀', milestone: '🎓' }

export default function Timeline() {
  return (
    <>
      <blockquote className="journey-quote">
        <p>"All big things come from small beginnings."</p>
        <cite>James Clear, Atomic Habits</cite>
      </blockquote>
      <section id="journey" className="journey">
        <h2 className="section-title">My Journey</h2>
        <div className="journey-track">
          {timelineItems.map((item, i) => (
            <div
              className={`journey-item ${i % 2 === 0 ? 'journey-item--left' : 'journey-item--right'}`}
              key={item.title + item.date}
            >
              <div className="journey-card">
                <span className="journey-date">{typeIcon[item.type]} {item.date}</span>
                <h3>{item.title}</h3>
                {item.subtitle && <p className="journey-subtitle">{item.subtitle}</p>}
                <ul className="journey-desc">
                  {item.desc.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {item.skills && (
                  <div className="tags journey-skills">
                    {item.skills.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="journey-link">View →</a>
                )}
              </div>
              <span className="journey-dot" />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
