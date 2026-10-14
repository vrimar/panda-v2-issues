import { Carousel } from '@ark-ui/react/carousel'
import { cva, sva } from '../styled-system/css'
import { createRecipeContext, createSlotRecipeContext, styled } from '../styled-system/jsx'

const { withProvider } = createSlotRecipeContext(sva({ slots: ['root'], base: {} }))
export const Root = withProvider(Carousel.Root, 'root')

const { withContext } = createRecipeContext(cva({ base: {} }))
export const Plain = withContext(Carousel.Root)

export const Styled = styled(Carousel.Root)
