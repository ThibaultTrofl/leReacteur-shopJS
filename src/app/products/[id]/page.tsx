export default async function Home({params}: { params: { id: number } }) {
  const {id} = await params
  return (
      <div className={'h-screen w-screen flex items-center justify-center'}><h1>Products {id}</h1></div>);
}
