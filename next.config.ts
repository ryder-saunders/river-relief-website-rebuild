import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/google",
        destination: "https://g.page/r/Cdlk4n-kpZQVEAI/review",
        permanent: false,
      },
      {
        source: "/trustpilot",
        destination: "https://www.trustpilot.com/evaluate/riverrelief.com",
        permanent: false,
      },
      {
        source: "/BBB",
        destination: "https://www.bbb.org/santa-barbara/review/92097314/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
