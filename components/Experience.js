//Importing stuff
import React from 'react'

import {
	Box,
	Heading,
	Image,
	Text,
	Link,
	Stack,
} from '@chakra-ui/react'

//Creating function to add each card seen as an experience
function Feature({title, location, time, desc, descContent, imgUrl, webLink, ...rest}) {
	return (
		<Box 
			backgroundColor="white" 
			p={6} 
			shadow="dark-lg" 
			borderRadius='lg'
			transition="all 0.2s"
			_hover={{
				transform: 'scale(1.01)',
				shadow: "2xl"
			}}
			height="fit-content"
			{...rest}
		>
			<Stack spacing={4}>
				<Box 
					position="relative" 
					width="100%"
					height="150px"
					overflow="hidden"
					borderRadius="md"
				>
					<Image 
						src={imgUrl}
						alt={title}
						width="100%"
						height="100%"
						objectFit="contain"
						loading="lazy"
					/>
				</Box>
				
				<Stack spacing={2}>
					<Link 
						href={webLink}
						_hover={{ textDecoration: 'none', color: 'blue.500' }}
						isExternal
					>
						<Heading 
							fontSize='xl'
							lineHeight="tight"
						>
							{title}
						</Heading>
					</Link>
					<Heading 
						size="sm" 
						fontWeight="400" 
						fontStyle="italic"
						color="gray.600"
					>
						{time} &#8226; {location}
					</Heading>
					<Box fontSize="sm" color="gray.700">
						{descContent ? descContent : <Text>{desc}</Text>}
					</Box>
				</Stack>
			</Stack>
		</Box>
	)
}

