import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const tagVariant: Record<string, string> = {
  Featured:    "bg-secondary/20 text-secondary border-secondary/25",
  "New Listing":"bg-primary/15 text-primary border-primary/20",
  Exclusive:   "bg-tertiary/20 text-tertiary border-tertiary/25",
};

export function PropertyCard({ property, className }: PropertyCardProps) {
  const {
    id, title, address, city, priceLabel, beds, bedsLabel, baths, sqft, type, tag, image,
  } = property;

  return (
    <Link
      href={`/properties/${id}`}
      className={cn(
        "group relative flex flex-col rounded-2xl overflow-hidden shadow-card",
        "ghost-border transition-all duration-500",
        "hover:shadow-ambient hover:-translate-y-1",
        className,
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-c">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="gradient-overlay-bottom absolute inset-0" />

        {/* Tag */}
        {tag && (
          <span
            className={cn(
              "absolute top-4 left-4 px-3 py-1 rounded-full border text-label-sm font-semibold backdrop-blur-sm",
              tagVariant[tag] ?? "bg-surface-c/80 text-on-surface border-outline-variant/30",
            )}
          >
            {tag}
          </span>
        )}

        {/* Sold badge */}
        {type === "sold" && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full border bg-tertiary/20 text-tertiary border-tertiary/30 text-label-sm font-semibold backdrop-blur-sm">
            Sold
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 bg-surface-c-high flex-1">
        <div>
          <p className="text-label-md text-outline mb-1">{city}</p>
          <h3 className="font-serif text-title-lg text-on-surface font-semibold leading-snug group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-body-md text-on-surface-variant mt-0.5">{address}</p>
        </div>

        <div className="flex items-center gap-4 text-on-surface-variant text-body-md">
          <span className="flex items-center gap-1.5">
            <BedDouble size={14} className="text-outline" />
            {bedsLabel ?? beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={14} className="text-outline" />
            {baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 size={14} className="text-outline" />
            {sqft > 0 ? `${sqft.toLocaleString()} ft²` : "—"}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-outline-variant/15">
          <span className="font-serif text-title-md font-semibold text-secondary">
            {priceLabel}
          </span>
          <span className="text-label-sm text-on-surface-variant capitalize">
            {type === "lease" ? "For Lease" : type === "sold" ? "Sold" : "For Sale"}
          </span>
        </div>
      </div>
    </Link>
  );
}
