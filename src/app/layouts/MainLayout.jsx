import Dashboard from "../dashboard/page";
export default function MainLayout({ children }) {
  return (
    <div className="mx-auto ">{children ?? <Dashboard />}</div>
  );
}
