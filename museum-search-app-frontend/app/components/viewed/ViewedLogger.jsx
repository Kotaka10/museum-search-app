'use client';

import { useEffect } from "react";
import { useAuth } from "@/app/authentication/AuthContext";

export default function ViewedLogger({ museum }) {
    const { token } = useAuth();

    useEffect(() => {
        const saveViewedHistrory = async () => {

            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/history`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({ museumId: museum.id }),
                });

                if (!res.ok) {
                    throw new Error('閲覧履歴の保存に失敗しました');
                }
            } catch (err) {
                console.error('閲覧履歴保存エラー:', err);
            }
        };

        saveViewedHistrory();
    }, [museum]);

    return null;
}