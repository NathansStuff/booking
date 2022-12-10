export interface IHeaderElementProps {
  active: boolean;
  link: string;
  title: string;
}

export function HeaderElement({ active, link, title }: IHeaderElementProps): JSX.Element {
  return (
    <a
      className={`md:p-4 py-2 block hover:text-primaryHover ${active ? activeClass : null}`}
      href={link}
      data-testid='headerElement'
    >
      {title}
    </a>
  );
}

export const activeClass = 'text-primary';
