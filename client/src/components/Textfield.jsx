import { TextInput } from '@mantine/core'
import React from 'react'

export default function Textfield({
    size,
    // className,
    ...rest
}) {
    return (
        <TextInput
            // className={className}
            size={size}
            {...rest}
        />
    )
}
