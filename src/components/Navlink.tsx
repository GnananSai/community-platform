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
    <a href={href} className={`nav_item ${active ? "active" : ""}`}>
      {text}
    </a>
  );
};

export default Navlink;
