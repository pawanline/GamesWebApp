'use client';

import { useState, useEffect } from 'react';

interface Thought {
  id: number;
  quote: string;
  author: string;
  category: string;
}

const motivationalThoughts: Thought[] = [
  {
    id: 1,
    quote:
      'Every champion was once a beginner who refused to give up. Your journey to greatness starts with a single step.',
    author: 'Gaming Legend',
    category: 'Persistence',
  },
  {
    id: 2,
    quote:
      'In gaming and life, failure is just practice for success. Each defeat teaches you something new.',
    author: 'Pro Gamer',
    category: 'Resilience',
  },
  {
    id: 3,
    quote:
      'Teamwork makes the dream work. Surround yourself with players who lift you higher.',
    author: 'Esports Champion',
    category: 'Collaboration',
  },
  {
    id: 4,
    quote:
      'Skills are developed, not discovered. Every hour you practice is an investment in your future.',
    author: 'Motivational Speaker',
    category: 'Growth',
  },
  {
    id: 5,
    quote:
      'The best time to start was yesterday. The second best time is now. Stop waiting for the perfect moment.',
    author: 'Life Coach',
    category: 'Action',
  },
  {
    id: 6,
    quote:
      'Your mindset is your greatest weapon. Believe you can, and you\'re halfway there.',
    author: 'Mindset Master',
    category: 'Mindset',
  },
  {
    id: 7,
    quote:
      'Champions aren\'t made in comfort zones. Push beyond your limits and watch yourself grow.',
    author: 'Elite Competitor',
    category: 'Challenge',
  },
  {
    id: 8,
    quote:
      'Focus on progress, not perfection. Small improvements daily lead to extraordinary results.',
    author: 'Success Coach',
    category: 'Progress',
  },
  {
    id: 9,
    quote:
      'The grind never stops. While others rest, champions train. Your dedication will pay off.',
    author: 'Pro Athlete',
    category: 'Dedication',
  },
  {
    id: 10,
    quote:
      'Turn your setbacks into comebacks. Every obstacle is an opportunity in disguise.',
    author: 'Comeback King',
    category: 'Resilience',
  },
];

export default function MotivationalThoughts() {
  const [currentThought, setCurrentThought] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentThought((prev) => (prev + 1) % motivationalThoughts.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentThought((prev) => (prev + 1) % motivationalThoughts.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentThought((prev) =>
      prev === 0 ? motivationalThoughts.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const thought = motivationalThoughts[currentThought];

  return (
    <section
      id="thoughts"
      className="py-24 bg-gray-50/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Daily Motivation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Fuel your journey with daily inspiration and powerful thoughts
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-200/80 shadow-2xl shadow-indigo-500/5">
            {/* Quote */}
            <div className="text-center mb-8">
              <svg
                className="w-12 h-12 text-indigo-400 mx-auto mb-6 opacity-40"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8 font-light">
                {thought.quote}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <span className="inline-block px-5 py-1.5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full text-indigo-700 text-sm font-medium border border-indigo-200/50">
                  {thought.category}
                </span>
                <span className="text-gray-400">—</span>
                <span className="text-gray-700 font-medium">{thought.author}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-10">
              <button
                onClick={goToPrevious}
                className="p-3 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/50 rounded-xl text-indigo-600 hover:text-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Previous thought"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex space-x-2">
                {motivationalThoughts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentThought(index);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      index === currentThought
                        ? 'bg-indigo-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                    aria-label={`Go to thought ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-3 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/50 rounded-xl text-indigo-600 hover:text-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Next thought"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Auto-play toggle */}
            <div className="text-center mt-8">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-gray-500 hover:text-indigo-600 transition-colors font-medium"
              >
                {isAutoPlaying ? '⏸ Pause' : '▶ Play'} Auto-rotate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

