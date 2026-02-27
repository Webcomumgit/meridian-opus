import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

const ArticleCard = ({ article, landscape = true }: { article: Article; landscape?: boolean }) => (
  <Link to={`/insights/${article.id}`} className="group block">
    <div className="border border-lightgrey overflow-hidden">
      <div className={landscape ? "aspect-video" : "aspect-[3/4]"}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="gold-overline text-[10px]">{article.category}</span>
        <h3 className="font-heading text-xl mt-2 mb-2 leading-snug">{article.title}</h3>
        <p className="font-body text-xs text-muted-foreground">{article.date}</p>
        <p className="font-body text-sm text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
      </div>
    </div>
  </Link>
);

export default ArticleCard;
