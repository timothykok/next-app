import Link from "next/link";
import "../styles/nav.css";

export default function Nav() {
  return (
    <>
      <div className="wrapper">
        <div className="nav-container">
          <div className="nav">
            <Link href="/">Home</Link>
            <Link href="/About"> Let's Connect </Link>
            <Link href="/Secret">Secret</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
        </div>
      </div>
    </>
  );
}
