"use client";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-lg">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="text-xl font-bold">
            Clever Career Coaching
          </div>

          <div className="hidden md:flex gap-6 text-sm items-center">

            <a href="#services" className="hover:text-yellow-400">
  Services
</a>

<a href="#packages" className="hover:text-yellow-400">
  Packages
</a>

<a href="#about" className="hover:text-yellow-400">
  About
</a>

<a href="#resources" className="hover:text-yellow-400">
  Resources
</a>



            <a
              href="https://wa.me/27716808027"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section
        className="relative bg-cover bg-center text-white py-32 px-6 mt-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')",
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-widest mb-4">
            Your Career. Our Expertise. Your Future.
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Clever Career Coaching
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            Professional ATS CV writing, LinkedIn optimisation,
            career coaching, and employability solutions designed
            to help professionals stand out and get hired faster.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">

            <div className="bg-white/10 px-4 py-2 rounded-full">
              ✔ ATS-Compliant CVs
            </div>

            <div className="bg-white/10 px-4 py-2 rounded-full">
              ✔ LinkedIn Optimisation
            </div>

            <div className="bg-white/10 px-4 py-2 rounded-full">
              ✔ Career Coaching
            </div>

            <div className="bg-white/10 px-4 py-2 rounded-full">
              ✔ Fast Turnaround
            </div>

          </div>

          <a
            href="https://wa.me/27716808027"
            className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-semibold"
          >
            WhatsApp for Free CV Review
          </a>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-10"
      >

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">ATS CV Revamp</h2>
          <p className="text-sm mt-2">
            Professionally written ATS-friendly CVs designed
            to improve recruiter visibility and interview opportunities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">LinkedIn Optimization</h2>
          <p className="text-sm mt-2">
            Strategic LinkedIn profile enhancement designed to improve
            recruiter engagement and professional branding.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Career Coaching</h2>
          <p className="text-sm mt-2">
            Professional career guidance, interview preparation,
            and employability improvement strategies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Job Applications</h2>
          <p className="text-sm mt-2">
            Cover letters, job application support,
            and strategic career positioning assistance.
          </p>
        </div>

      </section>

      {/* PACKAGES */}
      <section
        id="packages"
        className="grid md:grid-cols-3 gap-6 p-10"
      >

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold">
            ATS Career Scan™
          </h2>

          <p className="text-2xl my-2">R100</p>

          <ul className="text-sm space-y-2">
            <li>✓ AI Career Diagnostic</li>
            <li>✓ ATS Compatibility Scoring</li>
            <li>✓ Recruiter Readiness Assessment</li>
            <li>✓ Keyword Optimization Analysis</li>
            <li>✓ LinkedIn Readiness Evaluation</li>
            <li>✓ Career Positioning Insights</li>
          </ul>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold">
            Professional Career Optimization™
          </h2>

          <p className="text-2xl my-2">R350</p>

          <ul className="text-sm space-y-2">
            <li>✓ AI + Human CV Transformation</li>
            <li>✓ Full ATS CV Rewrite</li>
            <li>✓ Executive Summary Enhancement</li>
            <li>✓ Professional Formatting</li>
            <li>✓ LinkedIn Optimization</li>
            <li>✓ Word + PDF Delivery</li>
          </ul>

        </div>

        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-bold">
            Executive Career Acceleration™
          </h2>

          <p className="text-2xl my-2">R750+</p>

          <ul className="text-sm space-y-2">
            <li>✓ Executive ATS Analysis</li>
            <li>✓ Leadership Positioning</li>
            <li>✓ Executive LinkedIn Branding</li>
            <li>✓ Interview Coaching Preparation</li>
            <li>✓ Salary Positioning Guidance</li>
            <li>✓ Premium Career Transformation</li>
          </ul>

        </div>

      </section>

      {/* ABOUT */}
<section
  id="about"
  className="bg-black text-white py-20 px-6 text-center"
>

  <h2 className="text-4xl font-bold text-yellow-400">
    About Clever Nyazenga
  </h2>

  <p className="mt-8 max-w-4xl mx-auto text-lg text-gray-300 leading-8">

    Clever Nyazenga is a Career Coach, People Developer, and Employability Strategist passionate about empowering professionals to unlock their potential, strengthen their careers, and create meaningful impact.

    Combining corporate leadership experience, people development, and AI-powered career optimization, he helps individuals position themselves competitively in modern recruitment markets through ATS-optimized CVs, LinkedIn branding, interview preparation, and career transformation strategies.

    His mission is simple:
    To develop people, build stronger careers, and contribute toward a better future through growth, confidence, and opportunity.

  </p>

</section>
      {/* HOW IT WORKS */}
      <section className="bg-white py-16 px-6 text-center">

        <h2 className="text-3xl font-bold">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-gray-100 p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              1. Send Your CV
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              WhatsApp your CV and target role
              for professional assessment.
            </p>

          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              2. AI + Human Review
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              We analyze ATS compatibility,
              recruiter appeal, and career positioning.
            </p>

          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow">

            <h3 className="text-xl font-bold">
              3. Receive Your Transformation
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Receive your professionally optimized CV
              and career recommendations.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-yellow-500 py-16 px-6 text-center"
      >

        <h2 className="text-4xl font-bold text-black">
          Ready To Accelerate Your Career?
        </h2>

        <p className="mt-4 text-black text-lg">
          WhatsApp us today for a free CV review and professional career guidance.
        </p>

        <a
          href="https://wa.me/27716808027"
          className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl font-semibold"
        >
          Chat on WhatsApp
        </a>

      </section>

      {/* STICKY WHATSAPP BUTTON */}
      <a
        href="https://wa.me/27716808027"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold z-50"
      >
        WhatsApp Us
      </a>

    </main>
  );
}
