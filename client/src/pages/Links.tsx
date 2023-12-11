import Table from '../components/Table';
export default function Links() {
  return <Table />;
  () => {
    const PagButton = (props) => {
      const activeStyle = {
        bg: 'brand.600',
        _dark: {
          bg: 'brand.500',
        },
        color: 'white',
      };
      return (
        <chakra.button
          mx={1}
          px={4}
          py={2}
          rounded="md"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          color="gray.700"
          opacity={props.disabled && 0.6}
          _hover={!props.disabled && activeStyle}
          cursor={props.disabled && 'not-allowed'}
          {...(props.active && activeStyle)}
        >
          {props.children}
        </chakra.button>
      );
    };

    const MButton = (props) => {
      const DoubleArrow = props.left ? ArrowLeftIcon : ArrowRightIcon;
      const [hovered, setHovered] = React.useState(false);
      const hoverColor = useColorModeValue('brand.800', 'brand.700');
      const unHoverColor = useColorModeValue('gray.100', 'gray.200');
      return (
        <chakra.a
          w={4}
          py={2}
          color="gray.700"
          _dark={{
            color: 'gray.200',
          }}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          cursor="pointer"
          textAlign="center"
        >
          {hovered ? (
            <Icon
              as={DoubleArrow}
              boxSize={3}
              cursor="pointer"
              color={hoverColor}
            />
          ) : (
            <Icon
              as={HiDotsHorizontal}
              color={unHoverColor}
              boxSize={4}
              opacity={0.5}
            />
          )}
        </chakra.a>
      );
    };

    return (
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e',
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <HStack>
          <PagButton>
            <Icon
              as={IoIosArrowBack}
              color="gray.700"
              _dark={{
                color: 'gray.200',
              }}
              boxSize={4}
            />
          </PagButton>
          <PagButton>1</PagButton>
          <PagButton active>2</PagButton>
          <PagButton>3</PagButton>
          <PagButton>4</PagButton>
          <PagButton>5</PagButton>
          <MButton right />
          <PagButton>50</PagButton>
          <PagButton>
            <Icon
              as={IoIosArrowForward}
              color="gray.700"
              _dark={{
                color: 'gray.200',
              }}
              boxSize={4}
            />
          </PagButton>
          <Menu>
            <MenuButton ml={1} as={Button} rightIcon={<ChevronDownIcon />}>
              10 / page
            </MenuButton>
            <MenuList>
              <MenuItem>20 / page</MenuItem>
              <MenuItem>30 / page</MenuItem>
              <MenuItem>40 / page</MenuItem>
              <MenuItem>50 / page</MenuItem>
            </MenuList>
          </Menu>
          <HStack>
            <Text wordBreak="unset">Go to:</Text>
            <Input w="50px" />
          </HStack>
        </HStack>
      </Flex>
    );
  };
}
