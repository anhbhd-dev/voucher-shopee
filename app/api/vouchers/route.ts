import { NextResponse } from "next/server";

const vouchers = [
  {
    code: "SHOPEE50K",
    discount: "Giảm 50K đơn từ 200K",
    category: "All",
    expires: "2025-02-28",
    affiliateLink: "https://shopee.vn/?ref=your-affiliate-id",
  },
  {
    code: "FREESHIP",
    discount: "Miễn phí vận chuyển",
    category: "Shipping",
    expires: "2025-02-25",
    affiliateLink: "https://shopee.vn/?ref=your-affiliate-id",
  },
];

export async function GET() {
  return NextResponse.json(vouchers);
}
