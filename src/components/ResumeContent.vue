<template>
  <main class="resume">
    <header class="top">
      <div class="identity">
        <h1>{{ resume.name }}</h1>
        <p class="title">{{ resume.title }}</p>

        <ul class="meta">
          <li v-if="resume.location">{{ resume.location }}</li>
          <li v-if="resume.email">
            <a :href="'mailto:' + resume.email">{{ resume.email }}</a>
          </li>
          <li v-if="resume.phone">{{ resume.phone }}</li>
        </ul>

        <ul class="links">
          <li v-for="l in resume.links" :key="l.label">
            <a :href="l.href" target="_blank" rel="noreferrer">{{ l.label }}</a>
          </li>
        </ul>
      </div>

      <div class="cta no-print">
        <a v-if="resume.pdfUrl" class="btn" :href="resume.pdfUrl" target="_blank" rel="noreferrer">
          Download PDF
        </a>
        <a v-if="resume.contactUrl" class="btn btn--ghost" :href="resume.contactUrl">
          Contact
        </a>
      </div>
    </header>

    <section v-if="hasSummary" class="section">
      <h2>Summary</h2>
      <p class="lead">{{ resume.summary }}</p>
    </section>

    <section v-if="hasSkills" class="section">
      <h2>Core Skills</h2>
      <div class="skill-grid">
        <div v-for="group in resume.skills" :key="group.label" class="skill-group">
          <h3>{{ group.label }}</h3>
          <p>{{ group.items.join(" • ") }}</p>
        </div>
      </div>
    </section>

    <section v-if="hasProjects" class="section">
      <h2>Projects</h2>
      <div class="stack">
        <article v-for="p in resume.projects" :key="p.name" class="card">
          <div class="card-top">
            <h3 class="card-title">
              <a v-if="p.liveUrl" :href="p.liveUrl" target="_blank" rel="noreferrer">{{ p.name }}</a>
              <span v-else>{{ p.name }}</span>
            </h3>

            <div class="card-links no-print">
              <!-- Single repo -->
              <a v-if="p.repoUrl" :href="p.repoUrl" target="_blank" rel="noreferrer">GitHub</a>

              <!-- Multiple repos -->
              <div class="multiple-repos" v-else-if="p.repoUrls">
                <a :href="p.repoUrls.frontend" target="_blank" rel="noreferrer">Github Frontend</a>
                <a :href="p.repoUrls.backend" target="_blank" rel="noreferrer">Github Backend</a>
              </div>
            </div>
          </div>

          <p class="muted" v-if="p.oneLiner">{{ p.oneLiner }}</p>

          <ul v-if="p.highlights && p.highlights.length" class="bullets">
            <li v-for="b in p.highlights" :key="b">{{ b }}</li>
          </ul>

          <p v-if="p.stack && p.stack.length" class="tags">
            <span class="tag" v-for="t in p.stack" :key="t">{{ t }}</span>
          </p>
        </article>
      </div>
    </section>

    <section v-if="hasExperience" class="section">
      <h2>Experience</h2>

      <div class="stack">
        <article v-for="job in resume.experience" :key="job.company + job.title" class="card">
          <div class="card-top">
            <h3 class="card-title">
              {{ job.title }} <span class="muted">— {{ job.company }}</span>
            </h3>
            <p class="dates muted">{{ job.dates }}</p>
          </div>

          <p class="muted" v-if="job.context">{{ job.context }}</p>

          <ul v-if="job.bullets && job.bullets.length" class="bullets">
            <li v-for="b in job.bullets" :key="b">{{ b }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section v-if="hasEducation" class="section">
      <h2>Education & Learning</h2>
      <div class="stack">
        <article v-for="e in resume.education" :key="e.label" class="card">
          <div class="card-top">
            <h3 class="card-title">{{ e.label }}</h3>
            <p class="dates muted">{{ e.dates }}</p>
          </div>
          <p class="muted" v-if="e.detail">{{ e.detail }}</p>
          <ul v-if="e.bullets && e.bullets.length" class="bullets">
            <li v-for="b in e.bullets" :key="b">{{ b }}</li>
          </ul>
        </article>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-inner">
        <p class="muted">Last updated: {{ resume.lastUpdated }}</p>
        <div class="footer-links no-print">
          <a v-if="resume.pdfUrl" :href="resume.pdfUrl" target="_blank" rel="noreferrer">Download PDF</a>
          <a v-if="resume.contactUrl" :href="resume.contactUrl">Contact</a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>

export default {
  name: "ResumePage",
  data() {
    return {
      resume: {
        name: "Rainer B.",
        title: "Fullstack Developer",
        location: "Calgary, AB",
        email: "hello@rainerb.com",
        phone: "",

        links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/rainerbrieger/" },
          { label: "GitHub", href: "https://github.com/rainerb16" },
          { label: "Portfolio", href: "/#/portfolio" }
        ],

        // Put a PDF in /public/resume.pdf and set this:
        pdfUrl: "/Rainer_Brieger_Dev_Resume_1.2_2025.pdf",
        contactUrl: "/#/contact",

        summary:
          "Fullstack developer building clean, responsive interfaces with JavaScript and React. Comfortable working with Node.js and Express to build and integrate REST APIs. Background in detail-heavy environments, bringing ownership, clarity, and follow-through into UI and application development.",

        skills: [
          { label: "FRONTEND", items: ["JavaScript (ES6+)", "Vue (Basic)", "React", "HTML", "CSS"] },
          { label: "BACKEND", items: ["Node.js", "Express"]},
          { label: "STYLING", items: ["Sass (SCSS)", "Tailwind", "Responsive UI"] },
          { label: "TOOLS", items: ["Git/GitHub", "Netlify", "Jira", "VS Code"] },
          { label: "STRENGTHS", items: ["Debugging", "Refactoring", "Documentation"] }
        ],

        projects: [
          {
            name: "Tiny Tasks NOTE: (Live demo may take up to 60s on load due to free-tier hosting)",
            oneLiner: "Lightweight task management app with a REST API, built to practice real-world frontend–backend integration and deployment.",
            highlights: [
              "Designed and built a REST API using Node.js and Express to handle task CRUD operations.",
              "Developed a separate frontend client that consumes the API via environment-based endpoints.",
              "Handled loading, empty, and error states to reflect realistic client–server behavior."
            ],
            stack: ["JavaScript", "Node.js", "Express", "REST API", "Netlify", "Sass (SCSS)", "Render"],
            liveUrl: "https://tiny-tasks-rainer.netlify.app/",
            repoUrls: {
              frontend: "https://github.com/rainerb16/tiny-tasks-frontend",
              backend: "https://github.com/rainerb16/tiny-tasks-api"
            }
          },
          {
            name: "Portfolio Website",
            oneLiner: "Personal portfolio site built with Vue to present projects, experience, and resume content in a clean, responsive layout.",
            highlights: [
              "Designed and implemented a clear information hierarchy for projects, resume, and contact flows.",
              "Built reusable Vue components and configured client-side routing for maintainable navigation.",
              "Styled the site using SCSS with a focus on readability, spacing, and responsive behavior."
            ],
            stack: ["Vue", "Vue Router", "Sass (SCSS)", "Netlify"],
            liveUrl: "https://rainerb.com",
            repoUrl: "https://github.com/rainerb16/portfolio"
          },
          {
            name: "Dev.Techno Blog",
            oneLiner: "Blog-style web app using Contentful as a headless CMS, focused on structured content delivery and component-based UI.",
            highlights: [
              "Integrated Contentful as a headless CMS to fetch and render structured content dynamically.",
              "Built reusable React components to display posts, layouts, and content blocks consistently.",
              "Handled asynchronous data loading and UI updates while maintaining a clean, readable layout."
            ],
            stack: ["React", "CSS", "Contentful", "Netlify"],
            liveUrl: "https://devtechno.netlify.app/",
            repoUrl: "https://github.com/rainerb16/dev-techno"
          }
        ],

        experience: [
          {
            title: "Web Developer",
            company: "Evans Hunt Group",
            dates: "2020 — 2023",
            context:
              "Worked on production web applications in a collaborative, ticket-driven environment, contributing frontend features, UI improvements, and ongoing maintenance.",
            bullets: [
              "Developed and maintained frontend features using HTML, CSS, JavaScript, and React within a component-based architecture.",
              "Built and updated reusable React components to support maintainable, scalable UI patterns.",
              "Implemented UI enhancements and bug fixes based on tickets, stakeholder feedback, and evolving requirements.",
              "Debugged layout, styling, and functional issues across browsers and devices using browser DevTools.",
              "Collaborated with designers, developers, and project managers in an agile-style workflow.",
              "Used Git for version control, managing commits, collaborating with teammates, and supporting deployments.",
              "Contributed to internal documentation to improve code maintainability and team handoffs.",
              "Contributed frontend work to client projects including Calgary Stampede, United Way, Ikon Pass, CMH Heli-Skiing, Alterra, and more."
            ]
          }
        ],

        education: [
          {
            label: "Web Development Diploma",
            dates: "Innotech College",
            detail:
              "Completed focused training in frontend web development, emphasizing practical implementation and debugging.",
            bullets: [
              "Built responsive interfaces using HTML, CSS, Sass, JavaScript, and Vue.",
              "Developed component-based UIs and practiced debugging and refactoring workflows.",
              "Worked with Git-based version control and ticket-style development tasks."
            ]
          },
          {
            label: "Business Administration Diploma",
            dates: "SAIT Polytechnic",
            detail:
              "Business-focused diploma providing a foundation in operations, communication, and structured problem-solving.",
            bullets: [
              "Developed strong organizational, documentation, and communication skills.",
              "Applied analytical thinking and process awareness in professional environments.",
              "Strengthened collaboration skills applicable to cross-functional teams."
            ]
          }
        ],

        lastUpdated: "Dec 2025"
      }
    };
  },
  computed: {
    hasSummary() {
      return !!(this.resume.summary && this.resume.summary.trim().length);
    },
    hasSkills() {
      return !!(this.resume.skills && this.resume.skills.length);
    },
    hasProjects() {
      return !!(this.resume.projects && this.resume.projects.length);
    },
    hasExperience() {
      return !!(this.resume.experience && this.resume.experience.length);
    },
    hasEducation() {
      return !!(this.resume.education && this.resume.education.length);
    }
  }
};
</script>

