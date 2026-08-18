import { Text } from '../../atoms';
import './blogPostCard.css';

interface BlogPostCardProps {
  id?: string;
  imageSrc: string;
  badge: string;
  category: string;
  title: string;
  date: string;
  views: string;
  readTime: string;
}

export const BlogPostCard = ({ id, imageSrc, badge, category, title, date, views, readTime }: BlogPostCardProps) => {
  const postHref = id ? `#/blog-post?id=${encodeURIComponent(id)}` : '#/blog-post';

  return (
    <article className="m-blog-post-card">
      <a href={postHref} className="m-blog-post-card__media-link">
        <div className="m-blog-post-card__media">
          <img src={imageSrc} alt={title} className="m-blog-post-card__img" />
          <span className="m-blog-post-card__badge">{badge}</span>
        </div>
      </a>

      <Text variant="category" as="span" className="m-blog-post-card__category">
        {category}
      </Text>

      <a href={postHref} className="m-blog-post-card__title-link">
        <Text variant="prod-title" as="h3" className="m-blog-post-card__title">
          {title}
        </Text>
      </a>

      <div className="m-blog-post-card__meta">
        <span className="m-blog-post-card__meta-item">{date}</span>
        <span className="m-blog-post-card__meta-divider">•</span>
        <span className="m-blog-post-card__meta-item">{views} Views</span>
        <span className="m-blog-post-card__meta-divider">•</span>
        <span className="m-blog-post-card__meta-item">{readTime}</span>
      </div>
    </article>
  );
};