export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 pt-20"
    >
      {/* Elegant background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="block text-gray-900 mb-3">Gamer &</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Motivational Speaker
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Level up your gaming skills and unlock your full potential through
            motivation, strategy, and community
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-10">
            <a
              href="#games"
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40"
            >
              Explore Games
            </a>
            <a
              href="#thoughts"
              className="px-10 py-4 border-2 border-indigo-600/30 rounded-xl text-indigo-700 font-semibold text-lg hover:bg-indigo-50 hover:border-indigo-600/50 transform hover:scale-105 transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              Get Inspired
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

