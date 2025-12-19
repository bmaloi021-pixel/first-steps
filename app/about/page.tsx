import Link from 'next/link'

export default function About() {
  return (
    <main>
      <div className="container">
        <header className="header">
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>

        <div className="card">
          <h1>About This Website</h1>
          <p>This is a Next.js website integrated with Supabase.</p>
          
          <h2 style={{ marginTop: '2rem' }}>Tech Stack:</h2>
          <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
            <li><strong>Next.js 14</strong> - React framework with App Router</li>
            <li><strong>TypeScript</strong> - Type-safe JavaScript</li>
            <li><strong>Supabase</strong> - Backend as a Service (Database, Auth, Storage)</li>
          </ul>

          <h2 style={{ marginTop: '2rem' }}>Features:</h2>
          <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
            <li>Server-side rendering with Next.js</li>
            <li>Supabase client configured and ready to use</li>
            <li>Modern, responsive CSS styling</li>
            <li>TypeScript for type safety</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

