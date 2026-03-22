const affiliations = [
  { name: "UNC Chapel Hill" },
  { name: "NC State University" },
]

export function PartnersStrip() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-4">
          Our Team Comes From
        </p>

        <div className="flex flex-wrap justify-center gap-6 items-center">
          {affiliations.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-16 px-8 rounded-lg bg-background border border-border text-muted-foreground text-sm font-medium hover:border-[#1FB6A6]/30 transition-colors"
            >
              {partner.name}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Interested in partnering with YMRF? <a href="/contact" className="text-[#1FB6A6] hover:underline">Get in touch</a>
        </p>
      </div>
    </section>
  )
}
