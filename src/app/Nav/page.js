import Link from "next/link";
import "../styles/nav.css";

export default function Nav() {
  return (
    <>
      <div className="wrapper">
        <div className="nav-container">
          <div className="nav">
            <Link href="/home"> Home </Link>
            <Link href="/about"> About </Link>
          </div>
        </div>
      </div>
    </>
  );
}
