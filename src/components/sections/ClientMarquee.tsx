'use client';

const clients = [
  'Reliance',
  'Boeing',
  'GE',
  'CAT',
  'Oracle',
  'CBRE',
  'Metro',
  'Puma',
  'Capgemini',
  'Zomato',
  'MRF',
  'Lodha',
];

export default function ClientMarquee() {
  const renderClient = (client: string, index: number, prefix: string) => (
    <span
      key={`${prefix}-${index}`}
      className="whitespace-nowrap text-xl font-bold text-gray-400 select-none"
    >
      {client}
    </span>
  );

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {"Trusted by India"}'s Leading Enterprises
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="animate-marquee flex w-max items-center gap-12 sm:gap-16">
          {/* First set */}
          {clients.map((client, i) => renderClient(client, i, 'a'))}
          {/* Duplicated set for seamless loop */}
          {clients.map((client, i) => renderClient(client, i, 'b'))}
        </div>
      </div>
    </section>
  );
}