<style scoped lang="scss">
$max-width: 900px;
$pad-x: 18px;
$radius: 14px;

$border: rgba(0, 0, 0, 0.4);
$btn-border: rgba(0, 0, 0, 0.5);
$btn-border-hover: rgba(0, 0, 0, 1);
$text-muted: 0.75;

@mixin underline($alpha: 0.25) {
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, $alpha);

  &:hover {
    border-bottom-color: rgba(0, 0, 0, 0.7);
  }
}

.resume {
  max-width: $max-width;
  margin: 0 auto;
  padding: 70px $pad-x 60px;
}

.top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid $border;
}

.identity h1 {
  font-size: 2rem;
  line-height: 1.1;
  margin: 0;
}

.title {
  margin: 8px 0 10px;
  font-size: 1.05rem;
  opacity: 0.9;
}

.meta,
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
  padding: 0;
  margin: 8px 0 0;
  list-style: none;
  a {
    color: #800000;
    &:visited {
      color: #000;
    }
  }
}

.links a {
  @include underline(0.25);
  color: #800000;
}

.cta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.section {
  padding-top: 22px;

  h2 {
    font-size: 1.1rem;
    color: #800000;
    margin: 0 0 10px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    opacity: 0.85;
  }
}

.lead {
  margin: 0;
  font-size: 1.03rem;
  line-height: 1.6;
}

