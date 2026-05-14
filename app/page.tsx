"use client";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">

      {/* HERO */}
      <section className="bg-black text-white py-20 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold">
          Clever Career Coaching
        </h1>

        <p className="mt-6 text-xl font-semibold">
          Get Hired Faster With Professionally Written ATS CV & LinkedIn Services
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-gray-300">
          We rewrite your CV, optimise your LinkedIn profile, and strategically
          position you for interviews and career growth opportunities.
        </p>

        <div className="mt-8 flex flex-col gap-2 text-sm md:text-base">
          <p>✔ ATS-Compliant CVs</p>
          <p>✔ LinkedIn Optimisation</p>
          <p>✔ Interview Preparation</p>
          <p>✔ Fast Turnaround (24–72 Hours)</p>
        </div>

        <a
          href="https://wa.me/27716808027"
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold"
        >
          WhatsApp for Free CV Review
        </a>

      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">ATS CV Revamp</h2>
          <p className="text-sm mt-2">
            Professionally written ATS-friendly CVs designed to improve recruiter visibility and interview opportunities.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">LinkedIn Optimization</h2>
          <p className="text-sm mt-2">
            Strategic LinkedIn profile enhancement designed to improve recruiter engagement and professional branding.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Career Coaching</h2>
          <p className="text-sm mt-2">
            Professional career guidance, interview preparation, and employability improvement strategies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-bold">Job Applications</h2>
          <p className="text-sm mt-2">
            Cover letters, job application support, and strategic career positioning assistance.
          </p>
        </div>

      </section>

      {/* PACKAGES */}
      <section className="grid md:grid-cols-3 gap-6 p-10">

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
              WhatsApp your CV and target role for professional assessment.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">
              2. AI + Human Review
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              We analyze ATS compatibility, recruiter appeal, and career positioning.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">
              3. Receive Your Transformation
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Receive your professionally optimized CV and career recommendations.
            </p>
          </div>

        </div>

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
