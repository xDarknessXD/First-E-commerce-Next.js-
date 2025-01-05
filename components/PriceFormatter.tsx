import { cn } from '@/lib/utils'
import React from 'react'
interface Props {
    amount:number | undefined
    className?:string
}

const PriceFormatter = ({amount,className}:Props) => {
    const formatterPrice = new Number(amount).toLocaleString('en-US',{
        currency:"USD",
        style:"currency",
        minimumFractionDigits:2,
    })
  return (
    <span className={cn('text-sm font-semibold text-darkColor',className)}>{formatterPrice}</span>
  )
}
export default PriceFormatter