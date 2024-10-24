import Link from "next/link";

export default function Home() {
  return (
      <div className={'h-screen w-screen flex flex-col items-center justify-center'}><h1>Products</h1><button><Link href={"/products/1"}>Product 1</Link></button> </div>  );
}
