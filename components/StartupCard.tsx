import { StartupTypeCard } from '@/app/(root)/page'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StartupCard = ({post} : {post: StartupTypeCard}) => {
  const { _createdAt, views, author: {id: authorId, name}, title, category, _id, image, description } = post;
  return (
    <li className='startup-card group'>
      <div className='flex-between'>
          <p className='startup_card_date'>
              {formatDate(_createdAt)}
          </p>
          <div className='flex ga-1.5'>
              <EyeIcon className='size-6 text-primary' />
              <span className='text-16-medium'>{views}</span>
          </div>
      </div>

      <div className='flex-between mt-5 gap-5'>
          <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                  <p className='text-16-medium line-clamp-1'>{name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                  <p className='text-26-semibold line-clamp-1'>{title}</p>
                </Link>
          </div>

              <Link href={`/user/${_id}`}>
              <Image
                src={image}
                alt={name!}
                width={48}
                height={40}
                className="rounded-full"
              />
            </Link>

         </div>

            <Link href={`/startup/${_id}`}>
              <p className="startup-card_desc">{description}</p>
              <img src={image} alt="placeholder" className="startup-card_img" />
            </Link>

            <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
      </div>
      
      </li>
  )
}

export default StartupCard