import dynamic from 'next/dynamic'

const VelocityScroll = dynamic(
  () => import('./scroll-based-velocity').then((mod) => mod.VelocityScroll),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
)

export { VelocityScroll } 