import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";

export const metadata = { title: "Work & Experience" };

export default function ExperiencesPage() {
  return (
    <div className="pt-16">
      <Work />
      <Experience />
    </div>
  );
}
