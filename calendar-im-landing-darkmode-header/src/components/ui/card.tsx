import * as React from 'react'
import { cn } from '@/lib/cn'
function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn('rounded-xl border bg-white dark:bg-slate-900 dark:border-slate-800', className)} {...props} /> }
function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn('p-6 pb-2', className)} {...props} /> }
function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 className={cn('text-xl font-semibold leading-none tracking-tight', className)} {...props} /> }
function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) { return <div className={cn('p-6 pt-0', className)} {...props} /> }
export { Card, CardHeader, CardTitle, CardContent }
