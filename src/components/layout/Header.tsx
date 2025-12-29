import Link from 'next/link';

const navLinks = [
  { name: "Expertise", href: "/expertise" },
  { name: "Projects", href: "/projects" },
  { name: "Company", href: "/company" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-start text-white mix-blend-difference">
      {/* Logo Area */}
      <div className="flex flex-col gap-1">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          APEX CONST.
        </Link>
        <div className="text-xs uppercase tracking-widest opacity-80 max-w-[150px] hidden md:block">
          HQ: 142 Industrial Ave.<br />
          Lagos, Nigeria
        </div>
      </div>

      {/* Center Navigation - Desktop */}
      <nav className="hidden md:flex gap-8 items-center absolute left-1/2 -translate-x-1/2 top-8">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="hidden md:flex items-center gap-2 text-sm font-medium group">
          <span className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform"/>
          Search
        </button>
        <button className="flex flex-col gap-1.5 w-8 items-end group">
          <span className="w-full h-[2px] bg-white group-hover:w-2/3 transition-all duration-300"/>
          <span className="w-2/3 h-[2px] bg-white group-hover:w-full transition-all duration-300"/>
        </button>
      </div>
    </header>
  );
}