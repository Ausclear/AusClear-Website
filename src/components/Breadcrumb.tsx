import Link from 'next/link';

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <div className="flex items-center gap-2 text-[0.75rem] text-[#6b6760] font-light mb-8">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-[rgba(201,168,76,0.3)]">/</span>}
          {item.href ? (
            <Link href={item.href} className="text-[#9a968e] no-underline hover:text-[#c9a84c] transition-colors">{item.label}</Link>
          ) : (
            <span className="text-[#c9a84c]">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
