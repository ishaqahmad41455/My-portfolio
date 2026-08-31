import { abilities } from "../constants";

const FeatureCards = () => (
  <section id="features" className="py-16 px-4 md:px-8">
    <div className="max-w-7xl mx-auto">

      {/* Header - matching Featured DevOps Projects */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
            Why Work With Me
          </h2>

          <p className="text-gray-400 text-sm">
            ✨ What Sets My Work Apart
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="project-card rounded-xl overflow-hidden flex flex-col
                       bg-[#1a1a2e] border border-[#2a2a4a]
                       hover:border-blue-400/50
                       transition-all duration-300
                       shadow-lg hover:shadow-blue-500/10
                       p-5"
          >
            {/* Icon */}
            <div
              className="w-10 h-10 rounded-full
                         bg-[#0f0f1a]
                         border border-[#2a2a4a]
                         flex items-center justify-center
                         mb-3
                         hover:scale-105
                         hover:border-blue-400/30
                         transition-all duration-300"
            >
              <img
                src={imgPath}
                alt={title}
                className="w-5 h-5 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-sm font-semibold leading-snug mb-1">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-xs leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;