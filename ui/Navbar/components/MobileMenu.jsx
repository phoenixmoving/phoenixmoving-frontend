import { Dialog } from '@headlessui/react';
import XMarkIcon from '@heroicons/react/20/solid/XMarkIcon';
import EnvelopeIcon from '@heroicons/react/20/solid/EnvelopeIcon';
import PhoneIcon from '@heroicons/react/20/solid/PhoneIcon';
import UserIcon from '@heroicons/react/20/solid/UserIcon';
import Button from '@/ui/Button';
import MobileServicesDropdown from './MobileServicesDropdown';
import Logo from '@/components/Logo';

export default function MobileMenu({
  navigation,
  mobileMenuOpen,
  setMobileMenuOpen,
  clientLink,
}) {
  return (
    <Dialog
      as="div"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      initialFocus={null}
      focus="false"
    >
      <Dialog.Panel
        focus="false"
        className="fixed inset-0 z-30 overflow-y-auto bg-white px-6 py-4 lg:hidden"
      >
        <div className="flex h-9 items-center justify-between">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Phoenix Moving Boston</span>
            <Logo active={true} />
          </a>
          <div className="flex">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-full p-2.5 text-slate-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-slate-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => {
                if (item.items) {
                  return <MobileServicesDropdown item={item} key={item.name} />;
                } else {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-full py-2 px-3 font-medium leading-7 text-slate-900 hover:bg-slate-400/10"
                    >
                      {item.name}
                    </a>
                  );
                }
              })}
            </div>
            <div className="py-6 flex flex-col gap-4">
              <p>
                <a
                  href={clientLink}
                  target="_blank"
                  className="w-fit inline-flex items-center gap-1 rounded-full py-2.5 px-3 text-base font-semibold leading-6 text-slate-900 hover:bg-slate-400/10"
                >
                  <UserIcon aria-hidden="true" className="h-4 w-4" />
                  Client Login
                </a>
              </p>
              <p>
                <Button
                  href="tel:(508)315-9458"
                  title="Give us a call"
                  size="large"
                  variant="soft"
                >
                  <PhoneIcon className="h-4 w-4 mr-1" />
                  (508) 315-9458
                </Button>
              </p>
              <p>
                <Button
                  href="mailto:info@gophoenixmoving.com"
                  title="Give us a call"
                  size="large"
                  variant="soft"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-1" />
                  info@gophoenixmoving.com
                </Button>
              </p>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
