import CompanyProjects from "@/components/sections/CompanyProjects";
import { companies } from "@/data/profile";

export const metadata = { title: companies.altimeda.name };

export default function AltimedaPage() {
  return <CompanyProjects id="altimeda" />;
}
