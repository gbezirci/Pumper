import {useDocumentData} from 'react-firebase-hooks/firestore';
import {fuelDocRef} from '~/lib/firebase';

export default function TownList() {
  const [value, loading, error] = useDocumentData(fuelDocRef);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>There was an error: {error}</div>;
  }

  console.log(value);

  let towns = Object.keys(value);

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {towns.map((item, idx) => (
          <tr key={idx}>
            <td className="border px-4 py-2">{item}</td>
            <td className="border px-4 py-2">{value[item]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
