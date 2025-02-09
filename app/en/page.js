'use client';

import Link from 'next/link';

export default function EnPage() {
  const checkoutLink = 'https://buy.stripe.com/test_7sIdTW6twfSIbmMfYY';

  const ClockIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const VideoIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );

  const CurrencyIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-8">
          <Link
            href="/ja"
            className="px-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            日本語
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Intensive English Bootcamp
            </h1>
            <p className="text-2xl text-gray-700">
              Master English Grammar in Just 9 Intensive Sessions!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Course Overview</h2>
              <p className="text-lg opacity-90">
                A short-term, intensive English learning program designed for busy Japanese professionals
              </p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <ClockIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Session Length</h3>
                      <p className="text-gray-600">90 minutes × 9 sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <CalendarIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Schedule</h3>
                      <p className="text-gray-600">Mon-Fri (2 weeks)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <VideoIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Format</h3>
                      <p className="text-gray-600">Online via Google Meets</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <CurrencyIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Time</h3>
                      <p className="text-gray-600">8:00 PM - 9:30 PM JST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Curriculum</h3>
              <ul className="space-y-4">
                {[
                  "Mindset and Environment Setting",
                  "Basic Structures (SVO, SVOO, SVC, SVOC)",
                  "Mastering Tenses",
                  "Auxiliary Verbs Explained",
                  "Prepositions Visualized",
                  "Clauses Demystified",
                  "Comparison Techniques",
                  "Causative and Passive Verbs",
                  "Relative Clauses"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">{index + 1}.</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Features</h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Time-Efficient",
                    desc: "Designed for busy adults with a focused, intensive approach"
                  },
                  {
                    title: "Clear Explanations",
                    desc: "Beginner-friendly with detailed Japanese explanations"
                  },
                  {
                    title: "Learn from Anywhere",
                    desc: "Save time with online sessions via Google Meets"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Sign Up & Contact</h3>
            <p className="mb-4 opacity-90">
              Have questions? Feel free to reach out to us
            </p>
             <div className="text-2xl font-bold mb-4">Price: ¥50,000</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={checkoutLink}
                target="_blank"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold hover:scale-105 transform"
              >
                Enroll Now
              </Link>
              <a
                href="mf.nozawa.day@gmail.com"
                className="px-8 py-4 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-bold hover:scale-105 transform"
              >
                Contact via Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
