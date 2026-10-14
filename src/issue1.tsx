import { Carousel } from '@ark-ui/react/carousel'
import { ImageCropper } from '@ark-ui/react/image-cropper'
import { sva } from '../styled-system/css'
import { createSlotRecipeContext, styled } from '../styled-system/jsx'

const { withProvider, withContext } = createSlotRecipeContext(sva({ slots: ['root', 'handle'], base: {} }))

const Handle = withContext(ImageCropper.Handle, 'handle', { forwardProps: ['position'] })
export const handle = <Handle position="ne" />

const Root = withProvider(Carousel.Root, 'root', { forwardProps: ['padding'] })
export const root = <Root slideCount={3} padding="20px" />

export const Swatch = styled('input', {}, { forwardProps: ['color'] })
export const Plain = styled('input', {}, { forwardProps: ['size'] })
