import Link from "next/link";

export type FooterColumnsProps = {
  title: string;
  links: { label: string; href: string }[];
}
const STYLES = {
  column: "w-full flex flex-col items-start text-neutral-white m-0",
  heading: "font-semibold mb-2 text-sm sm:text-base",
  link: "mb-2 text-sm hover:underline transition-all duration-300"
}

const FooterColumns = ({ title, links }: FooterColumnsProps) => {
  return (
    <div className={STYLES.column}>
      <h6 className={STYLES.heading}>{title}</h6>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={STYLES.link}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default FooterColumns;