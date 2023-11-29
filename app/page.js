import Image from 'next/image'
import HoverLinks from 'app/HoverLinks'

export default function Home() {
  return (
    <main>
      <div className="container">
      <header className="header">
        <h1 className="text-3xl">Welcome to My Next.js App</h1>
      </header>

      <main className="main">
        <p className="mb-4">
          This is a basic front page layout. You can customize it to fit your
          needs. Test
        </p>
        <HoverLinks />
      </main>

      <footer className="footer">
        <p className="text-sm">&copy; 2023 Your Company</p>
      </footer>
    </div>
    </main>
  )
}
