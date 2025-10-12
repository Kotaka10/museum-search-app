'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/app/authentication/AuthContext';

function InputField({ label, name, type = 'text', value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500 focus:outline-none"
      />
    </div>
  );
}

export default function EditMuseumPage() {
	const router = useRouter();
	const params = useParams();
	const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
	const { token } = useAuth();

	const [form, setForm] = useState({
		name: '',
		address: '',
		prefecture: '',
		phoneNumber: '',
		exhibition: '',
		museumUrl: '',
		exhibitionUrl: '',
		startDate: '',
		endDate: '',
		description: '',
		openingHours: '',
		closingDays: '',
		admissionFee: '',
		access: '',
		latitude: '',
		longitude: '',
		category: '',
	});
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchMuseum = async () => {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/museums/${id}`, {
					headers: {
						"Authorization": `Bearer ${token}`
					},
				});
				if (!res.ok) throw new Error('美術館の取得に失敗しました');
				const data = await res.json();
				setForm(data);
			} catch (err) {
				setError(err.message);
			}
		};
		fetchMuseum();
	}, [id]);

	const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		if (!form.name.trim()) {
            setError("美術館名を入力してください");
            return;
        }
        if (!form.exhibition.trim()) {
            setError("展示名を入力してください");
            return;
        }
        if (!form.address.trim()) {
            setError("住所を入力してください");
            return;
        }
        if (form.name.length > 100 ) {
            setError('美術館名は100文字以下で登録してください');
        }
        if (form.exhibition.length > 100 ) {
            setError('展覧会名は100文字以下で登録してください');
        }
        if (form.schedule.length > 100 ) {
            setError('スケジュールは100文字以下で登録してください');
        }
        if (form.category.length > 100 ) {
            setError('カテゴリーは100文字以下で登録してください');
        }
        if (form.exhibitionUrl.length > 100 ) {
            setError('美術館名は100文字以下で登録してください');
        }
        if (form.museumUrl.length > 100 ) {
            setError('美術館名は100文字以下で登録してください');
        }
        if (form.address.length > 100 ) {
            setError('住所は100文字以下で登録してください');
        }
        if (form.prefecture.length > 10 ) {
            setError('都道府県は10文字以下で登録してください');
        }
        if (form.phoneNumber.length > 15 ) {
            setError('電話番号は10文字以下で登録してください');
        }
        if (form.openingHours.length > 500 ) {
            setError('開館時間は500文字以下で登録してください');
        }
        if (form.closingDays.length > 500 ) {
            setError('休館日は500文字以下で登録してください');
        }
        if (form.access.length > 500 ) {
            setError('アクセスは500文字以下で登録してください');
        }
        if (form.admissionFee.length > 1000 ) {
            setError('入館料は1000文字以下で登録してください');
        }
        if (form.description.length > 1500 ) {
            setError('展示説明は100文字以下で登録してください');
        }

		try {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/museums/${id}`, {
				method: 'PUT',
				headers: {
					"Authorization": "Bearer ${token}",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});

			if (!res.ok) throw new Error('更新に失敗しました');
			alert('更新が完了しました');
			router.push('/');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div className="bg-gradient-to-br from-emerald-50 via-cyan-50 to-sky-10">
			<div className="max-w-3xl mx-auto p-4">
				<h1 className="text-2xl font-bold mb-4">美術館情報を編集</h1>

				<form onSubmit={handleSubmit} className="space-y-4">
					<InputField label="美術館名" name="name" value={form.name || ''} onChange={handleChange} />
					<InputField label="展示名" name="exhibition" value={form.exhibition || ''} onChange={handleChange} />
					<InputField label="住所" name="address" value={form.address || ''} onChange={handleChange} />
					<InputField label="都道府県" name="prefecture" value={form.prefecture || ''} onChange={handleChange} />
					<InputField label="電話番号" name="phoneNumber" value={form.phoneNumber || ''} onChange={handleChange} />
					<InputField label="美術館URL" name="museumUrl" value={form.museumUrl || ''} onChange={handleChange} />
					<InputField label="展示URL" name="exhibitionUrl" value={form.exhibitionUrl || ''} onChange={handleChange} />
					<InputField label="開始日" name="startDate" value={form.startDate || ''} onChange={handleChange} />
					<InputField label="終了日" name="endDate" value={form.endDate || ''} onChange={handleChange} />
					<div>
						<label className="block text-sm font-medium mb-1">説明</label>
						<textarea
							name="description"
							value={form.description || ''}
							onChange={handleChange}
							className="w-full p-2 border rounded h-32 resize-none"
						/>
					</div>
					<InputField label="開館時間" name="openingHours" value={form.openingHours || ''} onChange={handleChange} />
					<InputField label="休館日" name="closingDays" value={form.closingDays || ''} onChange={handleChange} />
					<InputField label="入館料" name="admissionFee" value={form.admissionFee || ''} onChange={handleChange} />
					<InputField label="アクセス" name="access" value={form.access || ''} onChange={handleChange} />
					<InputField label="緯度" name="latitude" type="number" value={form.latitude || ''} onChange={handleChange} />
					<InputField label="経度" name="longitude" type="number" value={form.longitude || ''} onChange={handleChange} />
					<InputField label="カテゴリ" name="category" value={form.category || ''} onChange={handleChange} />

					<button type="submit" className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
						更新する
					</button>
					{error && <p className="text-red-500">{error}</p>}
				</form>
			</div>
		</div>
	);
}
