import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';
import cn from 'classnames';

import { MediaType } from '@/model/movie';
import { mediaTypes } from '@/ultis/constants';
import { Input } from '@/components';

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [typeFilter, setTypeFilter] = useState<MediaType>('all');

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

  const type = router.query.type as MediaType;
  const q = router.query.q as string;

  useEffect(() => {
    if (type && q) {
      setValue(q);
      setTypeFilter(type);
    }
  }, [type, q]);

  return (
    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-lg p-4 shadow-lg z-50 w-80">
      <div className="flex items-center space-x-4">
        {mediaTypes.map((type) => (
          <button
            key={type.value}
            className={cn(
              'px-4 py-2 rounded-full',
              typeFilter === type.value ? 'bg-main text-white' : 'hover:bg-gray-700'
            )}
            onClick={() => setTypeFilter(type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>
      <div className="mt-4 relative">
        <Input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 rounded-full"
        />
        <button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-main text-white px-3 py-2 rounded-full"
        >
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
