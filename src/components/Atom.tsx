import { FaJava, FaReact, FaPython, FaLaptopCode } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'

const AtomOrbit = () => {
  return (
    <div className="flex justify-center items-center h-50 bg-gray-100">
      <div className="relative w-20 h-20 flex justify-center items-center text-dbg dark:text-lbg">
        <span className="text-lprimary dark:text-dprimary mt-2 font-mono"><FaLaptopCode size={40}/></span>
        <div className="absolute opacity-60 top-5 left-1/2 -translate-x-1/2 w-6 h-6 text-center text-sm text-red-500 animate-orbit1">
          <FaJava size={40} />
        </div>
        <div className="absolute opacity-50 top-8 left-1/2 -translate-x-1/2 w-6 h-6 text-center text-sm text-green-500 animate-orbit2">
          <FaGolang size={40} />
        </div>
        <div className="absolute opacity-60 top-8 left-1/2 -translate-x-1/2 w-6 h-6 text-center text-sm text-yellow-500 animate-orbit3">
          <FaReact size={30} />
        </div>
        <div className="absolute opacity-50 top-8 left-1/2 -translate-x-1/2 w-6 h-6 text-center text-sm text-green-500 animate-orbit4">
          <FaPython size={30} />
        </div>
      </div>
    </div>
  );
};

export default AtomOrbit;
