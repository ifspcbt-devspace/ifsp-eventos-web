'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ({
  event,
}: {
  event: {
    id: string;
    name: string;
    description: string;
    imgUrl: string;
    owner: string;
    date: Date;
  };
}) {
  const [imgUrl, setImgUrl] = useState(event.imgUrl);

  return (
    <Link
      href={`/events/${event.id}`}
      className='flex h-full w-full cursor-pointer flex-col rounded-2xl bg-transparent px-8 no-underline duration-200 hover:-translate-y-2 md:px-0'
    >
      {/* Imagem responsiva */}
      <div className='relative mb-4 aspect-[3/4] w-full overflow-hidden rounded-xl'>
        <Image
          src={imgUrl}
          onError={() => setImgUrl('/images/default_thumb.png')}
          alt='event-image'
          quality={100}
          fill
          className='object-cover'
        />
      </div>

      {/* Info do autor e data */}
      <div className='mb-1.5 text-sm opacity-75'>
        Por {event.owner} -{' '}
        {event.date.toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
        })}
      </div>

      {/* Título e descrição responsivos */}
      <div className='text-left'>
        <span className='mb-2 block text-xl font-semibold text-black md:text-2xl'>
          {event.name}
        </span>
        <p className='line-clamp-5 text-sm opacity-75 md:text-base'>
          {event.description}
        </p>
      </div>
    </Link>
  );
}
