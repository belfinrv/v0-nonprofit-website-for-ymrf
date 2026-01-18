const partners = [
  { name: "NC State University" },
  { name: "UNC Chapel Hill" },
  { name: "UNC Charlotte" },
  { name: "Duke University" },
  { name: "National Science Foundation" },
  { name: "SmartNet Lab" },
]

export function PartnersStrip() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by Leading Institutions
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-16 px-6 rounded-lg bg-background border border-border text-muted-foreground text-sm font-medium hover:border-[#1FB6A6]/30 transition-colors"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
