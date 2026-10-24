// Static markup for the portfolio page. Rendered once as a single innerHTML
// so the original DOM structure (classes, ids, attributes, inline ticket
// variables) is preserved exactly.
export const pageHtml = `
  <!-- ===== Hero ===== -->
  <section class="hero" id="top" data-section="hero">
    <h1 class="main-txt">Suganthan</h1>
    <canvas class="webgl" id="webgl" aria-hidden="true"></canvas>

    <div class="hero-content">
      <header class="hide-text">
        <div class="header-inner">
          <a href="#top" class="navbar-brand">Suganthan</a>
          <nav>
            <ul>
              <li><a href="#studio">about</a></li>
              <li><a href="#work">projects</a></li>
              <li><a href="#process">process</a></li>
              <li><a href="#materials">interests</a></li>
            </ul>
          </nav>
          <a href="#contact" class="btn btn--nav">Say hello <i class="arrow" aria-hidden="true">→</i></a>
        </div>
      </header>

      <div class="banner hide-text">
        <div class="banner-inner">
          <div class="top-desc">
            <h5>Independent Developer / Vibecoder</h5>
            <h6>Websites · Games · AI Workflows</h6>
            <span></span>
          </div>
          <div class="bottom-desc">
            <div class="left-desc">
              <h1 class="holo-num" aria-hidden="true">SC</h1>
              <a href="#contact" class="ticket wide hero-ticket" data-tilt="0.8" aria-label="Suganthan Chokkalingam, open to work, say hello">
                <div class="ticket-bg"></div>
                <div class="ticket-main">
                  <span class="tag">Open to Work</span>
                  <p class="ht-title">Suganthan C.</p>
                  <p class="ht-sub">Admit one · Say hello</p>
                </div>
                <div class="ticket-tear-v"></div>
                <div class="ticket-stub-v">
                  <span class="ht-no">No. <b>001</b></span>
                  <div class="barcode-wrap"><div class="barcode"></div><small>SC-001</small></div>
                </div>
              </a>
            </div>
            <div class="middle-desc">
              <h2>Vibecoding Ideas to Life</h2>
            </div>
            <div class="right-desc">
              <h1 class="holo-num" aria-hidden="true">01</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <span class="rotated-text hide-text">Hover to push the spheres</span>
  </section>

  <!-- ===== Marquee ===== -->
  <div class="marquee" aria-hidden="true" data-section="marquee">
    <div class="marquee-band">
      <div class="ticket-bg"></div>
      <div class="marquee-shine"></div>
      <div class="marquee-track">
        <span>Websites</span><span>Vibecoding</span><span>Games</span><span>AI Agents</span><span>Tools</span><span>Experiments</span>
        <span>Websites</span><span>Vibecoding</span><span>Games</span><span>AI Agents</span><span>Tools</span><span>Experiments</span>
      </div>
    </div>
  </div>

  <!-- ===== 02 About ===== -->
  <section class="section" id="studio" data-section="lab">
    <div class="section-head reveal">
      <h2 class="section-title">About<br><span class="accent">Me</span></h2>
      <span class="section-num">02 — About</span>
    </div>
    <div class="about-grid">
      <p class="statement reveal">
        I'm Suganthan — an <strong>independent developer &amp; vibecoder</strong>. I build websites, games, tools and AI-powered software
        through <span class="accent"><strong>fast experiments and modern AI coding workflows</strong></span>, turning ideas into things people can use.
      </p>
      <div class="about-side reveal">
        <p>I like short loops: describe the idea, build with coding agents, test the result, then keep shaping it by hand. Beyond software, I stay curious about biology, genetics, wildlife conservation and computational biology.</p>
        <div class="stats">
          <div><b>Build</b><span>Websites &amp; tools</span></div>
          <div><b>Play</b><span>Games &amp; experiences</span></div>
          <div><b>Learn</b><span>AI workflows</span></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== 03 Projects ===== -->
  <section class="section" id="work" data-section="products">
    <div class="section-head reveal">
      <h2 class="section-title">Selected<br><span class="accent">Projects</span></h2>
      <p>Six builds across websites, AI systems and indie games — made through fast loops, close testing and a lot of curiosity.</p>
    </div>

    <div class="work-grid">
      <a href="https://suganpf2.vercel.app" class="card reveal" target="_blank" rel="noopener noreferrer">
        <div class="ticket" style="--i:0">
          <div class="ticket-bg"><span class="ticket-watermark">01</span></div>
          <div class="ticket-head">
            <span class="tag">PORTFOLIO</span>
            <span class="num">No. <b>01</b><span class="sym">✦</span></span>
          </div>
          <h3 class="ticket-title">MY OTHER<br>PORTFOLIO</h3>
          <div class="card-visual">
            <div class="shadow"></div>
            <div class="orb" style="--s:46%;--x:27%;--y:32%;--dx:6px;--dy:-4px"></div>
            <div class="orb" style="--s:22%;--x:10%;--y:18%;--dx:-12px;--dy:-10px"></div>
            <div class="orb" style="--s:18%;--x:70%;--y:20%;--dx:12px;--dy:-12px"></div>
            <div class="orb" style="--s:28%;--x:62%;--y:56%;--dx:14px;--dy:8px"></div>
            <div class="orb" style="--s:12%;--x:18%;--y:68%;--dx:-10px;--dy:10px"></div>
            <div class="orb" style="--s:9%;--x:48%;--y:15%;--dx:0;--dy:-16px"></div>
          </div>
          <div class="ticket-tear"></div>
          <div class="ticket-stub">
            <div>
              <p>Another corner of the things I build.</p>
              <span class="status ga">View project</span>
            </div>
            <div class="barcode-wrap"><div class="barcode"></div><small>SC-01-2026</small></div>
          </div>
        </div>
      </a>
      <a href="https://github.com/carevat/jarvis" class="card reveal" target="_blank" rel="noopener noreferrer">
        <div class="ticket" style="--i:1">
          <div class="ticket-bg"><span class="ticket-watermark">02</span></div>
          <div class="ticket-head">
            <span class="tag">AI SYSTEMS</span>
            <span class="num">No. <b>02</b><span class="sym">✦</span></span>
          </div>
          <h3 class="ticket-title">JARVIS</h3>
          <div class="card-visual">
            <div class="shadow"></div>
            <div class="orb soft" style="--s:62%;--x:19%;--y:28%;--dx:0;--dy:10px"></div>
            <div class="orb gold" style="--s:15%;--x:70%;--y:66%;--dx:10px;--dy:-6px"></div>
            <div class="orb" style="--s:9%;--x:14%;--y:20%;--dx:-6px;--dy:-8px"></div>
          </div>
          <div class="ticket-tear"></div>
          <div class="ticket-stub">
            <div>
              <p>A personal AI assistant built to do more.</p>
              <span class="status ">View project</span>
            </div>
            <div class="barcode-wrap"><div class="barcode"></div><small>SC-02-2026</small></div>
          </div>
        </div>
      </a>
      <a href="https://playashfall.vercel.app" class="card reveal" target="_blank" rel="noopener noreferrer">
        <div class="ticket" style="--i:2">
          <div class="ticket-bg"><span class="ticket-watermark">03</span></div>
          <div class="ticket-head">
            <span class="tag">GAME DEVELOPMENT</span>
            <span class="num">No. <b>03</b><span class="sym">✦</span></span>
          </div>
          <h3 class="ticket-title">ASHFALL</h3>
          <div class="card-visual">
            <div class="shadow"></div>
            <div class="orb gold" style="--s:40%;--x:30%;--y:34%;--dx:0;--dy:-6px"></div>
            <div class="orb gold" style="--s:24%;--x:12%;--y:56%;--dx:-10px;--dy:6px"></div>
            <div class="orb gold" style="--s:20%;--x:66%;--y:24%;--dx:10px;--dy:-10px"></div>
            <div class="orb" style="--s:14%;--x:68%;--y:62%;--dx:10px;--dy:8px"></div>
            <div class="orb gold" style="--s:10%;--x:22%;--y:22%;--dx:-8px;--dy:-8px"></div>
          </div>
          <div class="ticket-tear"></div>
          <div class="ticket-stub">
            <div>
              <p>A world built to be explored.</p>
              <span class="status ga">View project</span>
            </div>
            <div class="barcode-wrap"><div class="barcode"></div><small>SC-03-2026</small></div>
          </div>
        </div>
      </a>
      <a href="https://nikevibe.vercel.app" class="card reveal" target="_blank" rel="noopener noreferrer">
        <div class="ticket" style="--i:3">
          <div class="ticket-bg"><span class="ticket-watermark">04</span></div>
          <div class="ticket-head">
            <span class="tag">WEB EXPERIMENT</span>
            <span class="num">No. <b>04</b><span class="sym">✦</span></span>
          </div>
          <h3 class="ticket-title">NIKE SITE</h3>
          <div class="card-visual">
            <div class="shadow"></div>
            <div class="orb" style="--s:12%;--x:44%;--y:40%;--dx:0;--dy:0"></div>
            <div class="orb" style="--s:9%;--x:30%;--y:30%;--dx:-10px;--dy:-10px"></div>
            <div class="orb gold" style="--s:10%;--x:58%;--y:28%;--dx:10px;--dy:-10px"></div>
            <div class="orb" style="--s:8%;--x:62%;--y:48%;--dx:14px;--dy:2px"></div>
            <div class="orb gold" style="--s:9%;--x:28%;--y:52%;--dx:-14px;--dy:4px"></div>
            <div class="orb" style="--s:7%;--x:46%;--y:60%;--dx:0;--dy:14px"></div>
            <div class="orb" style="--s:6%;--x:18%;--y:40%;--dx:-18px;--dy:0"></div>
            <div class="orb gold" style="--s:6%;--x:74%;--y:38%;--dx:18px;--dy:-2px"></div>
            <div class="orb" style="--s:5%;--x:40%;--y:20%;--dx:-4px;--dy:-18px"></div>
            <div class="orb" style="--s:5%;--x:60%;--y:66%;--dx:10px;--dy:16px"></div>
            <div class="orb gold" style="--s:4%;--x:24%;--y:66%;--dx:-12px;--dy:14px"></div>
          </div>
          <div class="ticket-tear"></div>
          <div class="ticket-stub">
            <div>
              <p>An experiment in recreating a bold digital brand.</p>
              <span class="status ">View project</span>
            </div>
            <div class="barcode-wrap"><div class="barcode"></div><small>SC-04-2026</small></div>
          </div>
        </div>
      </a>
      <a href="https://carevat.github.io/myp4meme" class="card reveal" target="_blank" rel="noopener noreferrer">
        <div class="ticket" style="--i:4">
          <div class="ticket-bg"><span class="ticket-watermark">05</span></div>
          <div class="ticket-head">
            <span class="tag">WEB PROJECT</span>
            <span class="num">No. <b>05</b><span class="sym">✦</span></span>
          </div>
          <h3 class="ticket-title">MYP4<br>MEMES</h3>
          <div class="card-visual">
            <div class="shadow"></div>
            <div class="orb" style="--s:38%;--x:8%;--y:48%;--dx:8px;--dy:0"></div>
            <div class="orb gold" style="--s:26%;--x:42%;--y:38%;--dx:12px;--dy:-4px"></div>
            <div class="orb" style="--s:17%;--x:66%;--y:30%;--dx:14px;--dy:-8px"></div>
            <div class="orb gold" style="--s:10%;--x:80%;--y:22%;--dx:14px;--dy:-10px"></div>
            <div class="orb" style="--s:6%;--x:88%;--y:14%;--dx:10px;--dy:-10px"></div>
          </div>
          <div class="ticket-tear"></div>
          <div class="ticket-stub">
            <div>
              <p>A small corner of the internet built for laughs.</p>
              <span class="status ga">View project</span>
            </div>
            <div class="barcode-wrap"><div class="barcode"></div><small>SC-05-2026</small></div>
          </div>
        </div>
      </a>
      <a href="https://lil-god.vercel.app" class="card reveal" target="_blank" rel="noopener noreferrer">
        <div class="ticket" style="--i:5">
          <div class="ticket-bg"><span class="ticket-watermark">06</span></div>
          <div class="ticket-head">
            <span class="tag">GAME DEVELOPMENT</span>
            <span class="num">No. <b>06</b><span class="sym">✦</span></span>
          </div>
          <h3 class="ticket-title">LITTLE<br>GOD</h3>
          <div class="card-visual">
            <div class="shadow"></div>
            <div class="orb" style="--s:42%;--x:12%;--y:32%;--dx:-14px;--dy:0"></div>
            <div class="orb gold" style="--s:42%;--x:48%;--y:36%;--dx:14px;--dy:0"></div>
            <div class="orb" style="--s:8%;--x:46%;--y:22%;--dx:0;--dy:-20px"></div>
            <div class="orb gold" style="--s:6%;--x:44%;--y:74%;--dx:0;--dy:18px"></div>
          </div>
          <div class="ticket-tear"></div>
          <div class="ticket-stub">
            <div>
              <p>A tiny world where every action changes history.</p>
              <span class="status ">View project</span>
            </div>
            <div class="barcode-wrap"><div class="barcode"></div><small>SC-06-2026</small></div>
          </div>
        </div>
      </a>
    </div>
  </section>

  <!-- ===== 04 Process ===== -->
  <section class="section" id="process" data-section="how-it-works">
    <div class="section-head reveal">
      <h2 class="section-title">How I<br><span class="accent">Work</span></h2>
      <span class="section-num">04 — Process</span>
    </div>
    <div class="process-grid">
      <div class="step reveal">
        <span class="step-num">01</span>
        <h3>Frame</h3>
        <p>I start with the outcome, the feeling and the constraints. A clear direction gives the first build somewhere to go.</p>
        <ul><li>Intent</li><li>Constraints</li></ul>
      </div>
      <div class="step reveal">
        <span class="step-num">02</span>
        <h3>Vibe</h3>
        <p>I work with AI coding agents to get a real version running early, then steer the code as the idea takes shape.</p>
        <ul><li>AI Agents</li><li>Fast Loops</li></ul>
      </div>
      <div class="step reveal">
        <span class="step-num">03</span>
        <h3>Refine</h3>
        <p>I click through, play, break and revise. The useful details appear when the generated code meets real use.</p>
        <ul><li>Playtest</li><li>Iterate</li></ul>
      </div>
      <div class="step reveal">
        <span class="step-num">04</span>
        <h3>Ship</h3>
        <p>I publish the useful version, watch how it behaves and carry what I learn into the next build.</p>
        <ul><li>Deploy</li><li>Learn</li></ul>
      </div>
    </div>
  </section>

  <!-- ===== 05 Interests ===== -->
  <section class="section" id="materials" data-section="models">
    <div class="section-head reveal">
      <h2 class="section-title">Current<br><span class="accent">Interests</span></h2>
      <p>Mostly software: expressive websites, interactive systems, indie games and AI-assisted ways of building them.</p>
    </div>
    <div class="swatches reveal">
      <div class="swatch ticket" style="--i:0;--os:42px;--h1:#ffffff;--h2:#e9f7c0;--h3:#fffdf4;--h4:#e4ecd2;--h5:#d5dcc3;--h7:#e6f2e6">
        <div class="ticket-bg"><span class="ticket-watermark">01</span></div>
        <div class="ticket-head">
          <span class="tag">Web</span>
          <span class="num">No. <b>01</b></span>
        </div>
        <h4 class="ticket-title">Websites</h4>
        <p class="model-detail">Expressive websites where layout, motion and interaction all serve the idea.</p>
        <div class="model-visual"><div class="orb pearl"></div></div>
        <div class="ticket-tear"></div>
        <div class="ticket-stub">
          <div>
            <p>Interfaces · Systems</p>
            <span class="status">Frontend craft</span>
          </div>
          <div class="barcode-wrap"><div class="barcode"></div><small>SC-R01</small></div>
        </div>
      </div>
      <div class="swatch ticket" style="--i:1;--os:62px;--h1:#f3f7dd;--h2:#d6ff62;--h3:#eef7d2;--h4:#e8efd8;--h5:#cfd9a8">
        <div class="ticket-bg"><span class="ticket-watermark">02</span></div>
        <div class="ticket-head">
          <span class="tag">Experience</span>
          <span class="num">No. <b>02</b></span>
        </div>
        <h4 class="ticket-title">Interact</h4>
        <p class="model-detail">Digital experiences that respond, move and reward a little curiosity.</p>
        <div class="model-visual"><div class="orb "></div></div>
        <div class="ticket-tear"></div>
        <div class="ticket-stub">
          <div>
            <p>Motion · Feedback</p>
            <span class="status">Browser play</span>
          </div>
          <div class="barcode-wrap"><div class="barcode"></div><small>SC-R02</small></div>
        </div>
      </div>
      <div class="swatch ticket" style="--i:2;--os:84px;--h1:#e9e8dd;--h2:#c9cf9a;--h3:#e8e2d4;--h4:#dcd8c8;--h5:#a9a385;--h6:#f2f0e6">
        <div class="ticket-bg"><span class="ticket-watermark">03</span></div>
        <div class="ticket-head">
          <span class="tag">Indie</span>
          <span class="num">No. <b>03</b></span>
        </div>
        <h4 class="ticket-title">Games</h4>
        <p class="model-detail">Small worlds, clear rules and systems that become interesting when players touch them.</p>
        <div class="model-visual"><div class="orb "></div></div>
        <div class="ticket-tear"></div>
        <div class="ticket-stub">
          <div>
            <p>Worlds · Systems</p>
            <span class="status">Indie development</span>
          </div>
          <div class="barcode-wrap"><div class="barcode"></div><small>SC-R03</small></div>
        </div>
      </div>
      <div class="swatch ticket" style="--i:3;--os:118px;--h1:#e9f7c0;--h2:#d6ff62;--h3:#f3fadf;--h4:#dfe8cf;--h5:#a5c24a;--h6:#fbfff0;--h7:#eaf2d0">
        <div class="ticket-bg"><span class="ticket-watermark">04</span></div>
        <div class="ticket-head">
          <span class="tag">AI</span>
          <span class="num">No. <b>04</b></span>
        </div>
        <h4 class="ticket-title">Agents</h4>
        <p class="model-detail">AI coding workflows that shorten the path from a rough idea to working software.</p>
        <div class="model-visual"><div class="orb gold"></div></div>
        <div class="ticket-tear"></div>
        <div class="ticket-stub">
          <div>
            <p>Prompts · Code</p>
            <span class="status">Vibecoding</span>
          </div>
          <div class="barcode-wrap"><div class="barcode"></div><small>SC-R04</small></div>
        </div>
      </div>
      <div class="swatch ticket" style="--i:4;--os:70px;--h1:#dcf7a8;--h2:#b8e84e;--h3:#e6f7c2;--h4:#d2f0a0;--h5:#8cc22e;--h6:#f2fcdc;--h7:#e0f5b8">
        <div class="ticket-bg"><span class="ticket-watermark">05</span></div>
        <div class="ticket-head">
          <span class="tag">Developer</span>
          <span class="num">No. <b>05</b></span>
        </div>
        <h4 class="ticket-title">Tools</h4>
        <p class="model-detail">Focused utilities and experiments that remove friction or test one useful idea.</p>
        <div class="model-visual"><div class="orb "></div></div>
        <div class="ticket-tear"></div>
        <div class="ticket-stub">
          <div>
            <p>Utilities · Prototypes</p>
            <span class="status">Useful experiments</span>
          </div>
          <div class="barcode-wrap"><div class="barcode"></div><small>SC-R05</small></div>
        </div>
      </div>
      <div class="swatch ticket dark" style="--i:5;--os:76px;--h1:#292d30;--h2:#3b4147;--h3:#23272b;--h4:#333a41;--h5:#4b535b;--h6:#2e343a;--h7:#262d38">
        <div class="ticket-bg"><span class="ticket-watermark">06</span></div>
        <div class="ticket-head">
          <span class="tag">Science</span>
          <span class="num">No. <b>06</b></span>
        </div>
        <h4 class="ticket-title">Biology</h4>
        <p class="model-detail">A quieter interest in genetics, wildlife conservation and computational biology.</p>
        <div class="model-visual"><div class="orb ink"></div></div>
        <div class="ticket-tear"></div>
        <div class="ticket-stub">
          <div>
            <p>Genes · Wildlife</p>
            <span class="status">Still curious</span>
          </div>
          <div class="barcode-wrap"><div class="barcode"></div><small>SC-R06</small></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Quote ===== -->
  <section class="quote" aria-label="Quote" data-section="quote">
    <blockquote class="reveal">
      “Vibecoding gets an idea moving. <span class="accent">Taste, testing and iteration</span> make it worth using.”
      <cite>— Me</cite>
    </blockquote>
  </section>

  <!-- ===== 06 Contact ===== -->
  <section class="section" id="contact" data-section="cta">
    <div class="section-head reveal">
      <span class="section-num">06 — Contact</span>
      <span class="section-num">Open to collaboration</span>
    </div>
    <div class="cta-wrap reveal">
      <div class="ticket wide" data-tilt="0.3">
        <div class="ticket-bg"><span class="ticket-watermark">SC</span></div>
        <div class="ticket-main">
          <div class="ticket-head">
            <span class="tag">Contact</span>
            <span class="num">No. <b>001</b><span class="sym">✦</span></span>
          </div>
          <h2 class="cta-title">Let's build<br>things <span class="outline">together</span></h2>
          <p>Whether it's a project, a collaboration, or a question worth chasing — if you're working on something interesting, I'd like to hear about it.</p>
          <div class="cta-actions">
            <p>Mail me</p>
            <a href="mailto:chokkalingamsuganthan@gmail.com" class="mail">chokkalingamsuganthan@gmail.com</a>
          </div>
        </div>
        <div class="ticket-tear-v"></div>
        <div class="ticket-stub-v">
          <div class="ticket-head">
            <span class="num">Admit <b>One</b></span>
            <span class="sym">✦</span>
          </div>
          <div class="stub-orbs">
            <div class="orb gold" style="--s:92px;--x:8%;--y:18%"></div>
            <div class="orb" style="--s:54px;--x:52%;--y:4%"></div>
            <div class="orb pearl" style="--s:34px;--x:62%;--y:58%"></div>
          </div>
          <div>
            <p class="stub-label">Open to Work</p>
            <p class="stub-big">Independent<br>Vibecoder</p>
          </div>
          <div class="barcode-wrap"><div class="barcode"></div><small>SC-EA-2026</small></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Footer ===== -->
  <footer class="footer" data-section="footer">
    <div class="footer-top">
      <div>
        <h5>Suganthan Chokkalingam</h5>
        <p>An independent developer and vibecoder building websites, games, tools and AI-powered software.</p>
      </div>
      <div>
        <h5>Explore</h5>
        <ul>
          <li><a href="#studio">About</a></li>
          <li><a href="#work">Projects</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#materials">Interests</a></li>
        </ul>
      </div>
      <div>
        <h5>Elsewhere</h5>
        <ul>
          <li><a href="#">GitHub</a></li>
          <li><a href="mailto:chokkalingamsuganthan@gmail.com">Email</a></li>
          <li><a href="#">Notes</a></li>
        </ul>
      </div>
      <div>
        <h5>Social</h5>
        <div class="footer-social">
          <a href="#" aria-label="X"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 3h4.9l4.3 5.7L17.4 3H21l-6.9 7.9L21.4 21h-4.9l-4.6-6.1L6.3 21H2.7l7.3-8.4z"/></svg></a>
          <a href="#" aria-label="Facebook"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.6 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3 0-1.3-.1-2.45-.1-2.4 0-4.05 1.45-4.05 4.1v2.3H8.6V13h2.7v8z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" stroke="none"/></svg></a>
          <a href="#" aria-label="YouTube"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="2" y="5.5" width="20" height="13" rx="4"/><path d="M10.2 9.4l5 2.6-5 2.6z" fill="currentColor" stroke="none"/></svg></a>
        </div>
      </div>
    </div>
    <div class="footer-word accent">Suganthan</div>
    <p class="footer-legal">
      This is a personal portfolio. The projects named here are in different stages, and some descriptions are still
      rough — treat them as directions, not documentation. Everything on this page is fair game for a change of mind.
    </p>
    <div class="footer-bottom">
      <span>© 2026 Suganthan Chokkalingam</span>
      <span>Independent Developer / Vibecoder</span>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
`;
