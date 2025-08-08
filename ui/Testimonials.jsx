'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const LINK_TO_GOOGLE =
  'https://www.google.com/search?q=phoenix+moving&sxsrf=ALiCzsYeGb8LJVe_ytmpCRRlfpA9-CrhvA%3A1668395468331&source=hp&ei=zLFxY7nIEO-gptQP2rWL4AI&iflsig=AJiK0e8AAAAAY3G_3HHOK9PAba9aeK4hg_rW7ucHEWVn&ved=0ahUKEwi53uy52az7AhVvkIkEHdraAiwQ4dUDCAo&uact=5&oq=phoenix+moving&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyCwguEIAEEMcBEK8BMgUIABCRAjIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoHCCMQ6gIQJzoLCC4QgAQQsQMQgwE6CAguELEDEIMBOggIABCxAxCDAToLCAAQgAQQsQMQgwE6BAgAEEM6CAguEIAEELEDOhQILhCABBCxAxCDARDHARDRAxDUAjoECC4QQzoNCC4QxwEQrwEQ1AIQQzoKCC4QxwEQrwEQQzoKCC4QsQMQ1AIQQzoKCC4Q1AIQsQMQQzoKCC4QsQMQgwEQQzoNCC4Q1AIQsQMQgAQQQzoQCC4QgwEQ1AIQsQMQgAQQQzoLCC4QxwEQrwEQkQI6BwguELEDEEM6EAguEIAEEIcCEMcBEK8BEBQ6CAgAEIAEELEDOgoIABCABBCHAhAUOgUILhCABFCyA1jlEGCdEmgBcAB4AIABjgGIAbMMkgEEMy4xMZgBAKABAbABCg&sclient=gws-wiz#lrd=0x89e387680ffe9aeb:0x4651b1e640f15b41,1,,,';

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'size-5',
            rating > index ? 'fill-yellow-400' : 'fill-muted-foreground/50',
          )}
        />
      ))}
    </div>
  );
}

function Review({
  text,
  author_name,
  author_url,
  rating,
  profile_photo_url,
  relative_time_description,
  className,
}) {
  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-background p-6 opacity-0 shadow',
        className,
      )}
    >
      <blockquote>
        <div className="flex justify-between items-center">
          <StarRating rating={rating || 5} />
          <Image
            className="h-8 w-8 object-cover"
            src="/google.png"
            alt="google logo"
            width={32}
            height={32}
            title="Google"
          />
        </div>
        <p className="mt-3 leading-7 text-sm">{text || ''}</p>
      </blockquote>

      <figcaption className="relative mt-6 flex items-center justify-between border-t  pt-6">
        <div>
          <a
            className="text-blue-600 hover:underline flex items-center"
            href={author_url}
            target="_blank"
            title={author_name}
          >
            {author_name || ''}
            <ArrowUpRightIcon className="w-3 h-3 ml-1 text-blue-600" />
          </a>
          <div className="mt-1 text-sm text-muted-foreground/80">
            {relative_time_description || ''}
          </div>
        </div>
        <div className="overflow-hidden rounded-full">
          <Image
            className="h-14 w-14 object-cover"
            src={profile_photo_url || ''}
            alt={author_name || ''}
            width={56}
            height={56}
            title={author_name || ''}
          />
        </div>
      </figcaption>
    </figure>
  );
}

function splitArray(array, numParts) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef();
  let [columnHeight, setColumnHeight] = useState(0);
  let duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef?.current?.offsetHeight);
    });

    resizeObserver.observe(columnRef?.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration ? duration : '150ms' }}
    >
      {reviews?.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews?.length}
          className={reviewClassName(reviewIndex % reviews?.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid({ reviews }) {
  let containerRef = useRef();
  let isInView = useInView(containerRef, { once: true, amount: 0.4 });
  let columns = reviews ? splitArray(reviews, 3) : [];

  if (columns.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2], ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[0]]}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50" />
    </div>
  );
}

export function Testimonials({ reviews, totalReviews }) {
  return (
    <Section id="reviews" className="bg-muted">
      <SectionHeader title="What real people say about us." />
      {reviews && reviews.length > 0 && <ReviewGrid reviews={reviews} />}
      <div className="flex items-center justify-center mt-10">
        <a
          title="Google Reviews"
          target="_blank"
          href={LINK_TO_GOOGLE}
          className="inline-flex items-center rounded-xl border border-transparent px-4 py-3 text-sm leading-4 text-blue-600 hover:bg-indigo-50"
        >
          {totalReviews} Google Reviews
          <ArrowUpRightIcon className="w-3 h-3 ml-1 text-blue-600" />
        </a>
      </div>
    </Section>
  );
}
