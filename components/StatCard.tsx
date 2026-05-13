export function StatCard({
  label,
  value,
  context,
}: {
  label: string;
  value: string;
  context?: string;
}) {
  return (
    <div className="flex flex-col gap-2 py-6">
      <span className="label-mono">{label}</span>
      <span className="serif-display text-[3rem] md:text-[4rem] leading-none text-cobalt">
        {value}
      </span>
      {context ? (
        <span className="text-sm text-ink/65 max-w-[34ch]">{context}</span>
      ) : null}
    </div>
  );
}
