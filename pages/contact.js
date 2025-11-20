import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if(res.ok) setStatus('sent')
      else setStatus(`error: ${data.error || 'unknown'}`)
    } catch(err) {
      setStatus(`error: ${err.message}`)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pb-16">
      <h2 className="text-2xl font-semibold mt-8">Contact</h2>
      <p className="mt-3 text-sm text-slate-700">Reach out about SOC roles, collaborations, or questions.</p>

      <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className="col-span-2 p-3 rounded-md border" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
        <input className="p-3 rounded-md border" placeholder="Your email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
        <input className="p-3 rounded-md border" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
        <textarea className="col-span-2 p-3 rounded-md border" rows={4} placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required></textarea>
        <button type="submit" className="col-span-2 rounded-md bg-slate-900 text-white px-4 py-2">Send Message</button>
      </form>

      <div className="mt-4 text-sm">
        {status === 'sending' && <p>Sending…</p>}
        {status === 'sent' && <p className="text-green-600">Message sent — I will reply to your email soon.</p>}
        {status && status.startsWith('error') && <p className="text-red-600">{status}</p>}
      </div>
    </div>
  )
}
