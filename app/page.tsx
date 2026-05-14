"use client";

export default function Home() {
  const services = [
    { title: "ATS CV Revamp", description: "CVs designed to pass recruitment systems." },
    { title: "LinkedIn Optimization", description: "Improve visibility to recruiters." },
    { title: "Career Coaching", description: "Interview prep and guidance." },
    { title: "Job Applications", description: "Cover letters and job strategy." },
  ];

  const packages = [
  {
    name: "ATS Career Scan™",
    price: "R100",
    features: [
      "AI Career Diagnostic",
      "ATS Compatibility Scoring",
      "Recruiter Readiness Assessment",
      "Keyword Optimization Analysis",
      "LinkedIn Readiness Evaluation",
      "Career Positioning Insights",
      "Interview Potential Review",
      "Strategic Improvement Recommendations",
    ],
  },

  {
    name: "Professional Career Optimization™",
    price: "R350",
    features: [
      "AI + Human CV Transformation",
      "Full ATS CV Rewrite",
      "Executive Summary Enhancement",
      "Achievement-Driven Positioning",
      "Professional Formatting",
      "LinkedIn Optimization",
      "Recruiter-Focused Language",
      "ATS Compatibility Enhancement",
      "Career Competitiveness Review",
      "Word + PDF Delivery",
    ],
  },

  {
    name: "Executive Career Acceleration™",
    price: "R750+",
    features: [
      "Premium Career Transformation",
      "Executive ATS Analysis",
      "Executive-Level CV Transformation",
      "Leadership Positioning",
      "Executive LinkedIn Branding",
      "Personal Brand Strategy",
      "Interview Coaching Preparation",
      "Executive Communication Guidance",
      "Salary & Career Positioning Guidance",
      "Recruiter Competitiveness Analysis",
    ],
  },
];

  return (
    <main className="bg-gray-50 text-gray-900">

      {/* HERO */}
<section className="bg-black text-white py-20 text-center px-6">

  <h1 className="text-4xl md:text-5xl font-bold">
    Clever Career Coaching
  </h1>

  <p className="mt-6 text-xl font-semibold">
    Get Hired Faster With Professionally Written ATS CV & LinkedIn Services
  </p>

  <p className="mt-4 max-w-3xl mx-auto text-gray-300">
    We rewrite your CV, optimise your LinkedIn profile, and strategically position you for interviews and career growth opportunities.
  </p>

  <div className="mt-8 flex flex-col gap-2 text-sm md:text-base">
    <p>✔️ ATS-Compliant CVs</p>
    <p>✔️ LinkedIn Optimisation</p>
    <p>✔️ Interview Preparation</p>
    <p>✔️ Fast Turnaround (24–72 Hours)</p>
  </div>

  <a
    href="https://wa.me/27716808027"
    className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold"
  >
    WhatsApp for Free CV Review
  </a>



      {/* SERVICES */}
      <section className="grid md:grid-cols-4 gap-6 p-10">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-bold">{s.title}</h2>
            <p className="text-sm mt-2">{s.description}</p>
          </div>
        ))}
      </section>

      {/* PACKAGES */}
      <section className="grid md:grid-cols-3 gap-6 p-10">
        {packages.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="text-2xl my-2">{p.price}</p>

            <ul className="text-sm">
              {p.features.map((f, j) => (
                <li key={j}>✓ {f}</li>
              ))}
            </ul>

            <a
              href="https://wa.me/27716808027"
              className="block mt-4 bg-black text-white text-center py-2 rounded"
            >
              Get Started
            </a>
          </div>
        ))}
      </section>
{/* WHY CHOOSE US */}
<section className="bg-white py-16 px-6 text-center">

  <h2 className="text-3xl font-bold">
    Why Choose Clever Career Coaching?
  </h2>

  <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
    Combining AI-powered career intelligence with human strategic positioning to help professionals compete in modern recruitment markets.
  </p>

  <div className="grid md:grid-cols-3 gap-6 mt-12">

    <div className="bg-gray-100 p-6 rounded-xl shadow">
      <h3 className="font-bold text-lg">ATS Optimization</h3>
      <p className="mt-2 text-sm text-gray-600">
        Professionally optimized CVs designed to improve ATS compatibility and recruiter visibility.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-xl shadow">
      <h3 className="font-bold text-lg">AI + Human Strategy</h3>
      <p className="mt-2 text-sm text-gray-600">
        Combining advanced AI analysis with human career positioning expertise for stronger results.
      </p>
    </div>

    <div className="bg-gray-100 p-6 rounded-xl shadow">
      <h3 className="font-bold text-lg">Career Acceleration</h3>
      <p className="mt-2 text-sm text-gray-600">
        Helping professionals strengthen employability, interview readiness, and market competitiveness.
      </p>
    </div>

  </div>

</section>
    </main>
  );
}
