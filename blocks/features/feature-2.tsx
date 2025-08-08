import {
  Shield,
  Award,
  Clock,
  HeartHandshake,
  Truck,
  DollarSign,
} from "lucide-react";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Complete insurance coverage for your peace of mind during the entire moving process.",
  },
  {
    icon: Award,
    title: "Licensed & Certified",
    description:
      "Fully licensed moving company with certified professional movers and equipment.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description:
      "We respect your schedule and guarantee timely arrival and completion of your move.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We go above and beyond to exceed expectations.",
  },
  {
    icon: Truck,
    title: "Modern Equipment",
    description:
      "State-of-the-art moving trucks and equipment to ensure safe transportation.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees or surprise charges. Clear, upfront pricing for all our services.",
  },
];

export function Feature2() {
  return (
    <Section className="from-primary via-primary/90 to-primary/80 bg-gradient-to-br">
      {/* Header */}
      <SectionHeader
        title="Your Move, Our Commitment."
        subtitle="We're not just another moving company. We're your partners in making
            your relocation smooth, safe, and stress-free."
        className="text-primary-foreground"
      />

      {/* Features Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:transform hover:bg-white/15"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/30">
              <feature.icon className="h-8 w-8 text-white" />
            </div>

            <h3 className="mb-4 text-xl font-bold text-white">
              {feature.title}
            </h3>

            <p className="leading-relaxed text-white/80">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          <div>
            <div className="mb-2 text-4xl font-bold text-white">10+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-white">99%</div>
            <div className="text-white/80">Customer Satisfaction</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-white">0</div>
            <div className="text-white/80">Damage Claims</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
