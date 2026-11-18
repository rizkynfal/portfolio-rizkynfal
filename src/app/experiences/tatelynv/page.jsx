import CaseStudy from "@/components/sections/CaseStudy";
import { getProject } from "@/data/profile";

const project = getProject("hazob");
export const metadata = { title: project.title };

export default function TatelyNvPage() {
  return <CaseStudy project={project} />;
}
