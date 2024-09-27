import { Hero } from "@/components";
import { Layout } from "@/components/index";

export default function Home() {
  return (
    <Layout>
      <main className="overflow-hidden">
        <Hero />
      </main>
    </Layout>

  );
}
