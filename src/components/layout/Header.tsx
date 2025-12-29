export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none mix-blend-difference text-white">
      <div className="text-xl font-bold font-sans pointer-events-auto">Logo</div>
      <nav className="pointer-events-auto">
        <ul className="flex gap-4">
          <li>Menu</li>
        </ul>
      </nav>
    </header>
  );
}
