import type { ChildrenProps } from "../../types";
import Dashboard from "../dashboard/page";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <div className=" mx-auto bg-warmWhite">{children ?? <Dashboard />}</div>
  );
}
