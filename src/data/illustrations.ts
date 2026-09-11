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
    id: 'maypole',
    title: 'Maypole',
    description: 'Morris dancers and a village May Day crowd.',
    src: withBase('illustrations/maypole.jpg'),
  },
  {
    id: 'walking-in-the-rain',
    title: 'Walking in the Rain',
    description: 'A rainy cobbled street and a yellow raincoat.',
    src: withBase('illustrations/walking-in-the-rain.jpg'),
  },
  {
    id: 'bowling-day',
    title: 'Bowling Day',
    description: 'Chaos on the lawn bowls green.',
    src: withBase('illustrations/bowling-day.jpg'),
  },
  {
    id: 'cheesy-high-street',
    title: 'Cheesy High Street',
    description: 'A busy high street of woodlice characters.',
    src: withBase('illustrations/cheesy-high-street.jpg'),
  },
  {
    id: 'rockstar',
    title: 'Rockstar',
    description: 'A frog with a red guitar and a power stance.',
    src: withBase('illustrations/rockstar.jpg'),
  },
  {
    id: 'tiger',
    title: 'Tiger',
    description: 'A calm tiger and a frog tugging its tail.',
    src: withBase('illustrations/tiger.jpg'),
  },
]
