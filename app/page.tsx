import { Metadata } from "next";
import VoucherList from "../components/VoucherList"; // Component mới

export const metadata: Metadata = {
  title: "Danh Sách Voucher Shopee Hôm Nay",
};

async function getVouchers() {
  const baseApiUrl =
    process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:3000/api";
  const apiUrl = `${baseApiUrl}/vouchers`;
  const res = await fetch(apiUrl, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch vouchers");
  return res.json();
}

export default async function Home() {
  const vouchers = await getVouchers();

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        Danh sách mã giảm giá Shopee hôm nay
      </h2>
      <VoucherList initialVouchers={vouchers} />
    </>
  );
}
