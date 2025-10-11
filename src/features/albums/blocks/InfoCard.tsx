type Row = { label: string; value: string };

export default function InfoCard({ rows = [] }: { rows: Array<Row> }) {
  return (
    <section className="mx-auto max-w-[750px] px-6 pb-12 md:pb-16">
      <div className="bg-[#F3F1E7] p-6 md:px-12 md:py-10 rounded-md">
        <dl className="space-y-2 md:space-y-1">
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] items-baseline gap-x-9"
            >
              <dt className="text-[11px] md:text-base tracking-[0.05em] uppercase after:content-[':']">
                {r.label}
              </dt>
              <dd className="font-display text-2xl leading-snug">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
