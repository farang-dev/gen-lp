'use client';

import Link from 'next/link';

export default function JaPage() {
  const checkoutLink = 'https://buy.stripe.com/test_7sIdTW6twfSIbmMfYY';

  const ClockIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const CalendarIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );

  const VideoIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  );

  const CurrencyIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-8">
          <Link
            href="/en"
            className="px-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            English
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              English Bootcamp
            </h1>
            <p className="text-2xl text-gray-700">
              超短期集中型。9回のレッスンで英文法を完全マスター!
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl mb-12 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">コース概要</h2>
              <p className="text-lg opacity-90">
                忙しい日本人ビジネスパーソンや大人のための短期集中型英語学習プログラム
              </p>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <ClockIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">セッション時間</h3>
                      <p className="text-gray-600">90分 × 9回</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <CalendarIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">スケジュール</h3>
                      <p className="text-gray-600">月・火・水・木・金(2週間)</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <VideoIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">形式</h3>
                      <p className="text-gray-600">Google Meets オンライン</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <CurrencyIcon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">時間</h3>
                      <p className="text-gray-600">午後8時〜9時30分</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">カリキュラム</h3>
              <ul className="space-y-4">
                {[
                  "マインドセットと環境設定",
                  "英語の基本構造(SV, SVO, SVOO, SVC, SVOC)",
                  "時制のマスター",
                  "助動詞の完全理解",
                  "前置詞のイメージ理解",
                  "節を使いこなす",
                  "比較表現",
                  "使役動詞と受動態",
                  "関係詞の使い方"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">{index + 1}.</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">特徴</h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "時間効率が良い",
                    desc: "忙しい社会人でも無理なく続けられる短期集中型プログラム"
                  },
                  {
                    title: "わかりやすい解説",
                    desc: "日本語で丁寧に解説するので、英語が苦手な方でも安心"
                  },
                  {
                    title: "自宅で受講可能",
                    desc: "Google Meetsを使用するので、どこからでもレッスンを受けられます"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">お申し込み・お問い合わせ</h3>
            <p className="mb-4 opacity-90">
              ご質問やご相談がある方は、お気軽にお問い合わせください
            </p>
             <div className="text-2xl font-bold mb-4">受講料(計9回): 50,000円</div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={checkoutLink}
                target="_blank"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all font-bold hover:scale-105 transform"
              >
                今すぐ申し込む
              </Link>
              <a
                href="mf.nozawa.day@gmail.com"
                className="px-8 py-4 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all font-bold hover:scale-105 transform"
              >
                メールでお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
