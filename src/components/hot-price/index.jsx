import {useWindowScroll} from 'react-use';
import './stats.css';

export default function HotPriceStats() {
  const {y} = useWindowScroll();

  const stats = [
    {title: 'İstanbul', count: 23.97},
    {title: 'Ankara', count: 23.97},
    {title: 'İzmir', count: 23.97},
  ];

  return (
    <div
      className={`flex  p-4 bg-white rounded-md shadow-md transition-all duration-500 ease-in-out
        ${y > 75 ? 'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out' : ''}`}
    >
      {stats.map((stat) => (
        <div key={stat.title} className="flex-1 text-center">
          <div className="text-sm text-gray-500">{stat.title}</div>
          <div className="text-xl font-bold">{stat.count}</div>
        </div>
      ))}
    </div>
  );
}
