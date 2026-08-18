import React from 'react';
import { TRANSLATIONS } from '../../../constants/translations';
import homeIcon from '../../../assets/blog/homeicon.svg';
import './blogBanner.css';

export interface BannerBreadcrumb {
  label: string;
  href?: string;
}

export interface BannerTag {
  name: string;
  color?: 'primary' | 'dark';
}

const BANNER_TAGS: BannerTag[] = [
  { name: TRANSLATIONS.blogBanner.tags.shopping, color: 'primary' },
  { name: TRANSLATIONS.blogBanner.tags.recipes, color: 'dark' },
  { name: TRANSLATIONS.blogBanner.tags.kitchen, color: 'primary' },
  { name: TRANSLATIONS.blogBanner.tags.news, color: 'primary' },
  { name: TRANSLATIONS.blogBanner.tags.food, color: 'primary' },
];

interface BlogBannerProps {
  title?: string;
  breadcrumbs?: BannerBreadcrumb[];
  tags?: (string | BannerTag)[];
  activeTag?: string;
  onTagClick?: (tagName: string) => void;
  onTagRemove?: (tagName: string) => void;
}

export const BlogBanner: React.FC<BlogBannerProps> = ({
  title = TRANSLATIONS.blogBanner.title,
  breadcrumbs = [
    { label: TRANSLATIONS.blogBanner.home, href: '#/' },
    { label: TRANSLATIONS.blogBanner.breadcrumbCurrent },
  ],
  tags = BANNER_TAGS,
  activeTag,
  onTagClick,
  onTagRemove,
}) => {
  const normalizedTags: BannerTag[] = tags.map((t) =>
    typeof t === 'string' ? { name: t, color: 'primary' as const } : t
  );

  return (
    <div className="o-blog-banner-wrapper">
      <div className="o-blog-banner">
        <div className="o-blog-banner__left">
          <h1 className="o-blog-banner__title">{title}</h1>
          <div className="o-blog-banner__breadcrumb">
            <img src={homeIcon} alt="" className="o-blog-banner__home-icon" />
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.label + idx}>
                {idx > 0 && <span className="o-blog-banner__separator">›</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="o-blog-banner__crumb-link">
                    {crumb.label}
                  </a>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {normalizedTags.length > 0 && (
          <div className="o-blog-banner__right">
            <div className="o-blog-banner__tags">
              {normalizedTags.map((tag) => (
                <button
                  key={tag.name}
                  type="button"
                  onClick={() => (onTagClick ? onTagClick(tag.name) : onTagRemove ? onTagRemove(tag.name) : undefined)}
                  className={`o-blog-banner__tag o-blog-banner__tag--${tag.color || 'primary'} ${activeTag === tag.name ? 'o-blog-banner__tag--active' : ''}`}
                >
                  <span
                    className="o-blog-banner__tag-icon"
                    onClick={(e) => {
                      if (onTagRemove) {
                        e.stopPropagation();
                        onTagRemove(tag.name);
                      }
                    }}
                  >
                    ✕
                  </span>
                  {tag.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};