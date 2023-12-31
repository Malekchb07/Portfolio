import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Stack, useDisclosure } from "@chakra-ui/react"
import React from "react"
import malik from '../../../assests/images/malekChb.png'



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
                            minHeight="100vh"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="white"
                        ></Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}