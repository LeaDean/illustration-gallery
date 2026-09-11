export type Illustration = {
  id: string
  title: string
  description?: string
  /** Path under public/, without a leading slash, e.g. illustrations/my-piece.jpg */
  src: string
  /** Optional: mark as placeholder art */
  placeholder?: boolean
}

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

/**
 * Add new illustrations here.
 * 1. Drop the image file into public/illustrations/
 * 2. Add an entry below with src like illustrations/your-file.ext
 */
export const illustrations: Illustration[] = [
  {
    id: 'placeholder-1',
    title: 'Soft Horizon',
    description: 'Placeholder — replace with your own work.',
    src: withBase('illustrations/placeholder-1.svg'),
    placeholder: true,
  },
  {
    id: 'placeholder-2',
    title: 'Quiet Peak',
    description: 'Placeholder — replace with your own work.',
    src: withBase('illustrations/placeholder-2.svg'),
    placeholder: true,
  },
  {
    id: 'placeholder-3',
    title: 'Muted Frame',
    description: 'Placeholder — replace with your own work.',
    src: withBase('illustrations/placeholder-3.svg'),
    placeholder: true,
  },
  {
    id: 'placeholder-4',
    title: 'Garden Light',
    description: 'Placeholder — replace with your own work.',
    src: withBase('illustrations/placeholder-4.svg'),
    placeholder: true,
  },
  {
    id: 'placeholder-5',
    title: 'Warm Bloom',
    description: 'Placeholder — replace with your own work.',
    src: withBase('illustrations/placeholder-5.svg'),
    placeholder: true,
  },
  {
    id: 'placeholder-6',
    title: 'Overlapping Skies',
    description: 'Placeholder — replace with your own work.',
    src: withBase('illustrations/placeholder-6.svg'),
    placeholder: true,
  },
]
