import Link from 'next/link';
import { useRouter } from 'next/router';

function Header(): JSX.Element {
  const router = useRouter();

  return (
    <header>
      <nav
        className='
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        '
      >
        <div>
          <Link href='/'>Dr. Bronwyn Penthaligon</Link>
        </div>
        <div className='hidden w-full md:flex md:items-center md:w-auto' id='menu'>
          <ul
            className='
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between
              md:pt-0'
          >
            <li>
              <a className='md:p-4 py-2 block hover:text-purple-400' href='#'>
                About
              </a>
            </li>
            <li>
              <a className='md:p-4 py-2 block hover:text-purple-400' href='#'>
                Services
              </a>
            </li>
            <li>
              <a className='md:p-4 py-2 block hover:text-purple-400' href='#'>
                Blog
              </a>
            </li>
            <li>
              <a className='md:p-4 py-2 block hover:text-purple-400' href='#'>
                FAQ
              </a>
            </li>
            <li>
              <a className='md:p-4 py-2 block hover:text-purple-400 text-purple-500' href='#'>
                Contact
              </a>
            </li>
            <li>
              <a className='md:p-4 py-2 block hover:text-purple-400 text-purple-500' href='#'>
                15min Free Consultation
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
