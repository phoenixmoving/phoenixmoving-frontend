import { services } from '@/lib/navigation';
import { states } from '@/lib/statesData';
import PopularCities from '@/ui/PopularCities';

export async function interstateCities(s) {
  let ct = [];

  let f = states.filter((s) => s.cities);
  f.map((c) => c.cities.map((s) => ct.push(s)));

  return ct;
}

const navigation = {
  services,
  support: [
    { name: 'Prices', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Our Work', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/phoenixmoving',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/phoenixmoving/',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/phoenix_moving',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'Yelp',
      href: 'https://www.yelp.com/biz/phoenix-moving-natick-6',
      icon: (props) => (
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 926.7 1220"
          width="20"
          height="20"
          fill="currentColor"
          {...props}
        >
          <path d="M23.6 587.4C3.8 619.1-4.5 718.8 2.4 784.9c2.4 21.8 6.4 40 12.1 50.9 7.9 15 21.2 24 36.3 24.5 9.7.5 15.8-1.2 198.3-59.9 0 0 81.1-25.9 81.5-26.1 20.2-5.2 33.9-23.8 35.2-47.5 1.3-24.4-11.2-45.9-32-53.6 0 0-57.2-23.3-57.3-23.3-196.2-80.9-205-84.1-214.9-84.2-15.2-.5-28.6 7.1-38 21.7m438.8 602.9c3.2-9.2 3.6-15.5 4.1-207.3 0 0 .4-84.7.5-85.6 1.3-20.8-12.1-39.7-34.1-48.2-22.7-8.7-47.1-3.3-60.8 13.7 0 0-40 47.5-40.2 47.5-137.4 161.4-143.2 168.9-146.5 178.4-2.1 5.6-2.8 11.6-2.2 17.6.8 8.6 4.7 17 11.1 24.9 31.9 37.9 184.7 94.1 233.5 85.7 17.1-2.9 29.4-12.4 34.6-26.7m310.1-66.7c46.1-18.4 146.6-146.2 153.7-195.5 2.5-17.1-2.9-31.9-14.7-41.3-7.7-5.8-13.6-8.1-196.1-68 0 0-80-26.4-81.1-26.9-19.4-7.5-41.5-.5-56.3 17.8-15.5 18.8-17.8 43.7-5.4 62.4l32.2 52.4c108.3 175.9 116.6 188.3 124.4 194.4 12 9.5 27.3 11.1 43.3 4.7m-94.3-452.8c207.3-50.2 215.4-52.9 223.5-58.3 12.6-8.5 18.9-22.6 17.8-39.8 0-.5.1-1.1 0-1.7-5.3-51-94.5-183.4-138.5-204.9-15.6-7.5-31.2-7-44.1 1.7-8 5.2-13.9 13.1-124.9 165 0 0-50.1 68.3-50.7 69-13.2 16.1-13.4 39.1-.5 58.9 13.4 20.5 36 30.4 56.7 24.7 0 0-.8 1.5-1 1.7 10.2-3.9 28.4-8.4 61.7-16.3M470.1 499.6c-3.6-82.2-28.3-448.1-31.2-465-4.2-15.4-16.2-26.3-33.4-30.7-53-13.1-255.3 43.6-292.8 82.2-12.1 12.6-16.5 28-12.9 41.7 5.9 12.1 256.6 406.5 256.6 406.5 37 60.1 67.3 50.7 77.2 47.6 9.8-2.9 39.9-12.3 36.5-82.3" />
        </svg>
      ),
    },
  ],
};

export default async function Footer() {
  let interCities = await interstateCities(states);
  return (
    <footer className="bg-palette-footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex gap-1 flex-wrap mb-4">
          <PopularCities />
        </div>
        <div className="flex gap-1 flex-wrap mb-8 items-center">
          <p className="text-white text-xs font-semibold p-2 sm:p-1">
            Top Cities
          </p>
          {interCities.slice(0, 15).map((city, i) => {
            return (
              <a
                key={`${city.slug}-${i}`}
                className="text-gray-400 text-xs p-2 sm:p-1"
                href={city.slug}
                title={`Moving From Boston to ${city.name}`}
              >
                <span className="text-gray-400 text-xs">|</span>
                <span className="hover:underline ml-4 sm:ml-2">
                  {city.name}
                </span>
              </a>
            );
          })}
        </div>
        <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className=" font-medium text-white">Services</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:underline"
                        title={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className=" font-medium text-white">Support</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:underline"
                        title={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className=" font-medium text-white">Company</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:underline"
                        title={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className=" font-medium text-white">Legal</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-gray-400 hover:underline"
                        title={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-0">
          <div>
            <h3 className=" font-medium text-white">© Copyright</h3>
            <p className="mt-2  text-gray-300">
              Phoenix Moving Inc. is fully licensed, bonded and insured.
            </p>
            <p className="mt-2  text-gray-300">
              We carry general liability, cargo and workers' compensation.
            </p>
            <p className="mt-2  text-gray-300">
              Phoenix Moving Inc. is licensed by the Massachusetts Department of
              Public Utilities, Transportation Oversight Division, certificate
              number 32054 (MA).
            </p>
            <p className="mt-2  text-gray-300">
              Phoenix Moving Inc. is licensed by the Federal Motor Carrier
              Safety Administration U.S. DOT# 3868109, MC# 01415308. Phoenix
              Moving Inc.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-500 pt-8 md:flex md:items-center md:justify-between">
          <p className="mt-8  text-gray-400 md:order-1 md:mt-0">
            &copy; 2022 Phoenix Moving, Inc. Make moving chill
          </p>
        </div>
      </div>
    </footer>
  );
}
