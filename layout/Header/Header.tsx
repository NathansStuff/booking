import Link from 'next/link';

export interface IHeaderProps {
  active: EHeaderPages;
}

export enum EHeaderPages {
  ABOUT,
  SERVICES,
  BLOG,
  FAQ,
  CONTACT,
  CONSULTATION,
}
function HeaderElement(active: EHeaderPages, ): JSX.Element {
  return (
    <li>
      <a
        className={`md:p-4 py-2 block hover:text-purple-400 ${active === EHeaderPages.ABOUT ? 'text-purple-500' : ''}`}
        href='#'
      >
        About
      </a>
    </li>
  );
}

function Header({ active }: IHeaderProps): JSX.Element {
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
