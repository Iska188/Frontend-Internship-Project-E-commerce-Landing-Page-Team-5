import React from 'react';
import { TRANSLATIONS } from '../../../constants/translations';
import homeIcon from '../../../assets/blog/homeicon.svg';
import './blogBanner.css';

const BANNER_TAGS = [
  { name: TRANSLATIONS.blogBanner.tags.shopping, color: 'primary' },
  { name: TRANSLATIONS.blogBanner.tags.recipes, color: 'dark' },
  { name: TRANSLATIONS.blogBanner.tags.kitchen, color: 'primary' },
  { name: TRANSLATIONS.blogBanner.tags.news, color: 'primary' },
  { name: TRANSLATIONS.blogBanner.tags.food, color: 'primary' },
];

export const BlogBanner: React.FC = () => {
  return (
    <div className="o-blog-banner-wrapper">
      <div className="o-blog-banner">
        <div className="o-blog-banner__left">
          <h1 className="o-blog-banner__title">{TRANSLATIONS.blogBanner.title}</h1>
          <div className="o-blog-banner__breadcrumb">
            <img src={homeIcon} alt="" className="o-blog-banner__home-icon" />
            <span>{TRANSLATIONS.blogBanner.home}</span>
            <span className="o-blog-banner__separator">›</span>
            <span>{TRANSLATIONS.blogBanner.breadcrumbCurrent}</span>
          </div>
        </div>

        <div className="o-blog-banner__right">
          <div className="o-blog-banner__tags">
            {BANNER_TAGS.map((tag) => (
              <button key={tag.name} className={`o-blog-banner__tag o-blog-banner__tag--${tag.color}`}>
                <span className="o-blog-banner__tag-icon">✕</span>
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};