import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Cta1() {
  return (
    <Section>
      <Card className="from-primary via-primary/90 to-primary/80 bg-gradient-to-br py-20">
        <CardContent className="flex flex-col items-center justify-center gap-4">
          <SectionHeader
            title="Move with Phoenix Moving Boston."
            subtitle="No credit card required."
            className="text-primary-foreground mb-0"
          />
          <Button
            size="lg"
            variant="secondary"
            title="Reques tFree Estimate Online"
            className="self-center"
            asChild
          >
            <Link href="/">Request Free Estimate Online</Link>
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
