import Link from "next/link";
const Navlink = ({
  text,
  href,
  active,
}: {
  text: string;
  href: string;
  active: boolean;
}) => {
  return (
    <Link href={href} className={`nav_item ${active ? "active" : ""}`}>
      {text}
    </Link>
  );
};

export default Navlink;
