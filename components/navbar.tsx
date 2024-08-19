import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 text-gray-300 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">[very work in progress]</Link>
        </div>
        <div className="space-x-6">
          <Link href="#about">About Me</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;