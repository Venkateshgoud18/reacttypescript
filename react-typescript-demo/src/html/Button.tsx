import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
    varient: 'primary' | 'secondary';
} & ComponentPropsWithoutRef<'button'>;
export const Button=({varient}:ButtonProps)=>{
    return (
        <button className={`class-with-${varient}`}>Click me</button>
    )
}