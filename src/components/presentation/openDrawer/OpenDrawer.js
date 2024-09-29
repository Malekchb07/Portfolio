import { Button, Drawer, DrawerBody, DrawerCloseButton, ButtonGroup, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Stack, useDisclosure } from "@chakra-ui/react"
import React from "react"
import malik from '../../../assests/images/malekChb.png'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"



export const OpenDrawer = () => {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const sizes = ['sm']

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    return (
        <>
            {sizes.map((size) => (
                <Button
                    onClick={() => handleClick(size)}
                    key={size}
                    m={4}
                >{`Open ${size} Drawer`}</Button>
            ))}
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>I Hope That I Can Help You With My Experience In Web development ♡</DrawerHeader>
                    <DrawerBody>
                        <Stack
                            bgImage={`url(${malik})`}
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            minHeight="65vh"
                            display="flex"
                            alignItems="center"
                            color="white"
                            justifyContent='flex-end'
                        >
                            <ButtonGroup bg='transparent' >
                                <IconButton as="a" href="https://www.linkedin.com/in/malek-chahbani-2a014a224/" aria-label="LinkedIn" icon={<FaLinkedin />} />
                                <IconButton as="a" href="https://github.com/Malekchb07" aria-label="GitHub" icon={<FaGithub />} />
                                <IconButton as="a" href="https://whatsapp.com/channel/0029Vaab10yEwEk4zD8z7t0H" aria-label="Twitter" icon={<FaWhatsapp />} />
                            </ButtonGroup>
                        </Stack>

                    </DrawerBody>
                </DrawerContent>
            </Drawer >
        </>
    )
}