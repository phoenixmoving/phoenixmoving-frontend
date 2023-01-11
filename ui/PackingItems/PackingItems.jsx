import Item from './Item';
import Section from '@/ui/Section';
import SectionHeader from '@/ui/SectionHeader';

const items = [
  {
    img: '/packing/blanket.jpg',
    price: 20,
    name: 'Moving Blankets',
    size: `72" x 0.2" x 80`,
  },
  {
    img: '/packing/sm.jpg',
    price: 4,
    name: 'Small Box',
    size: `17" x 12 3/8" x 12 3/8`,
  },
  {
    img: '/packing/md.jpg',
    price: 6,
    name: 'Medium Box',
    size: `18" x 18" x 16`,
  },
  {
    img: '/packing/lg.jpg',
    price: 8,
    name: 'Large Box',
    size: `18" x 18" x 24`,
  },
  {
    img: '/packing/wardrobe.jpg',
    price: 18,
    name: 'Wardrobe',
    size: `21" x 18" x 46`,
  },
  {
    img: '/packing/picture.jpg',
    price: 8,
    name: 'Picture Box',
    size: `37" x 4" x 27`,
  },
  {
    img: '/packing/paper.jpg',
    price: 30,
    name: 'Packing Paper',
    size: `approx. 450 sheets`,
  },
];

export default function PackingItems() {
  return (
    <Section className="bg-palette-background">
      <SectionHeader title="Packing supplies." />
      <div className="flex overflow-x-scroll w-full scrollbar pb-6">
        {items.map((item) => (
          <Item key={item.name} item={item} />
        ))}
      </div>
    </Section>
  );
}
