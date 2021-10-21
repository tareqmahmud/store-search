import React from 'react';
import Image from 'next/image';
import searchHeroImage from '@assets/images/searchHero.jpg';

type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <Image
      src={searchHeroImage}
      alt="Hero Banner"
      layout="fill"
      objectFit="cover"
    />
  );
};

export default Hero;
