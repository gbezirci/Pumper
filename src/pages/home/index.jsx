import HotPriceStats from '~/components/hot-price';
import TownList from '~/components/town';

export default function Home() {
  // const [data, isLoading] = useCollectionData(fuelDocRef);

  return (
    <>
      <div className="grid grid-cols-2 grid-flow-col"></div>

      <HotPriceStats />
      <div className="mt-5">
        <TownList />
      </div>
    </>
  );
}
