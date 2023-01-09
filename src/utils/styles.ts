import { Interpolation } from '@chakra-ui/react'

type NamedStyles<T> = {
    [P in keyof T]: Interpolation<{}>
}

export const cssSheet = <T extends NamedStyles<T>>(styles: T | NamedStyles<T>) => {
    return styles
}