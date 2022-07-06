// import PhaserComponent from '../phaser/PhaserComponent';
import dynamic from 'next/dynamic'

const PhaserComponent = dynamic(
  () => import('../phaser/PhaserComponent'),
  { ssr: false }
)

export default function Index() {
  return (
    <div>
      <h1>[TEST] Phaser Game / Next.js Integration</h1>
      <PhaserComponent/>
    </div>
  )
}