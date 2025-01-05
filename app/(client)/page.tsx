import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Header } from "@radix-ui/react-accordion";



export default function Home() {
  return (
    <div>
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}
