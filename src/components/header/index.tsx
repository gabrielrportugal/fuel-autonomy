import { Button, useColorMode, Box, Heading, useColorModeValue, Flex, Icon, useBreakpointValue } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { BsFuelPump } from 'react-icons/bs'

import { HamburgerIcon } from '@chakra-ui/icons';

import { useSidebarDrawer } from '@/contexts'
import { DarkModeButton } from '../dark-mode-button'

export const Header = () => {
  const { onOpen } = useSidebarDrawer();

  const bg = useColorModeValue('seconday.50', 'secondary.900');
  const titleColor = useColorModeValue('primary.500', 'primary.50');

  const isDesktopVersion = useBreakpointValue({ base: false, lg: true }); 

  return (
    <Box 
      as="header" 
      display="flex" 
      w="100%" 
      boxShadow='base'
      justifyContent="center"
      bg={bg}
    >
      <Box
        display="flex" 
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxWidth="8xl"
        height="4.5rem"
        margin={["0 1.5rem", "0 5rem"]}
      >
        <Link href="/" _hover={{ color: 'blue.500' }}>
          <Flex alignItems="center" >
            <Icon 
              as={BsFuelPump} 
              color={titleColor}
              boxSize={[4,  6 , 8 , 10]}
            />

            <Heading as="h1" size={["sm", "md", "lg", "xl"]} color={titleColor} ml={[2, 4, 6]}>
              FUEL ECONOMY
            </Heading>
          </Flex>
        </Link>

        {isDesktopVersion && <DarkModeButton />}

        {!isDesktopVersion && (
          <Button onClick={onOpen}>
            <HamburgerIcon color={titleColor} boxSize={[4,  6]}   />
          </Button>
        )}
      </Box>
    </Box>
  )
}