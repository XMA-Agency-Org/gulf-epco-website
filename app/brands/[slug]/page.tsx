import { notFound } from "next/navigation";
import { brandsData } from "@/lib/brands-data";
import { BrandDetailClient } from "./brand-detail-client";

export function generateStaticParams() {
  return brandsData.map((brand) => ({ slug: brand.slug }));
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brandsData.find((item) => item.slug === slug);

  if (!brand) {
    notFound();
  }

  return <BrandDetailClient brand={brand} />;
}
