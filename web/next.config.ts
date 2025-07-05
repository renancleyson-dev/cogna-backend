import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // We will run tsc on CI/CD so we can use types from multiple projects
  typescript: {
    ignoreBuildErrors: true,
  },};

export default nextConfig;
