export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-slate-100/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-xl shadow-indigo-500/5">
            <div className="prose max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
                Welcome! I'm a passionate gamer and motivational speaker dedicated to
                helping you unlock your full potential both in gaming and life. With
                years of experience in competitive gaming and personal development, I
                combine the best of both worlds to inspire and empower.
              </p>

              <div className="grid md:grid-cols-2 gap-10 mt-10">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-indigo-600 mb-5">
                    🎮 Gaming Excellence
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>Competitive gaming experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>Game strategy and coaching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>Community building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-3 mt-1">•</span>
                      <span>Esports insights</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-600 mb-5">
                    💪 Personal Growth
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span>Motivational speaking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span>Mindset coaching</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span>Goal achievement strategies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-3 mt-1">•</span>
                      <span>Leadership development</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-lg text-gray-600 text-center font-light">
                  Ready to level up your game and life? Let's connect and start your
                  journey to greatness!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

