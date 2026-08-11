import { Text, Button } from '../../atoms';
import { SidebarCategoryItem, SidebarTrendingItem } from '../../molecules';
import { TRANSLATIONS } from '../../../constants/translations';
import './blogSidebar.css';

interface CategoryData {
  icon: string;
  label: string;
  count: number;
}

interface TrendingData {
  imageSrc: string;
  title: string;
  price: string;
}

interface GalleryData {
  imageSrc: string;
}

interface BlogSidebarProps {
  categories: CategoryData[];
  trending: TrendingData[];
  gallery: GalleryData[];
  tags: string[];
}

export const BlogSidebar = ({ categories, trending, gallery, tags }: BlogSidebarProps) => {
  return (
    <aside className="o-blog-sidebar">
      <div className="o-blog-sidebar__search">
        <input
          type="text"
          placeholder={TRANSLATIONS.blogSidebar.searchPlaceholder}
          className="o-blog-sidebar__search-input"
        />
        <Button variant="icon" aria-label={TRANSLATIONS.blogSidebar.searchPlaceholder}>
          <img src="src/assets/blog/sideBar/search.svg" alt="" className="svg-icon-small" />
        </Button>
      </div>

      <div className="o-blog-sidebar__section">
        <Text variant="sec-title" as="h3" className="o-blog-sidebar__title o-blog-sidebar__title--underlined">
          {TRANSLATIONS.blogSidebar.category}
        </Text>
        <ul className="o-blog-sidebar__category-list">
          {categories.map((cat) => (
            <SidebarCategoryItem key={cat.label} icon={cat.icon} label={cat.label} count={cat.count} />
          ))}
        </ul>
      </div>

      <div className="o-blog-sidebar__section">
        <Text variant="sec-title" as="h3" className="o-blog-sidebar__title">
          {TRANSLATIONS.blogSidebar.trendingNow}
        </Text>
        <ul className="o-blog-sidebar__trending-list">
          {trending.map((item) => (
            <SidebarTrendingItem key={item.title} imageSrc={item.imageSrc} title={item.title} price={item.price} />
          ))}
        </ul>
      </div>

      <div className="o-blog-sidebar__section">
        <Text variant="sec-title" as="h3" className="o-blog-sidebar__title">
          {TRANSLATIONS.blogSidebar.gallery}
        </Text>
        <div className="o-blog-sidebar__gallery-grid">
          {gallery.map((item) => (
            <img key={item.imageSrc} src={item.imageSrc} alt="" className="o-blog-sidebar__gallery-img" />
          ))}
        </div>
      </div>

      <div className="o-blog-sidebar__section">
        <Text variant="sec-title" as="h3" className="o-blog-sidebar__title">
          {TRANSLATIONS.blogSidebar.popularTags}
        </Text>
        <div className="o-blog-sidebar__tags">
          {tags.map((tag) => (
            <span key={tag} className="o-blog-sidebar__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};