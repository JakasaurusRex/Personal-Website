//Importing stuff
import React from 'react'

import {
	Box,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react'

//Card function for each project I have worked on
function Card({imgUrl, projName, projDesc, projLink, ...rest}) {
	return (
		<Box 
			w="100%" 
			borderRadius='lg' 
			shadow="dark-lg"
			transition="all 0.2s"
			_hover={{
				transform: 'scale(1.02)',
				shadow: "2xl"
			}}
			bg="white"
			overflow="hidden"
			height="fit-content"
			{...rest}
		>
			<Box position="relative" paddingTop="56.25%"> {/* 16:9 Aspect Ratio */}
				<Image 
					src={imgUrl} 
					alt={projName} 
					position="absolute"
					top="0"
					left="0"
					width="100%"
					height="100%"
					objectFit="cover"
					loading="lazy"
				/>
			</Box>
			
			<Stack spacing={3} p={6}>
				<Link 
					href={projLink}
					_hover={{ textDecoration: 'none' }}
				>
					<Heading 
						size="md"
						lineHeight="tight"
						noOfLines={2}
						_hover={{ color: "blue.500" }}
					>
						{projName}
					</Heading>
				</Link>
				<Text 
					color='gray.600' 
					fontSize={{ base: 'sm', md: 'md' }}
				>
					{projDesc}
				</Text>
			</Stack>
		</Box>
	)
}

//Project function
const Projects = () => {
	return (
		<section id="projects">
			<Box 
				p={{ base: 4, md: 8 }} 
				backgroundColor="#89defa"
				minH="100vh"
			>
				<Stack spacing={8} align="center">
					<Heading 
						mb={{ base: 4, md: 6 }} 
						color="white" 
						size="lg"
						fontSize={{ base: "2xl", md: "3xl" }}
						textAlign="center"
					> 
						Personal Projects and Other Stuff 
					</Heading>
					
					<Box
						width="100%"
						maxWidth="1200px"
						px={{ base: 2, md: 4 }}
						sx={{
							columnCount: { base: 1, md: 2, lg: 3 },
							columnGap: { base: "20px", md: "30px" },
							"& > div": {
								breakInside: "avoid",
								marginBottom: { base: "20px", md: "30px" }
							}
						}}
					>
						<Box>
							<Card 
								imgUrl="/LionJam.png" 
								projName="LionJam 2024 & 2025" 
								projDesc="
								Organized and hosted the first large scale game jam at Columbia in Spring 2024 and 2025 with industry guests and judges from Riot Games, Xbox, Playstation, and Activision.
								The game jam was designed for helping students break into the games industry with it being many students first games.
								I helped introduce students to the Godot game engine and other free tools to help them make their first games over a 3-week period based on a randomly selected theme.
								We had over 40 students make their first games ever over the last two years!!
								" 
								projLink="" 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/Feesh.png" 
								projName="Bro I'm Literally a Fish - 1st Place Microsoft Intern Game Jam" 
								projDesc="Made a game in a week called Bro I'm Literally a Fish - a 3D platforming game and collectathon inspired by Banjo-Kazooie and Donkey Kong 64 - all by myself! I designed the level and ideas, created 3D models, wrote the script, made the music, sound effects and pixel art and more! I also learned a lot about the godot engine and GDScript, 3D animation, texture and vertex shaders, and how to create complex systems in games. Check it out!" 
								projLink="https://jakasaurus.itch.io/bro-im-literally-a-fish" 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/Piccy.gif" 
								projName="Piccy iOS Social Media App" 
								projDesc="Made a fully functional daily themed gif posting social media app for iOS using Objective C and Swift. Ideated and designed the app inspried by BeReal. It was really fun to work on and design from scratch! Check it out!" 
								projLink="https://github.com/JakasaurusRex/Piccy" 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/CakeBlog.png" 
								projName="Cake Blog" 
								projDesc="Created a series of different art projects using Arduinos in Creatived Embedded Systems in Fall 2024 including a lasercut US map with pins that light up states, a multiplayer game using bluetooth, a visual art exhibit, and a 3D model viewer." 
								projLink="https://jakasaurusrex.github.io/CakeBlog/" 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/Godot.png" 
								projName="Introduction to Godot Workshop" 
								projDesc="Made an Introduction to Godot workshop for the 2025 LionJam GameJam I organized at Columbia." 
								projLink="https://jakasaurusrex.github.io/GodotWorkshop/" 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/Pygame.png" 
								projName="Introduction to Pygame Workshop" 
								projDesc="Made an Introduction to Pygame workshop for the Spring 2025 Introduction to Python course. See the card in experiences for more infomration." 
								projLink="https://jakasaurusrex.github.io/Pygame-Workshop/" 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/DivHacks.png" 
								projName="Introduction to Git Workshop" 
								projDesc="Made an Introduction to Git workshop for the 2024 DivHacks Hackathona at Columbia." 
								projLink="https://jakasaurusrex.github.io/GitWorkshop/" 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/Alfred.png" 
								projName="Discord Trivia Bot" 
								projDesc="Made a Discord Bot using Java and the JDA Discord API that could create a trivia match between 2 users with questions from an online database of 50,000 questions." 
								projLink=" " 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/Faux.png" 
								projName="Faux - 7th Place Brackeys 4 Game Jam" 
								projDesc="Made a game in week using C#, FMOD, Monogame and .NET for a game jam hosted by the youtuber Brackeys. Placed 7th in the world. Made a platforming game where time reverses when you jump in the air, inspired by Celeste!" 
								projLink="https://jakasaurus.itch.io/faux" 
							/>
						</Box>
						<Box>
							<Card 
								imgUrl="/Webby.png" 
								projName="Personal Website" 
								projDesc="Made this website! Learned React.js and Next.js and used chakra-ui to produce this. Hosted using vercel!" 
								projLink="https://github.com/JakasaurusRex/PersonalWebsitePart3" 
							/>
						</Box>
					</Box>
				</Stack>
			</Box>
		</section>
	)
}

//Exporting project
export default Projects
