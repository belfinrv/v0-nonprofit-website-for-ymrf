interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-[#1FB6A6]/10 text-[#1FB6A6] rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-4 text-balance">{title}</h2>
      {description && <p className="text-muted-foreground text-lg leading-relaxed text-pretty">{description}</p>}
    </div>
  )
}
