"use client";

import { useState } from "react";
import VoucherCard from "./VoucherCard";

interface Voucher {
  code: string;
  discount: string;
  category: string;
  expires: string;
  affiliateLink: string;
}

interface VoucherListProps {
  initialVouchers: Voucher[];
}

export default function VoucherList({ initialVouchers }: VoucherListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Shipping"];

  const filteredVouchers =
    selectedCategory === "All"
      ? initialVouchers
      : initialVouchers.filter(
          (voucher) => voucher.category === selectedCategory
        );

  return (
    <>
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filteredVouchers.map((voucher, index) => (
          <VoucherCard key={index} voucher={voucher} />
        ))}
      </div>
    </>
  );
}
