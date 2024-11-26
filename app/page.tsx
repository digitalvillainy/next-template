import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "Home Page Description",
};

export default function Home(): JSX.Element {
  return (
    <div>
      <h1 className="text-5xl font-bold text-red-500">
        Home
      </h1>
      <p>
        Testing out Next.js
      </p>
    </div>
  );
}
