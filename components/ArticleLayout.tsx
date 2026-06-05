interface ArticleLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function ArticleLayout({
  children,
  className = "",
}: ArticleLayoutProps) {
  return (
    <div className={`page-shell ${className}`}>
      <div className="page-surface page-surface--article">{children}</div>
    </div>
  );
}
