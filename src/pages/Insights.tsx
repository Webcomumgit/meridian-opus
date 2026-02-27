import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InnerHero from "@/components/InnerHero";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Insights = () => (
  <>
    <Navigation />
    <InnerHero
      variant="offwhite"
      overline="NEWS & ANALYSIS"
      title="News & Insights"
      subtitle="Market intelligence, investment commentary, and strategic perspectives from our research team."
    />

    <section className="section-padding bg-offwhite">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </section>

    <Footer />
  </>
);

export default Insights;