//Experience function
const Experience = () => {
	return (
		<section id="experience">
			<Box 
				p={{ base: 4, md: 8 }} 
				backgroundColor="#ff4066"
				minH="100vh"
			>
				<Stack spacing={8} align="center">
					<Heading 
						mb={{ base: 4, md: 6 }} 
						color="white" 
						fontSize={{ base: "2xl", md: "3xl" }}
						textAlign="center"
					> 
						Experience 
					</Heading>
					
					<Box
						width="100%"
						maxWidth="1200px"
						px={{ base: 2, md: 4 }}
						sx={{
							columnCount: { base: 1, md: 2 },
							columnGap: { base: "20px", md: "30px" },
							"& > div": {
								breakInside: "avoid",
								marginBottom: { base: "20px", md: "30px" }
							}
						}}
					>
						<Box>
							<Feature 
								title="Figma Software Engineer" 
								location="San Francisco, CA" 
								desc="Starting as a Software Engineer at Figma!" 
								time="August 2025" 
								imgUrl="/figma.png" 
								webLink="https://www.figma.com/" 
							/>
						</Box>
						<Box>
							<Feature 
								title="Riot Games Software Engineering Internship - Valorant Core Gameplay" 
								location="Los Angeles, CA" 
								desc="Worked with designers to create a new gameplay feature from design to implementation in Unreal Engine. Iterated on prototypes to create designers vision. Used C++ to create a backend information tracking system that was copied from servers to clients to allow clients to get updated info. Created a front-end prototype UI for daily playtesting using Blueprints. I Will update when feature is realesed to the public with more information!" 
								time="May 2024 - August 2024" 
								imgUrl="/Riot.jpg" 
								webLink="https://www.riotgames.com/en" 
							/>
						</Box>
						<Box>
							<Feature 
								title="Advanced Programming in C Teaching Assistant - CS@Columbia University" 
								location="New York, NY" 
								desc="Helped with the instruction of Advanced Programming in C for over 1500 students. Graded labs and assessments, hosted office hours, and aided in instruction of the classes. Addtionally hosted review sessions, worked to help update the grading infrastructure, and updated the courses websites. Updated, redesigned, and led a guest lecture on the C implementation of Python and how it related to the class!" 
								time="September 2022 - January 2025" 
								imgUrl="/CSColumbia.png" 
								webLink="https://www.cs.columbia.edu/"
							/>
						</Box>
						<Box>
							<Feature 
								title="Intro to Python Teaching Assistant - CS@Columbia University" 
								location="New York, NY" 
								descContent={
									<Box>
										Helped with the instruction of Intro to Python for over 100 students. Graded homework assignments, helped update the course website and hosted office hours. Additionally, I wrote the final project assignment for the course tasking students to make a game using Pygame and following a{' '}
										<Link href="https://jakasaurusrex.github.io/Pygame-Workshop/" color="blue.500" _hover={{ color: "blue.600" }} isExternal>
											workshop I designed
										</Link>. Here are some of the{' '}
										<Link href="https://www.cs.columbia.edu/~paine/1006/gallery/" color="blue.500" _hover={{ color: "blue.600" }} isExternal>
											awesome projects students made
										</Link>!
									</Box>
								}
								time="January 2025 - May 2025" 
								imgUrl="/CSColumbia.png" 
								webLink="https://www.cs.columbia.edu/"
							/>
						</Box>
						<Box>
							<Feature 
								title="Operating Systems Teaching Assistant - CS@Columbia University" 
								location="New York, NY" 
								desc="Helped with the instruction of Operating Systems to 100 students. In the course students wrote updates directly to the Linux Kernel. As a TA, I updated homework assignments, helped setup infrastructure, and graded assignments and exams as well as hosted office hours and answered students questions on the online form." 
								time="January 2024 - May 2024" 
								imgUrl="/CSColumbia.png" 
								webLink="https://www.cs.columbia.edu/"
							/>
						</Box>
						<Box>
							<Feature 
								title="VISER - Columbia Graphics and User Interfaces Researcher" 
								location="New York, NY" 
								desc="Helped improve the UI/UX of a VR application using the MRTK framework in Unity. Performed user studies to determine necessary features and fixes. Published in a research paper about the app." 
								time="September 2023 - January 2024" 
								imgUrl="/CSColumbia.png" 
								webLink="https://graphics.cs.columbia.edu/home" 
							/>
						</Box>
						<Box>
							<Feature 
								title="Microsoft Software Engineering Internship" 
								location="Redmond and Seattle, WA" 
								desc="Working on a project in the Azure Holmes team under Nisarg Sheth. My project - codenamed Dr Watson - would diagnose live migrating virtual machines to improve visibility for team members solving issues, help increase the success rate of migrations and would lay the ground work for future improvements that could allow for a machine learning algorithm to automatically make decisions based on the status of a virtual machine provided by API endpoints I setup. I learned about working with a massive codebase, advanced C# skils, networking, multithreading and how to use databases and logging to understand how processes and services occur in a massive system." 
								time="June 2023 - September 2023" 
								imgUrl="/MS1.png" 
								webLink="https://www.microsoft.com" 
							/>
						</Box>
						<Box>
							<Feature 
								title="Meta/Facebook University Internship" 
								location="Menlo Park, CA" 
								desc="Learned how to develop iOS applications and full stack development in Xcode with Objecive C and Swift. In the first 3 weeks of the 10 week internship, I was taught the ins and outs of iOS development in an accelerated Codepath course. During the course we made clones of IMDB, Twitter and Instagram using the moviedb, Twitter, and Parse APIs respectively. I ranked highly among my classmates due to the amount of stretch features and new features I implemented in my apps. The last 7 weeks were dedicated to my solo capstone project - Piccy, which can be found on my GitHub. This process involved me wireframing and designing the app and planning it out and then implementing the planned features." 
								time="June 2022 - August 2022" 
								imgUrl="/Meta1.png" 
								webLink="https://www.metacareers.com/careerprograms/pathways/metauniversity" 
							/>
						</Box>
						<Box>
							<Feature 
								title="Microsoft TEALs Volunteer" 
								location="Miami, FL" 
								desc="Helped high school teachers teach introductory computer science classes. Gave guest speech about my experience." 
								time="June 2021 - April 2022" 
								imgUrl="/MS1.png" 
								webLink="https://www.microsoft.com/en-us/teals"
							/>
						</Box>
						<Box>
							<Feature 
								title="Code Ninjas Sensei" 
								location="Broomfield, CO" 
								desc="Taught kids 7-15 how to code in JavaScript, Scratch, Python, C#, and Lua by making games. Helped organize and run day to day operations in center. Created curriculum and ran weeklong day camps during the summer and winter breaks. Created and ran a Python class during Covid-19 online learning. Recommendation letter from my employer can be found on my LinkedIn profile." 
								time="November 2019 - June 2021" 
								imgUrl="/CN2.png" 
								webLink="https://www.codeninjas.com/" 
							/>
						</Box>
						<Box>
							<Feature 
								title="Colorado School of Mines - High School Intern" 
								location="Golden, CO" 
								desc="Helped run a Python camp for faculty, researchers, professors and teachers around and in Colorado. Wrote curriculum for introductory Python class taken in the folllowing fall semester by undergraduates. Introduced computer science through STEM related fields with an undergraduate partner to K-12 graders. Helped run Coding for Good program where high school students worked on an app to help their community. My team made a carbon footprint calculator website." 
								time="June 2020 - August 2020" 
								imgUrl="/CSMines1.jpeg" 
								webLink="https://cs.mines.edu/csminesinterns/"
							/>
						</Box>
					</Box>
				</Stack>
			</Box>
		</section>
	)
}

export default Experience
