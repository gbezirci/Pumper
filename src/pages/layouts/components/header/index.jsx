import {Link} from 'react-router-dom';
import fuelimg from '../../../../assets/img/fuel.png';

export default function Header() {
  return (
    <header className="h-14 border-b border-zinc-200 flex items-center px-4 justify-between">
      <Link to="/" className="text-3xl font-extrabold text-gray-700">
        <div className="flex items-center">
          <img src={fuelimg} alt="Logo" className="w-14 p-3" />
          <span className="hidden sm:inline">
            <span className="font-bold text-green-700">P</span>
            um<span className="font-bold text-green-700">P</span>er
          </span>
        </div>
      </Link>
    </header>
  );
}
