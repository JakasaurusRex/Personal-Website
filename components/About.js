//Importing stuff
import React, { useEffect, useState } from 'react'

//Importing stuff for slideshow
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import {
    Flex,
    Box,
    Heading,
    Link,
    Stack,
    Text,
    Container
} from '@chakra-ui/react' 

//Creating an array for all the images in the slideshow
const fadeImages = [
	{
		url: '/LatinGrad.png',
		alt: 'Latin Grad'
	},
	{
		url: '/CSGrad.png',
		alt: 'CS Grad'
	},
	{
		url: '/NewPFP.png',
		alt: 'New PFP'
	},
	{
		url: '/Lucas.png',
		alt: 'Lucas'
	},
	{
		url: '/Food.png',
		alt: 'Food'
	},
	{
		url: '/Riot.png',
		alt: 'Riot'
	},
	{
		url: '/Lisbon.png',
		alt: 'Lisbon'
	},
	{
		url: '/Roaree.png',
		alt: 'Roaree'
	},
	{
		url: '/Beach2.png',
		alt: 'Beach'
	},
	{
		url: 'Cliff.jpg',
		alt: 'Cliff'
	},
	{
		url: 'CN1.png',
		alt: 'CN'
	},
	{
		url: 'Eat1.png',
		alt: 'Food'
	},
	{
		url: 'Noco1.png',
		alt: 'Noco'
	},
	{
		url: 'Phys1.png',
		alt: 'Physics'
	},
];

//Function for slideshow
const Slideshow = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return (
			<Box 
				className="slide-container" 
				width={{ base: "100%", md: "400px" }}
				sx={{
					aspectRatio: "1",
					borderRadius: "lg",
					overflow: "hidden",
					boxShadow: "md",
					position: "relative",
					margin: "0 auto"
				}}
			>
				<img 
					src={fadeImages[0].url} 
					alt={fadeImages[0].alt}
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						objectPosition: 'center'
					}}
				/>
			</Box>
		);
	}

	return (
		<Box 
			className="slide-container" 
			width={{ base: "100%", md: "400px" }}
			sx={{
				aspectRatio: "1",
				borderRadius: "lg",
				overflow: "hidden",
				boxShadow: "md",
				position: "relative",
				margin: "0 auto"
			}}
		>
			<Fade>
				{fadeImages.map((fadeImage, index) => (
					<div 
						className="each-fade" 
						key={index}
						style={{
							width: '100%',
							height: '100%'
						}}
					>
						<div 
							className="image-container" 
							style={{ 
								width: '100%',
								height: '100%'
							}}
						>
							<img 
								src={fadeImage.url} 
								alt={fadeImage.alt}
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									objectPosition: 'center'
								}}
							/>
						</div>
					</div>
				))}
			</Fade>
		</Box>
	)
}

//About function
const About = () => {
	return (
		<section id="about">
			<Box 
				backgroundColor="#faf8f7" 
				py={{ base: 8, md: 12 }}
				px={{ base: 4, md: 8 }}
			>
				<Container maxW="1200px">
					<Stack 
						direction={{ base: "column", md: "row" }}
						spacing={{ base: 6, md: 8 }}
						align="start"
					>
						<Box 
							width={{ base: "100%", md: "400px" }}
							sx={{
								aspectRatio: "1",
								margin: { base: "0 auto", md: "0" }
							}}
						>
							<Slideshow />	
						</Box>
						
						<Stack spacing={4} flex="1">
							<Heading 
								fontSize={{ base: "1xl", md: "3xl" }}
								color="gray.900"
								fontWeight="bold"
								mb={2}
							> 
								Hey! I'm Jake Torres :D  
							</Heading> 
							
							<Text 
								fontSize={{ base: "sm", md: "md" }}
								color="gray.700"
								lineHeight="tall"
							> 
								I am Software Engineer at <Link href="https://www.figma.com/" color="blue.500" _hover={{ color: "blue.600" }}>Figma</Link> and recent grad from <Link href="https://www.columbia.edu" color="blue.500" _hover={{ color: "blue.600" }}>Columbia University</Link> in New York city where I studied Computer Science concentrating in Software Systems & Creative Engineering with an interest in Astronomy, Physics, and Makerspacing. Some of my interests outside of CS and physics are board games and video games (I am currently playing Persona 5) with friends, building computers and keyboards, video and photo editing, traveling (I studied abroad in Madrid, Spain Spring 2023!), walking through nature, working out, EATING (I love food, especially KBBQ), reading comics/manga (reading Vagabond right now!), and hanging out with my dogs Clifford and Homer. 
							</Text>
							<Text 
								fontSize={{ base: "sm", md: "md" }}
								color="gray.700"
								lineHeight="tall"
							>
								An interest I found more recently is creative writing and satire for <Link href="https://www.bwog.com/author/jaket/" color="blue.500" _hover={{ color: "blue.600" }}>Bwog</Link>, one of Columbia's student news organizations, which has been super fun! I also recently directed a sketch comedy skit in Fall 2023 and acted in Spring 2025! Another passion and hobby of mine is video game developing and modding which is what I work on in my free-time occasionally and for work in 2024 at Riot Games! I also helped organize the first large scale game jam at Columbia in Spring 2024 and 2025, LionJam!
							</Text>

							<Text 
								fontSize={{ base: "sm", md: "md" }}
								color="gray.700"
								lineHeight="tall"
							>
								I am planning on pursuing a PhD in Creative Computing Education in the future where I can research how creating with computers in different mediums provides interesting opportunties for learners. I would also love to become a Computing professor in the future to continue teaching at the university level!
							</Text>
						</Stack>
					</Stack>
				</Container>
			</Box>
		</section>
	)
}

export default About
