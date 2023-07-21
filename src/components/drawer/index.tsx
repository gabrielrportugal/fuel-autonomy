import { useSidebarDrawer } from "@/contexts/sidebar-context";
import { DrawerBody, Drawer as DrawerComp, DrawerContent, DrawerHeader, DrawerOverlay, Heading, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { DarkModeButton } from "../dark-mode-button";

export const Drawer = () => {
  const { isOpen, onClose } = useSidebarDrawer();
  const titleColor = useColorModeValue('primary.500', 'primary.50');
  
  return (
    <DrawerComp placement='left' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader 
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth='1px'
        >
          <Heading as="h1" size={["sm", "md", "lg", "xl"]} color={titleColor} ml={[2, 4, 6]}>
            FUEL ECONOMY
          </Heading>
          <DarkModeButton />
        </DrawerHeader>

        <DrawerBody>
          <p>TODO: Menu</p>
        </DrawerBody>
      </DrawerContent>
    </DrawerComp>
  )
}