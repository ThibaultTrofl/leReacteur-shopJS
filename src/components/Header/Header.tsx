import Link from "next/link";
import { CircleUserRound, ShoppingBasket } from "lucide-react";
import { signIn } from "@/auth";

export function Header() {
  return (
    <header className="flex items-center justify-between max-w-[1300px] w-full mx-12">
      <h1>Shop JS</h1>
      <nav className={"flex gap-8"}>
        <Link href="/products">Produits</Link>
        <Link href="/cart">
          <ShoppingBasket />
        </Link>
        <button
          onClick={async () => {
            "use server";
            await signIn("Nodemailer", { redirectTo: "/" });
          }}
        >
          <CircleUserRound />
        </button>
      </nav>
    </header>
  );
}
