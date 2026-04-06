// import { InfoIcon } from 'lucide-react';
// import { memo, useMemo } from 'react';

// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';
// import { useGetRates } from '@/hooks/use-rates-query';
// import { formatCentsToDollarsString, hexToRgb } from '@/lib/helpers';

// // Memoize the CalendarFooter component
// function CalendarFooter() {
//   const { data: dbRates } = useGetRates();

//   const rateElements = useMemo(() => {
//     if (!dbRates) return null;

//     return dbRates.map((rate) => (
//       <TooltipProvider key={rate.id}>
//         <Tooltip delayDuration={20}>
//           <TooltipTrigger asChild className="cursor-help">
//             <div
//               className="flex items-center gap-2 rounded-md px-1.5 py-1"
//               style={{
//                 color: rate.color,
//                 backgroundColor: `rgba(${hexToRgb(rate.color)}, 0.1)`,
//               }}
//             >
//               {rate.name}
//               <InfoIcon className="size-4" />
//             </div>
//           </TooltipTrigger>
//           <TooltipContent className="min-w-60" side="top">
//             {Object.keys(rate.movers_rates)
//               .slice(0, 3)
//               .map((key) => {
//                 const hRate = rate.movers_rates[key].hourly_rate;
//                 return (
//                   <div
//                     key={key}
//                     className="flex justify-between py-1 font-medium"
//                   >
//                     <span>{key} movers & truck</span>
//                     <span>{formatCentsToDollarsString(hRate)}</span>
//                   </div>
//                 );
//               })}
//           </TooltipContent>
//         </Tooltip>
//       </TooltipProvider>
//     ));
//   }, [dbRates]);

//   return (
//     <div className="w-62 border-t rounded-b-md bg-muted">
//       <div className="flex w-full flex-wrap items-center justify-center gap-2 p-4 text-xs font-semibold">
//         {rateElements}
//         <div
//           className="flex items-center gap-2 rounded-md px-1.5 py-1"
//           style={{
//             color: '#000000',
//             backgroundColor: '#dcdcdc',
//           }}
//         >
//           Blocked
//           <span
//             className="size-1.5 rounded-full"
//             style={{
//               backgroundColor: '#000000',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export const MemoizedCalendarFooter = memo(CalendarFooter);
