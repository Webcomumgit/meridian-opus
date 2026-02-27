import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getArticleById, articles } from "@/data/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = getArticleById(id || "1");

  if (!article) return <div className="min-h-screen flex items-center justify-center font-heading text-2xl">Article not found</div>;

  const related = articles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="bg-offwhite pt-32 pb-16 px-6 text-center">
        <span className="gold-overline">{article.category}</span>
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto mt-4 leading-tight">
          {article.title}
        </h1>
        <div className="flex items-center justify-center gap-4 mt-6 font-body text-sm text-muted-foreground">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.author}</span>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Body */}
          <div className="lg:col-span-2">
            {article.content.slice(0, 2).map((p, i) => (
              <p key={i} className="font-body text-muted-foreground leading-relaxed mb-6">{p}</p>
            ))}

            {/* Pull quote */}
            <blockquote className="border-l-2 border-gold pl-6 my-10">
              <p className="font-heading text-xl md:text-2xl italic text-gold leading-relaxed">
                {article.pullQuote}
              </p>
            </blockquote>

            {/* Inline image */}
            <div className="my-10 aspect-video overflow-hidden">
              <img src={article.inlineImage} alt="Article illustration" className="w-full h-full object-cover" loading="lazy" />
            </div>

            {article.content.slice(2).map((p, i) => (
              <p key={i} className="font-body text-muted-foreground leading-relaxed mb-6">{p}</p>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-heading text-xl mb-6">Related Articles</h3>
              <div className="space-y-6">
                {related.map((a) => (
                  <Link key={a.id} to={`/insights/${a.id}`} className="block group">
                    <div className="aspect-video overflow-hidden mb-3">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                    <span className="gold-overline text-[10px]">{a.category}</span>
                    <h4 className="font-heading text-base mt-1 leading-snug">{a.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ArticleDetail;
