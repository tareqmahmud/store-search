import React from 'react';
import Image from 'next/image';
import searchHeroImage from '@assets/images/searchHero.jpg';

type Props = {
  setSearch: any;
};

const Hero: React.FC<Props> = ({ setSearch }) => {
  const onSubmitForm = (event: any) => {
    event.preventDefault();
  };

  const onChangeSearch = (event: any) => {
    const searchText = event.target.value;
    setSearch(searchText);
  };

  return (
    <div className="w-full relative h-28">
      {/* Banner */}
      <Image
        src={searchHeroImage}
        alt="Hero Banner"
        layout="fill"
        objectFit="cover"
      />

      {/* Search */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="max-w-3xl w-full">
          <form className="w-full" onSubmit={onSubmitForm}>
            <div className="h-14 rounded shadow flex">
              <input
                onChange={onChangeSearch}
                type="text"
                name="search"
                placeholder="Search your items"
                className="w-full h-full rounded px-4 text-sm appearance-none focus:border focus:border-green-400 focus:outline-none transition duration-300 ease-in-out"
              />
              {/*<button*/}
              {/*  type="submit"*/}
              {/*  className="h-full bg-green-500 text-white px-8 hover:bg-green-600 border-l-0 rounded focus:outline-none focus:bg-green-600 rounded-tl-none rounded-bl-none"*/}
              {/*>*/}
              {/*  Search*/}
              {/*</button>*/}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
