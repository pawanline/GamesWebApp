'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Thought {
  id: number;
  quote: string;
  author: string;
  category: string;
  image: string;
  imageAlt: string;
  imageTitle: string;
  imageSubtitle: string;
}

const motivationalThoughts: Thought[] = [
  {
    id: 1,
    quote:
      'Every champion was once a beginner who refused to give up. Your journey to greatness starts with a single step.',
    author: 'Gaming Legend',
    category: 'Persistence',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    imageAlt: 'Mountain peak at sunrise',
    imageTitle: 'Rise Above',
    imageSubtitle: 'Every peak was once a valley',
  },
  {
    id: 2,
    quote:
      'In gaming and life, failure is just practice for success. Each defeat teaches you something new.',
    author: 'Pro Gamer',
    category: 'Resilience',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    imageAlt: 'Sunrise over mountains with clouds',
    imageTitle: 'New Beginnings',
    imageSubtitle: 'After every storm comes a rainbow',
  },
  {
    id: 3,
    quote:
      'Teamwork makes the dream work. Surround yourself with players who lift you higher.',
    author: 'Esports Champion',
    category: 'Collaboration',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    imageAlt: 'People hiking together on mountain',
    imageTitle: 'Together We Climb',
    imageSubtitle: 'Unity creates strength',
  },
  {
    id: 4,
    quote:
      'Skills are developed, not discovered. Every hour you practice is an investment in your future.',
    author: 'Motivational Speaker',
    category: 'Growth',
    image: 'https://images.unsplash.com/photo-1464822759844-d150ad6bfbfc?w=800&q=80',
    imageAlt: 'Growing plant sprouting from ground',
    imageTitle: 'Keep Growing',
    imageSubtitle: 'Every day is a chance to improve',
  },
  {
    id: 5,
    quote:
      'The best time to start was yesterday. The second best time is now. Stop waiting for the perfect moment.',
    author: 'Life Coach',
    category: 'Action',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80',
    imageAlt: 'Person running at sunrise',
    imageTitle: 'Start Today',
    imageSubtitle: 'The journey of a thousand miles begins with one step',
  },
  {
    id: 6,
    quote:
      'Your mindset is your greatest weapon. Believe you can, and you\'re halfway there.',
    author: 'Mindset Master',
    category: 'Mindset',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80',
    imageAlt: 'Person meditating on mountain top',
    imageTitle: 'Power Within',
    imageSubtitle: 'Your thoughts shape your reality',
  },
  {
    id: 7,
    quote:
      'Champions aren\'t made in comfort zones. Push beyond your limits and watch yourself grow.',
    author: 'Elite Competitor',
    category: 'Challenge',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    imageAlt: 'Rock climber scaling cliff',
    imageTitle: 'Push Forward',
    imageSubtitle: 'Growth happens outside your comfort zone',
  },
  {
    id: 8,
    quote:
      'Focus on progress, not perfection. Small improvements daily lead to extraordinary results.',
    author: 'Success Coach',
    category: 'Progress',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',
    imageAlt: 'Staircase going up',
    imageTitle: 'Step by Step',
    imageSubtitle: 'Progress, not perfection',
  },
  {
    id: 9,
    quote:
      'The grind never stops. While others rest, champions train. Your dedication will pay off.',
    author: 'Pro Athlete',
    category: 'Dedication',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    imageAlt: 'Athlete training at dawn',
    imageTitle: 'Keep Grinding',
    imageSubtitle: 'Dedication creates champions',
  },
  {
    id: 10,
    quote:
      'Turn your setbacks into comebacks. Every obstacle is an opportunity in disguise.',
    author: 'Comeback King',
    category: 'Resilience',
    image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&q=80',
    imageAlt: 'Phoenix rising from ashes',
    imageTitle: 'Rise Again',
    imageSubtitle: 'Turn setbacks into comebacks',
  },
  {
    id: 11,
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
    category: 'Courage',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    imageAlt: 'Brave warrior standing on cliff',
    imageTitle: 'Be Courageous',
    imageSubtitle: 'Courage is the key to success',
  },
  {
    id: 12,
    quote:
      'The only way to do great work is to love what you do. Passion fuels excellence.',
    author: 'Steve Jobs',
    category: 'Passion',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    imageAlt: 'Artist creating masterpiece',
    imageTitle: 'Follow Passion',
    imageSubtitle: 'Love what you do, do what you love',
  },
  {
    id: 13,
    quote:
      'Don\'t watch the clock; do what it does. Keep going. Time is your greatest ally.',
    author: 'Sam Levenson',
    category: 'Perseverance',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    imageAlt: 'Clock in nature setting',
    imageTitle: 'Keep Moving',
    imageSubtitle: 'Perseverance is the key',
  },
  {
    id: 14,
    quote:
      'Victory belongs to the most persevering. Consistency beats intensity every time.',
    author: 'Napoleon Bonaparte',
    category: 'Consistency',
    image: 'https://images.unsplash.com/photo-1490971774357-ceee54e7e9f2?w=800&q=80',
    imageAlt: 'Waves consistently hitting shore',
    imageTitle: 'Stay Consistent',
    imageSubtitle: 'Small steps, big results',
  },
  {
    id: 15,
    quote:
      'The difference between ordinary and extraordinary is that little extra effort you give.',
    author: 'Jimmy Johnson',
    category: 'Excellence',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
    imageAlt: 'Golden hour landscape',
    imageTitle: 'Be Extraordinary',
    imageSubtitle: 'Excellence is a choice',
  },
  {
    id: 16,
    quote:
      'Dream big, work hard, stay focused, and surround yourself with positive people.',
    author: 'Success Mentor',
    category: 'Vision',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
    imageAlt: 'Person looking at stars at night',
    imageTitle: 'Dream Big',
    imageSubtitle: 'Vision without action is just a dream',
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
      className="py-24 bg-gradient-to-br from-gray-50 via-indigo-50/20 to-purple-50/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/20 border-4 border-white transition-all duration-500 ease-in-out">
                <Image
                  key={thought.id}
                  src={thought.image}
                  alt={thought.imageAlt}
                  fill
                  className="object-cover transition-opacity duration-500"
                  priority={currentThought === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-2xl font-bold mb-2 transition-all duration-500">{thought.imageTitle}</p>
                  <p className="text-sm opacity-90 transition-all duration-500">{thought.imageSubtitle}</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-indigo-200 to-purple-200 rounded-3xl opacity-30"></div>
            </div>

            {/* Quote Section */}
            <div className="relative order-1 lg:order-2">
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200/80 shadow-2xl shadow-indigo-500/10">
                {/* Quote icon */}
                <div className="mb-6">
                  <svg
                    className="w-16 h-16 text-indigo-400 opacity-30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote text */}
                <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed mb-8 font-light">
                  {thought.quote}
                </p>

                {/* Author and category */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full text-indigo-700 text-sm font-medium border border-indigo-200/50">
                      {thought.category}
                    </span>
                    <span className="text-gray-400">—</span>
                    <span className="text-gray-700 font-semibold">{thought.author}</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center space-x-4 mt-10 pt-8 border-t border-gray-100">
                  <button
                    onClick={goToPrevious}
                    className="p-3 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/50 rounded-xl text-indigo-600 hover:text-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                    aria-label="Previous thought"
                  >
                    <svg
                      className="w-5 h-5"
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
                  <div className="flex space-x-2 flex-wrap justify-center max-w-md">
                    {motivationalThoughts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentThought(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`h-2 rounded-full transition-all duration-200 ${
                          index === currentThought
                            ? 'bg-indigo-600 w-8 shadow-md'
                            : 'bg-gray-300 hover:bg-gray-400 w-2'
                        }`}
                        aria-label={`Go to thought ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={goToNext}
                    className="p-3 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/50 rounded-xl text-indigo-600 hover:text-indigo-700 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                    aria-label="Next thought"
                  >
                    <svg
                      className="w-5 h-5"
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
                <div className="text-center mt-6">
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="text-sm text-gray-500 hover:text-indigo-600 transition-colors font-medium flex items-center justify-center gap-2 mx-auto"
                  >
                    {isAutoPlaying ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                        Pause Auto-rotate
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        Play Auto-rotate
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

