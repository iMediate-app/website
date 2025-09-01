import * as React from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { cn } from '@/lib/cn'
export function Accordion({ children, className }: { children: React.ReactNode, className?: string }) { return <div className={cn('divide-y rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800', className)}>{children}</div> }
export function AccordionItem({ children }: { value: string, children: React.ReactNode }) { return <Collapsible.Root className="block">{children}</Collapsible.Root> }
export function AccordionTrigger({ children }: { children: React.ReactNode }) { const [open,setOpen]=React.useState(false); return (<button onClick={()=>setOpen(!open)} className={cn('w-full text-left p-4 font-medium flex items-center justify-between')}>{children}<span className={cn('transition-transform', open ? 'rotate-180':'')}>▾</span></button>) }
export function AccordionContent({ children }: { children: React.ReactNode }) { return <div className="px-4 pb-4 text-slate-600 dark:text-slate-300">{children}</div> }
