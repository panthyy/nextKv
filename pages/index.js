import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}
