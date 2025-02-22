import VoucherList from "@/components/VoucherList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh Sách Voucher Shopee Hôm Nay",
};

async function getVouchers() {
  const baseApiUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  const apiUrl = `${baseApiUrl}/vouchers`;
  console.log("apiUrl", apiUrl);
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
