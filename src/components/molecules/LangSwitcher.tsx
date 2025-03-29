// 'use client';

// import type { ChangeEventHandler } from 'react';
// import { routing, usePathname } from '@/libs/i18nNavigation';
// import { useLocale } from 'next-intl';
// import { useRouter } from 'next/navigation';

// const LangSwitcher = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const locale = useLocale();

//   const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
//     router.push(`/${event.target.value}${pathname}`);
//     router.refresh();
//   };

//   return (
//     <select
//       defaultValue={locale}
//       onChange={handleChange}
//       className="card-bg border card-border p-space-01"
//       aria-label="lang-swicher"
//     >
//       {routing.locales.map(elt => (
//         <option key={elt} value={elt} className="bg-card text-primary">
//           {elt.toUpperCase()}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default LangSwitcher;
