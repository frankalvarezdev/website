import { Image, Modal, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react"

const ImagePreview: React.FC<ImagePreviewProps> = ({ onClose, isOpen, url }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='full'>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />

                <Image
                    src={url}
                    alt='Preview'
                    h='100vh'
                    objectFit='contain'
                />
            </ModalContent>
        </Modal>
    )
}

interface ImagePreviewProps {
    isOpen: boolean
    onClose: () => void
    url?: string
}

export default ImagePreview