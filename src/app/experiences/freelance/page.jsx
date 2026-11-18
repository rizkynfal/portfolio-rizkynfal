import CompanyProjects from "@/components/sections/CompanyProjects";
import { companies } from "@/data/profile";

export const metadata = { title: companies.freelance.name };

export default function FreelancePage() {
  return <CompanyProjects id="freelance" />;
}
