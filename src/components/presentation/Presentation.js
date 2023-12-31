import { ListItem, Spacer, Stack, UnorderedList } from '@chakra-ui/react';
import malek from '../../assests/images/malek.png';
import { OpenDrawer } from './openDrawer/OpenDrawer';

const Presentation = () => {
	return (
		<Stack
		bgImage={`url(${malek})`}
		bgSize="cover"
		bgPosition="center"
		bgRepeat="no-repeat"
		minHeight="100vh"
		display="flex"
		alignItems="center"
		justifyContent="center"
		color="white"
	  >
		<Stack >
		  <UnorderedList>
			<ListItem>Lorem ipsum dolor sit amet</ListItem>
			<ListItem>Consectetur adipiscing elit</ListItem>
			<ListItem>Integer molestie lorem at massa</ListItem>
			<ListItem>Facilisis in pretium nisl aliquet</ListItem>
		  </UnorderedList>
		</Stack>
		<OpenDrawer/>
	  </Stack>
	);
};

export default Presentation;
