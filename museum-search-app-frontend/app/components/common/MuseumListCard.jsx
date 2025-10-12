'use client';

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/app/authentication/AuthContext";

const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    if (isNaN(date)) return "";

    return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "short"
    });
};

export default function MuseumListCard({ museums, page, totalPages, onPageChange, sortKey, setSortKey }) {
    const { user } = useAuth();

    if (!museums || museums.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center my-16">
                <div className="w-96 h-96 mb-6 relative">
                    <Image
                        src="/images/art/Palette-bro.svg"
                        alt="No Museums"
                        fill
                        className="object-contain"
                    />
                </div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">
                    美術館が見つかりませんでした
                </h2>
                <p className="text-gray-600 mb-6">
                    新しい美術館を登録してみませんか？✨
                </p>
                    <Link href="/museums/create">
                        <button
                            className="px-6 py-3 bg-gradient-to-r from-pink-400 to-orange-400 text-white rounded-full shadow-lg hover:opacity-90 transition"
                        >
                            🎨 美術館を登録する
                        </button>
                    </Link>
                <p className="mt-4 text-red-500">※美術館を登録するには会員登録またはログインが必要です</p>
                <Link href="/users/register" className="text-gray-700 mt-2 hover:underline">会員登録へ</Link>
                <Link href="/users/login" className="text-gray-700 mt-2 hover:underline">ログインへ</Link>
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-end my-8 mr-2">
                <select
                    onChange={(e) => setSortKey(e.target.value)}
                    value={sortKey ?? ""}
                    className="border border-black p-2 rounded"
                >
                    <option value="">ソートを選択</option>
                    <option
                        value="startDate"
                        className={`${sortKey === "startDate" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                    >
                        ⇅ 開催日順
                    </option>
                    <option
                        value="endDate"
                        className={`${sortKey === "endDate" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                    >
                        ⇅ 終了日順
                    </option>
                </select>
            </div>
            
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-2">
                {museums.map((museum) =>
                    museum.exhibitionImage !== null && (
                        <Link
                            key={museum.id}
                            href={`/museums/${museum.id}`}
                            className="
                                block border p-4 rounded shadow hover:shadow-lg transition-shadow duration-200 bg-white
                                hover:bg-gray-50 cursor-pointer
                            "
                        >
                            <div className="relative aspect-[5/6] mb-4 rounded-md overflow-hidden">
                                <Image
                                    src={museum.exhibitionImage}
                                    alt={museum.exhibition}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-base font-medium">{museum.exhibition}</p>
                            <p className="text-sm">{museum.name}</p>
                            <p className="text-sm font-medium">{formatDate(museum.startDate)}~{formatDate(museum.endDate)}</p>
                        </Link>
                    )
                )}
            </div>

            <div className="flex justify-center gap-4 my-6">
                <button
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 0}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    前へ
                </button>
                <span>{page + 1} / {totalPages}</span>
                <button
                    onClick={() => onPageChange(page + 1)}
                    disabled={page >= totalPages - 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                    次へ
                </button>
            </div>
        </>
    )
}