import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import cn from 'classnames';

const mediaTypes = [
  { value: 'all', label: 'All' },
  { value: 'movie', label: 'Movie' },
  { value: 'tv', label: 'TV' },
];

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const onChange = (e: any) => setValue(e.target.value);

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        type: typeFilter,
        q: value,
      },
    });
  };

  const type = router.query.type as string;
  const q = router.query.q as string;

  useEffect(() => {
    if (type && q) {
      setValue(q);
      setTypeFilter(type);
    }
  }, [type, q]);

  return (
    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-lg p-4 shadow-lg z-50 w-11/12 max-w-md">
      <div className="flex flex-wrap justify-center gap-4">
        {mediaTypes.map((type) => (
          <button
            key={type.value}
            className={cn(
              'px-6 py-2 rounded-full text-sm font-medium transition-all',
              typeFilter === type.value
                ? 'bg-main text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            )}
            onClick={() => setTypeFilter(type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>
      <div className="mt-6 relative">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-full bg-gray-800 text-white focus:ring focus:ring-main focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-main text-white px-4 py-2 rounded-full"
        >
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
