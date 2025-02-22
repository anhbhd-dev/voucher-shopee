import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh Sách Voucher Shopee Hôm Nay",
};

const vouchers = [
  { code: "SHOPEE50K", discount: "Giảm 50K", link: "https://shopee.vn" },
  {
    code: "FREESHIP",
    discount: "Miễn phí vận chuyển",
    link: "https://shopee.vn",
  },
];

export default function Home() {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        Danh sách mã giảm giá Shopee hôm nay
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {vouchers.map((voucher, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-bold">{voucher.code}</p>
              <p className="text-gray-600">{voucher.discount}</p>
            </div>
            <a
              href={voucher.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Dùng ngay
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
