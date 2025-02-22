"use client"; // Đánh dấu đây là Client Component

import { useState } from "react";

interface Voucher {
  code: string;
  discount: string;
  expires: string;
  affiliateLink: string;
}

export default function VoucherCard({ voucher }: { voucher: Voucher }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(voucher.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset sau 2 giây
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
      <div>
        <p className="text-lg font-bold">{voucher.code}</p>
        <p className="text-gray-600">{voucher.discount}</p>
        <p className="text-sm text-gray-500">Hết hạn: {voucher.expires}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleCopy}
          className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
        >
          {copied ? "Đã sao chép" : "Copy"}
        </button>
        <a
          href={voucher.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Dùng ngay
        </a>
      </div>
    </div>
  );
}
