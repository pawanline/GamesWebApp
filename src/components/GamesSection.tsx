'use client';

interface Game {
  id: number;
  title: string;
  description: string;
  image?: string;
  links: {
    name: string;
    url: string;
    icon?: string;
  }[];
}

const games: Game[] = [
  {
    id: 1,
    title: 'Fortnite',
    description:
      'Join the battle royale and build your way to victory. Master the art of survival and strategy.',
    links: [
      { name: 'Download on Epic Games', url: 'https://www.epicgames.com/fortnite' },
      { name: 'Watch Gameplay', url: 'https://www.youtube.com' },
      { name: 'Join Community', url: 'https://discord.gg' },
    ],
  },
  {
    id: 2,
    title: 'Call of Duty: Warzone',
    description:
      'Experience intense multiplayer combat. Dominate the battlefield with skill and precision.',
    links: [
      { name: 'Download on Battle.net', url: 'https://www.callofduty.com/warzone' },
      { name: 'Watch Gameplay', url: 'https://www.youtube.com' },
      { name: 'Join Community', url: 'https://discord.gg' },
    ],
  },
  {
    id: 3,
    title: 'Valorant',
    description:
      'Tactical FPS meets character abilities. Perfect your aim and strategy in competitive matches.',
    links: [
      { name: 'Download on Riot Games', url: 'https://playvalorant.com' },
      { name: 'Watch Gameplay', url: 'https://www.youtube.com' },
      { name: 'Join Community', url: 'https://discord.gg' },
    ],
  },
  {
    id: 4,
    title: 'Apex Legends',
    description:
      'Fast-paced battle royale with unique legends. Form squads and fight for survival.',
    links: [
      { name: 'Download on Origin', url: 'https://www.ea.com/games/apex-legends' },
      { name: 'Watch Gameplay', url: 'https://www.youtube.com' },
      { name: 'Join Community', url: 'https://discord.gg' },
    ],
  },
  {
    id: 5,
    title: 'League of Legends',
    description:
      'Master the MOBA genre. Strategy, teamwork, and skill combine in epic battles.',
    links: [
      { name: 'Download on Riot Games', url: 'https://www.leagueoflegends.com' },
      { name: 'Watch Gameplay', url: 'https://www.youtube.com' },
      { name: 'Join Community', url: 'https://discord.gg' },
    ],
  },
  {
    id: 6,
    title: 'Minecraft',
    description:
      'Build, explore, and create in the ultimate sandbox experience. Your imagination is the limit.',
    links: [
      { name: 'Download on Minecraft.net', url: 'https://www.minecraft.net' },
      { name: 'Watch Gameplay', url: 'https://www.youtube.com' },
      { name: 'Join Community', url: 'https://discord.gg' },
    ],
  },
];

export default function GamesSection() {
  return (
    <section
      id="games"
      className="py-24 bg-slate-50/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Games
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Discover amazing games and join the community. Click the links below to get started!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-2xl p-8 border border-gray-200/80 hover:border-indigo-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10 group"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">{game.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{game.description}</p>
              <div className="space-y-3">
                {game.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 border border-indigo-200/50 hover:border-indigo-300 rounded-lg text-indigo-700 hover:text-indigo-800 transition-all duration-200 text-center text-sm font-medium shadow-sm hover:shadow-md"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

