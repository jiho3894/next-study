import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const Router = useRouter();
  console.log(Router);
  return (
    <div>
      <Link href="/">
        <a style={{ color: Router.pathname === "/" ? "red" : "blue" }}>index</a>
      </Link>
      <Link href="/Home">
        <a style={{ color: Router.pathname === "/Home" ? "red" : "blue" }}>
          Home
        </a>
      </Link>
    </div>
  );
}
