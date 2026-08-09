import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Layne Fitness", short_name: "Layne Fitness", description: "Personalized online fitness and nutrition coaching.", start_url: "/", display: "standalone", background_color: "#fbfbfb", theme_color: "#171513", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
