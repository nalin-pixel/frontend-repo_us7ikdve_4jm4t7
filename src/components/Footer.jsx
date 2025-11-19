export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative py-10 border-t border-white/10 text-slate-300/90">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {year} Matur • <a className="underline hover:text-white" href="mailto:podpora@matur.sk">podpora@matur.sk</a></p>
        <nav className="flex items-center gap-6">
          <a href="#cookies" className="hover:text-white">Cookies</a>
          <a href="#beta" className="hover:text-white">Beta policy</a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
        </nav>
      </div>
    </footer>
  )
}
