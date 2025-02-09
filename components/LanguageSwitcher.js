'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname() || '';

  const getLocalizedPath = (locale) => {
    const segments = pathname.split('/');
    if (segments[1] === locale) return pathname;
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="flex gap-4 justify-end p-4">
      <Link
        href={getLocalizedPath('ja')}
        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
      >
        日本語
      </Link>
      <Link
        href={getLocalizedPath('en')}
        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium"
      >
        English
      </Link>
    </div>
  );
}
