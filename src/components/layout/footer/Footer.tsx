import Link from "next/link";
import Image from "next/image";
import FooterColumns from "./FooterColumns";

const STYLES = {
  footer: "w-full py-24 bg-primary-1000",
  container: "w-full px-4 md:px-6 lg:px-8",
  wrapper: "max-w-[1280px] m-auto flex flex-row text-left items-start justify-center gap-8",
  logoSection: "w-full flex flex-col gap-4 m-0",
  logoContainer: "w-full flex flex-col items-start justify-center gap-4",
};

const Footer = () => {

  const columns = [
    {
      title: "Pages",
      links: [
        { label: "Accueil", href: "" },
        { label: "Toutes les cartes", href: "" },
        { label: "Exécutions en équipe", href: "" },
        { label: "Lineups populaires", href: "" }
      ]
    },
    {
      title: "Légale",
      links: [
        { label: "Mentions légales", href: "" },
        { label: "Politique de confidentialité", href: "" },
        { label: "CGU", href: "" }
      ]
    },
    {
      title: "Retrouvez-nous",
      links: [
        { label: "Contact@turboblyat.com", href: "" }
      ]
    }
  ];
  return (
    <footer className={STYLES.footer}>
      <div className={STYLES.container}>
        <div className={STYLES.wrapper}>
          <div className={STYLES.logoSection}>
            <div className={STYLES.logoContainer}>
              <Link href="/">
                <Image src="/assets/logo.png" alt="logo" width={56} height={56} />
              </Link>
              <Image src="/assets/CS2-decks-img-logo.png" alt="" width={220} height={64}></Image>
            </div>
          </div>
          {columns.map((column, index) => (
            <FooterColumns
              key={index}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
      </div>
    </footer>
  )

}

export default Footer;