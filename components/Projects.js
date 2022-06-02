//Importing stuff
import React from 'react'

import {
	Flex,
	Box,
	Button,
	Heading,
	Spacer,
	Image,
	Link,
	Stack
} from '@chakra-ui/react'

//Card function for each project I have worked on. Kinda based on example on the chakra ui website
function Card({imgUrl, projName, projDesc, projLink, ...rest}) {
	return (
		<Box w="sm" borderRadius='lg' shadow="dark-lg">
			<Image src={imgUrl} alt={projName} h="20%" maxWidth="100%" fit="cover"/>
			
			<Box backgroundColor='white' p='6'>
				<Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
					<Link href={projLink}>{projName}</Link>
				</Box>
				<Box as='span' color='gray.600' fontSize='sm'>
					{projDesc}
				</Box>
			</Box>
		</Box>
	)
}

//Project function
const Projects = () => {
	return (
		<section id="projects">
			<Stack p={8} spacing={4} direction="column" justifyContent="center" align="center" backgroundColor="#89defa">
				<Heading mb={4} color="white" size="lg"> Personal Projects and Other Stuff </Heading>
				<Flex minWidth="max-content" justifyContent="center" align="center">
					<Card imgUrl="/Webby.png" projName="Personal Website" projDesc="Made this website! Learned React.js and Next.js and used chakra-ui to produce this. Hosted using vercel!" projLink="https://github.com/JakasaurusRex/PersonalWebsitePart3" /> 
					<Card imgUrl="/Alfred.png" projName="Discord Trivia Bot" projDesc="Made a Discord Bot using Java and the JDA Discord API that could create a trivia match between 2 users with questions from an online database of 50,000 questions." projLink=" " />
					<Card imgUrl="/Faux.png" projName="Faux - 7th Place Brackeys 4 Game Jam" projDesc="Made a game in week using C#, FMOD, Monogame and .NET for a game jam hosted by the youtuber Brackeys. Placed 7th in the world. Made a platforming game where time reverses when you just in the air inspired by Celeste!" projLink="https://jakasaurus.itch.io/faux" />
				</Flex>
			</Stack>
		</section>
	)
}

//Exporting project
export default Projects
