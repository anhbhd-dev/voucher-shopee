import type { Metadata } from "next";
import Image from "next/image"; // Dùng để tối ưu hình ảnh
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Voucher Shopee - Mã Giảm Giá Mới Nhất 2025",
  description:
    "Tổng hợp mã giảm giá Shopee mới nhất, cập nhật hàng ngày. Săn voucher Shopee để tiết kiệm ngay hôm nay!",
  keywords: "voucher shopee, mã giảm giá shopee, shopee 2025",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-gray-100">
        <header className="bg-orange-500 text-white p-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/shopee-logo.png" // Đường dẫn tới logo trong public
                alt="Shopee Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            {/* Navigation (có thể mở rộng sau) */}
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/"
                className="hover:text-orange-200 transition-colors"
              >
                Trang chủ
              </Link>
              <Link
                href="/voucher"
                className="hover:text-orange-200 transition-colors"
              >
                Mã giảm giá
              </Link>
              <Link
                href="/about"
                className="hover:text-orange-200 transition-colors"
              >
                Giới thiệu
              </Link>
            </nav>
            {/* Mobile menu button (tùy chọn) */}
            <button className="md:hidden text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>© 2025 Voucher Shopee. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
