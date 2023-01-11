'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}

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
            'h-5 w-5',
            rating > index ? 'fill-palette-secondary-500' : 'fill-gray-300',
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
  ...props
}) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = [
      '0s',
      '0.1s',
      '0.2s',
      '0.3s',
      '0.4s',
      '0.5s',
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay: animationDelay ? animationDelay : '0s' }}
      {...props}
    >
      <blockquote className="text-gray-900">
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
        <p className="mt-3 leading-7 text-sm text-gray-900">{text || ''}</p>
      </blockquote>

      <figcaption className="relative mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
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
          <div className="mt-1 text-sm text-gray-400">
            {relative_time_description || ''}
          </div>
        </div>
        <div className="overflow-hidden rounded-full bg-gray-50">
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
      setColumnHeight(columnRef.current.offsetHeight);
    });

    resizeObserver.observe(columnRef.current);

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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  );
}

export default function Testimonials({ reviews, totalReviews }) {
  return (
    <Section
      label="phoenix-moving-reviews"
      id="reviews"
      className="bg-palette-background"
    >
      <SectionHeader title="What real people say about us." />
      {reviews && reviews.length > 0 && <ReviewGrid reviews={reviews} />}
      <div className="flex items-center justify-center mt-10">
        <a
          title="Google Reviews"
          target="_blank"
          href="https://www.google.com/search?q=phoenix+moving&sxsrf=ALiCzsYeGb8LJVe_ytmpCRRlfpA9-CrhvA%3A1668395468331&source=hp&ei=zLFxY7nIEO-gptQP2rWL4AI&iflsig=AJiK0e8AAAAAY3G_3HHOK9PAba9aeK4hg_rW7ucHEWVn&ved=0ahUKEwi53uy52az7AhVvkIkEHdraAiwQ4dUDCAo&uact=5&oq=phoenix+moving&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyCwguEIAEEMcBEK8BMgUIABCRAjIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoHCCMQ6gIQJzoLCC4QgAQQsQMQgwE6CAguELEDEIMBOggIABCxAxCDAToLCAAQgAQQsQMQgwE6BAgAEEM6CAguEIAEELEDOhQILhCABBCxAxCDARDHARDRAxDUAjoECC4QQzoNCC4QxwEQrwEQ1AIQQzoKCC4QxwEQrwEQQzoKCC4QsQMQ1AIQQzoKCC4Q1AIQsQMQQzoKCC4QsQMQgwEQQzoNCC4Q1AIQsQMQgAQQQzoQCC4QgwEQ1AIQsQMQgAQQQzoLCC4QxwEQrwEQkQI6BwguELEDEEM6EAguEIAEEIcCEMcBEK8BEBQ6CAgAEIAEELEDOgoIABCABBCHAhAUOgUILhCABFCyA1jlEGCdEmgBcAB4AIABjgGIAbMMkgEEMy4xMZgBAKABAbABCg&sclient=gws-wiz#lrd=0x89e387680ffe9aeb:0x4651b1e640f15b41,1,,,"
          className="inline-flex items-center rounded-xl border border-transparent px-4 py-3 text-sm leading-4 text-blue-600 hover:bg-indigo-50"
        >
          {totalReviews} Google Reviews
          <ArrowUpRightIcon className="w-3 h-3 ml-1 text-blue-600" />
          {/* <span aria-hidden="true" className="ml-2">
            {' '}
            &rarr;
          </span> */}
        </a>
      </div>
    </Section>
  );
}
