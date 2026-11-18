import CompanyProjects from "@/components/sections/CompanyProjects";
import { companies } from "@/data/profile";

export const metadata = { title: companies.ismart.name };

export default function IsmartPage() {
  return <CompanyProjects id="ismart" />;
}
