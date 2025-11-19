import Link from 'next/link'

export default function Navbar(){
  return (
    <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-extrabold">Wilmer Alexander Polanco</h1>
        <p className="text-sm text-slate-600">Security-minded Support Ops & Aspiring SOC Analyst</p>
      </div>

      <nav className="space-x-4">
        <Link href="/#about"><a className="text-sm hover:underline">About</a></Link>
        <Link href="/skills"><a className="text-sm hover:underline">Skills</a></Link>
        <Link href="/experience"><a className="text-sm hover:underline">Experience</a></Link>
        <Link href="/projects"><a className="text-sm hover:underline">Projects</a></Link>
        <Link href="/contact"><a className="text-sm hover:underline">Contact</a></Link>
        <a
          href="/resume.docx"
          download
          className="ml-3 inline-block rounded-md border border-slate-200 px-3 py-1 text-sm font-medium shadow-sm hover:bg-slate-100"
        >
          Download Resume
        </a>
      </nav>
    </header>
  )
}
