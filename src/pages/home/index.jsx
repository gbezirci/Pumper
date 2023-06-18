import TownList from '~/components/town';

export default function Home() {
  // const [data, isLoading] = useCollectionData(fuelDocRef);

  return (
    <>
      <div className="grid grid-cols-2 grid-flow-col"></div>
      <div>Home</div>

      <TownList />
    </>
  );
}
