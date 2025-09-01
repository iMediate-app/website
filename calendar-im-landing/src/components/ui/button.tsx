import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/cn'
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean; variant?: 'default'|'outline'|'ghost'; size?: 'sm'|'md'|'lg'
}
const variantClasses = {
  default: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white',
  outline: 'border border-slate-300 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800',
  ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800',
}
const sizeClasses = { sm:'h-8 px-3 text-sm rounded-xl', md:'h-10 px-4 text-sm rounded-xl', lg:'h-11 px-5 text-base rounded-2xl' }
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant='default', size='md', asChild=false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp ref={ref} className={cn('inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-50 disabled:pointer-events-none shadow-sm', variantClasses[variant], sizeClasses[size], className)} {...props} />
})
Button.displayName = 'Button'; export { Button }
