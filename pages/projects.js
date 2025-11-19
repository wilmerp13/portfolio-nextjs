import Link from 'next/link'

export default function Projects(){
  return (
    <div className="max-w-6xl mx-auto px-6 pb-16">
      <h2 className="text-2xl font-semibold mt-8">Projects & SOC Practice</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <h4 className="font-semibold">SOC Lab — TryHackMe & Custom VMs</h4>
          <p className="mt-2 text-sm text-slate-700">Hands-on detection and incident response practice using TryHackMe scenarios, vulnerable VMs, and log aggregation.</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
          <h4 className="font-semibold">Automation Scripts & Small Tools</h4>
          <p className="mt-2 text-sm text-slate-700">Python scripts for parsing logs and automating ticket updates.</p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 md:col-span-2">
          <h4 className="font-semibold">Web / Dev Samples</h4>
          <p className="mt-2 text-sm text-slate-700">React + Tailwind single-page app (this portfolio). I enjoy building secure front-ends and integration tools.</p>
          <a href="https://github.com/wilmerp13" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">My GitHub Profile</a>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-sm border">React</span>
            <span className="px-3 py-1 rounded-full text-sm border">JavaScript</span>
            <span className="px-3 py-1 rounded-full text-sm border">Tailwind</span>
            <span className="px-3 py-1 rounded-full text-sm border">Python</span>
            <span className="px-3 py-1 rounded-full text-sm border">Recharts</span>
          </div>
        </div>
      </div>
    </div>
  )
}
