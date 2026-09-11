import type { Illustration } from '../data/illustrations'

type GalleryProps = {
  items: Illustration[]
  onSelect: (item: Illustration) => void
}

export function Gallery({ items, onSelect }: GalleryProps) {
  return (
    <ul className="gallery" aria-label="Illustration gallery">
      {items.map((item) => (
        <li key={item.id} className="gallery-item">
          <button
            type="button"
            className="gallery-card"
            onClick={() => onSelect(item)}
            aria-label={`View ${item.title}`}
          >
            <div className="gallery-thumb">
              <img src={item.src} alt="" loading="lazy" />
              {item.placeholder && (
                <span className="badge">Placeholder</span>
              )}
            </div>
            <div className="gallery-caption">
              <span className="gallery-title">{item.title}</span>
              {item.description && (
                <span className="gallery-desc">{item.description}</span>
              )}
            </div>
          </button>
        </li>
      ))}
    </ul>
  )
}
