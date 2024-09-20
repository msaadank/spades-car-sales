import { Hero } from "@/components";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="overflow-hidden">
        <Hero />
      </main>
    </Layout>

  );
}
