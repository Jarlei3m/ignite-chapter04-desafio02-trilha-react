import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" maxH="600px" p={0} bgColor="#1b1a18">
        <ModalBody padding={0}>
          <Image margin="0 auto" maxH="600px" src={imgUrl} />
        </ModalBody>
        <ModalFooter
          borderBottomRadius={6}
          bgColor="#1f1f1f"
          flex="1"
          height="100"
          justifyContent="flex-start"
        >
          <Link
            fontSize="14px"
            lineHeight="16px"
            color="#f3f2f2"
            href={imgUrl}
            isExternal
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
