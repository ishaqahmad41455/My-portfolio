// A lightweight, dependency-free animated DevOps illustration for the hero
// section: a CI/CD pipeline (code -> build -> cloud) with traveling pulse
// dots, plus a small looping "terminal" card. Pure SVG + CSS animation —
// no WebGL/GLTF, so it can't suffer the flicker issues the 3D models had.
const PIPELINE_PATH =
  "M 70 360 C 140 230, 230 230, 280 230 S 420 230, 500 90";

const DevOpsHeroVisual = () => {
  return (
    <div className="devops-hero-visual">
      <div className="devops-glow devops-glow-1" />
      <div className="devops-glow devops-glow-2" />

      <svg
        viewBox="0 0 560 420"
        className="devops-pipeline-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pipelineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4cc9f0" />
            <stop offset="100%" stopColor="#9d4edd" />
          </linearGradient>
        </defs>

        <path
          d={PIPELINE_PATH}
          fill="none"
          stroke="url(#pipelineGradient)"
          strokeWidth="2"
          strokeDasharray="6 8"
          opacity="0.5"
        />

        {/* traveling pulse dots representing a deploy moving through the pipeline */}
        <circle r="5" fill="#a259ff">
          <animateMotion dur="4s" repeatCount="indefinite" path={PIPELINE_PATH} />
        </circle>
        <circle r="4" fill="#4cc9f0" opacity="0.75">
          <animateMotion dur="4s" begin="1.3s" repeatCount="indefinite" path={PIPELINE_PATH} />
        </circle>
        <circle r="4" fill="#4cc9f0" opacity="0.5">
          <animateMotion dur="4s" begin="2.6s" repeatCount="indefinite" path={PIPELINE_PATH} />
        </circle>

        {/* Node 1: Code */}
        <g transform="translate(70,360)">
          <circle r="34" className="node-ring">
            <animate attributeName="r" values="34;44;34" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="30" className="node-circle" />
          <text textAnchor="middle" dominantBaseline="central" className="node-icon">
            {"</>"}
          </text>
        </g>

        {/* Node 2: Build/Automate */}
        <g transform="translate(280,230)">
          <circle r="34" className="node-ring">
            <animate
              attributeName="r"
              values="34;44;34"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0;0.5"
              dur="3s"
              begin="1s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="30" className="node-circle" />
          <text textAnchor="middle" dominantBaseline="central" className="node-icon">
            {"{ }"}
          </text>
        </g>

        {/* Node 3: Cloud / Deploy */}
        <g transform="translate(500,90)">
          <circle r="38" className="node-ring node-ring-accent">
            <animate
              attributeName="r"
              values="38;50;38"
              dur="3s"
              begin="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.55;0;0.55"
              dur="3s"
              begin="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle r="34" className="node-circle node-circle-accent" />
          <text
            textAnchor="middle"
            dominantBaseline="central"
            className="node-icon node-icon-lg"
          >
            &#9729;
          </text>
        </g>
      </svg>

      <div className="devops-terminal">
        <div className="devops-terminal-header">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="devops-terminal-lines">
          <p>
            <span className="prompt">$</span> terraform apply
          </p>
          <p className="line-dim">Provisioning infrastructure…</p>
          <p>
            <span className="prompt">$</span> docker build -t app .
          </p>
          <p className="line-dim">Deploying to production…</p>
          <p className="line-success">✓ Deployment successful</p>
        </div>
      </div>
    </div>
  );
};

export default DevOpsHeroVisual;
