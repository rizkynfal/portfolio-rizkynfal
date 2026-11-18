import CaseStudy from "@/components/sections/CaseStudy";
import { getProject } from "@/data/profile";

const project = getProject("saunders");
export const metadata = { title: project.title, description: project.summary };

export default function Page() {
  return <CaseStudy project={project} />;
}
