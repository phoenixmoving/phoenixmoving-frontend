import { PlayIcon } from '@heroicons/react/24/outline';
import SectionHeader from '@/ui/SectionHeader';
import Section from '@/ui/Section';
// import Image from 'next/image';

export async function getFeeds() {
  let url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${process.env.NEXT_PUBLIC_IG_TOKEN}`;

  const resp = await fetch(url);

  const data = resp.json();

  return data;
}

export default async function InstagramFeeds() {
  const ig = await getFeeds();
  const feeds = ig.data;

  // console.log(ig);
  return (
    <Section>
      <SectionHeader title="Follow us on Instagram" />
      <div className="mt-6 grid grid-cols-3 gap-x-2 gap-y-2 md:gap-x-6 md:gap-y-6 md:grid-cols-4">
        {feeds.slice(0, 8).map((feed, index) => {
          return (
            <div key={feed.id} className="group relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-2xl bg-slate-100 h-full relative">
                {feed.media_type === 'IMAGE' ||
                feed.media_type === 'CAROUSEL_ALBUM' ? (
                  <img
                    className="object-cover object-center"
                    key={index}
                    src={feed.media_url}
                    alt={feed.caption || 'instagram image'}
                    title={feed.caption}
                  />
                ) : (
                  // <Image
                  //   src={feed.media_url}
                  //   alt={feed.caption || 'instagram image'}
                  //   className="object-cover relative object-center"
                  //   title={feed.caption}
                  //   fill
                  //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  // />
                  <>
                    {/* <video
                      controls
                      autoplay
                      className="object-cover object-center"
                    >
                      <source src={feed.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video> */}
                    <video
                      className="object-cover object-center rounded-lg"
                      key={index}
                      src={feed.media_url}
                      // playsInline
                      autoPlay
                      // loop
                      muted
                    />
                    <PlayIcon className="w-4 h-4 md:w-6 md:h-6 text-white relative float-right stroke-2" />
                  </>
                )}
                <a
                  href={feed.permalink}
                  target="_blank"
                  rel="noreferrer"
                  title={feed.caption}
                >
                  <div className="absolute bg-[#0000004d] hover:opacity-100 top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-150 ease-in-out">
                    <span className="w-full h-full flex items-center justify-center">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-white"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
