import type { PropsWithChildren } from "react";
import { Nav } from "./Nav";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="max-w-7xl mx-auto p-4">
      <Nav />
      {children}
    </main>
  )
}
