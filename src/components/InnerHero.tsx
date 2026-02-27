const InnerHero = ({
  overline,
  title,
  subtitle,
  variant = "navy",
}: {
  overline?: string;
  title: string;
  subtitle?: string;
  variant?: "navy" | "offwhite" | "image";
}) => {
  const bg = variant === "navy" ? "bg-navy text-navy-foreground" : "bg-offwhite text-charcoal";
  return (
    <section className={`${bg} pt-32 pb-20 md:pt-40 md:pb-24 px-6 text-center`}>
      {overline && <p className="gold-overline mb-4">{overline}</p>}
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="font-body text-base md:text-lg text-current/70 mt-4 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </section>
  );
};

export default InnerHero;