.skill-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.skill-group h3 {
  margin: 0 0 6px;
  font-size: 0.95rem;
  color: #800000;
}

.skill-group p {
  margin: 0;
  line-height: 1.55;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card {
  border: 1px solid $border;
  border-radius: $radius;
  padding: 14px 14px 12px;
}

.multiple-repos {
  display: flex;
  flex-direction: row;
  gap: 7px;
}

.card-top {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.card-title {
  margin: 0;
  font-size: 1.03rem;
  color: #800000;
  a {
    @include underline(0.25);
    color: #800000;
    &:visited {
      color: #000;
    }
  }
}

.card-links {
  display: flex;
  gap: 10px;
  font-size: 0.95rem;

  a {
    @include underline(0.2);
    color: #000;
    &:visited {
      color: #800000;
    }
  }
}

.bullets {
  margin: 10px 0 0;
  padding-left: 18px;
  line-height: 1.55;
}

.muted {
  opacity: $text-muted;
}

.dates {
  margin: 0;
  white-space: nowrap;
}

.tags {
  margin: 10px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 0.86rem;
  color: #800000;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 999px;
  padding: 4px 10px;
  opacity: 0.85;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid $btn-border;
  text-decoration: none;
  font-weight: 600;
  color: #800000;

  &:hover {
    border-color: $btn-border-hover;
  }

  &--ghost {
    opacity: 0.9;
  }
}

.footer {
  margin-top: 26px;
  padding-top: 16px;
  border-top: 1px solid $border;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 14px;

  a {
    @include underline(0.25);
    color: #800000;
    &:visited {
      color: #000;
    }
  }
}

@media (max-width: 720px) {
  .top {
    flex-direction: column;
    align-items: stretch;
  }
  .skill-grid {
    grid-template-columns: 1fr;
  }
  .card-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .dates {
    white-space: normal;
  }
}

@media print {
  .resume {
    max-width: none;
    padding: 0;
  }

  .no-print {
    display: none !important;
  }

  .card {
    border: 1px solid #000;
    border-radius: 0;
    page-break-inside: avoid;
  }

  .top,
  .footer {
    border-color: #000;
  }

  a {
    color: #000;
    text-decoration: none;
    border: none !important;
  }
}
</style>
