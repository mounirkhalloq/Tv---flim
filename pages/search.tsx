import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineSearch } from 'react-icons/ai';

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

  useEffect(() => {
    const type = router.query.type as string;
    const q = router.query.q as string;
    if (type && q) {
      setValue(q);
      setTypeFilter(type);
    }
  }, [router.query]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#000',
        color: '#fff',
        padding: '1.5rem',
        borderRadius: '1rem',
        width: '90%',
        maxWidth: '400px',
        zIndex: 50,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {mediaTypes.map((type) => (
          <button
            key={type.value}
            style={{
              flex: '1',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '500',
              backgroundColor: typeFilter === type.value ? '#ff5722' : '#444',
              color: typeFilter === type.value ? '#fff' : '#bbb',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onClick={() => setTypeFilter(type.value)}
          >
            {type.label}
          </button>
        ))}
      </div>
      <div style={{ position: 'relative', marginTop: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '9999px',
            backgroundColor: '#333',
            color: '#fff',
            border: 'none',
            outline: 'none',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#ff5722',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
