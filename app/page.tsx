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
        <h1 className="text-4xl font-bold">Clever Career Coaching</h1>
        <p className="mt-4">Get Hired Faster With Professional Written ATS CV & LinkedIn services</p>

        We rewrite your CV, optimise your LinkedIn profile and position you for interviews in months- not years.

        <a
          href="https://wa.me/27716808027"
          className="inline-block mt-6 bg-green-500 px-6 py-3 rounded-xl font-semibold"
        >
          
          ✔ ATS-Compliant CVs
          ✔ LinkedIn Optimisation
          ✔ Interview Preparation
          ✔ Fast Turnaround (24–72h)
          
          WhatsApp for Free CV Review
        </a>
      </section>

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

    </main>
  );
}
