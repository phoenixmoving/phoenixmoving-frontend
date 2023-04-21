import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const services = [
  {
    name: 'Local Moving Services.',
    description:
      "If you're moving in Natick, MA, we're the local moving company you can trust. Our team of expert movers is familiar with the area and can help you move quickly and efficiently. We'll work with you to create a customized moving plan that meets your unique needs and budget. With our affordable rates and top-notch customer service, we're the reliable Natick movers you can count on.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Long Distance Moving Services.',
    description:
      "If you're moving out of Natick, MA, we offer reliable and affordable long-distance moving services to help make your move easier. Our team of expert movers has the experience and resources to handle moves of any size, whether you're moving across the state or across the country. We'll work with you every step of the way to ensure that your move is seamless and stress-free.",
    icon: LockClosedIcon,
  },
  {
    name: 'Storage Solutions.',
    description:
      'If you need a safe and secure place to store your belongings during your move, we offer affordable and reliable storage solutions. Our climate-controlled storage facilities are monitored around the clock, so you can rest easy knowing that your belongings are safe and secure.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Packing Services.',
    description:
      'If you need help with packing, our professional packers can help. We offer affordable packing services to help make your move easier. Our team of expert packers will carefully pack your belongings to ensure that they are transported safely and securely.',
    icon: FingerPrintIcon,
  },
];

export default function MovingServices() {
  return (
    <Section>
      <SectionHeader
        title="Full-Service Natick moving company"
        subtitle="We provide the highest quality moving services at competitive prices."
      />
      <div className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        {services.map((service) => (
          <div key={service.name} className="relative pl-16">
            <p className="text-base font-semibold leading-7 text-gray-900">
              <span className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <service.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              {service.name}
            </p>
            <p className="mt-2 text-base leading-7 text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
