import { ReactNode } from "react";

import Footer from "./footer";

export default function Content({}: {}) {
  return (
    <main className="bg-white">
      {/* <MenuNav name={name} />
      <div className="min-vh-100 text-white">{children}</div>
      <Footer /> */}
      <Footer></Footer>
    </main>
  );
}
