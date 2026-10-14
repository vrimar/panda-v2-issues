import { Carousel } from '@ark-ui/react/carousel'
import { ImageCropper } from '@ark-ui/react/image-cropper'
import { sva } from '../styled-system/css'
import { createSlotRecipeContext, styled } from '../styled-system/jsx'

const { withContext } = createSlotRecipeContext(sva({ slots: ['root', 'handle'], base: {} }))
const Handle = withContext(ImageCropper.Handle, 'handle', { forwardProps: ['position'] })
export const handle = <Handle position="ne" />

export const Swatch = styled('input', {}, { forwardProps: ['color'] })
export const Slides = styled(Carousel.Root, {}, { forwardProps: ['padding'] })
export const Plain = styled('input', {}, { forwardProps: ['size'] })
