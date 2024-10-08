//Importing stuff
import React from 'react'

import {
	Flex,
	Box,
	Heading,
	Stack,
	Image,
	Text,
	Link
} from '@chakra-ui/react'

//Creating function to add each card seen as an experience, called in Experience function for each job or past experience I have had
function Feature({title, location, time, desc, imgUrl, webLink, ...rest}) {
	return (
		<Box backgroundColor="white" p={8} shadow="dark-lg" borderWidth='1px' {...rest}>
			<Flex> 
				<Box p={5}><Image fit="contain" boxSize="10em" src={imgUrl} /> </Box>
				<Box p={5}>
					<Link href={webLink}><Heading fontSize='xl'>{title}</Heading></Link>
					<Heading size="sm" fontWeight="400" fontStyle="italic">{time} &#8226; {location}</Heading>
					<Text mt={4} fontSize="14px"> {desc} </Text>
				</Box>
			</Flex>
		</Box>
	)
}

//Experience function
const Experience = () => {
	return (<section id="experience">
		<Flex shadow="dark-lg" p={5} justifyContent="center" backgroundColor="#ff4066">	
			<Stack maxWidth="60%" justifyContent="center" direction="column">
				<Box mb={5}><Heading justifyContent="center" align="center" color="white"> Experience </Heading></Box>
<Feature title="Riot Games Software Engineering Internship - Valorant Core Gameplay" location="Los Angeles, CA" desc="Worked with designers to create a new gameplay feature from design to implementation in Unreal Engine. Iterated on prototypes to create designers vision. Used C++ to create a backend information tracking system that was copied from servers to clients to allow clients to get updated info. Created a front-end prototype UI for daily playtesting using Blueprints. I Will update when feature is realesed to the public with more information!" time="May 2024 - August 2024" imgUrl="/Riot.jpg" webLink="https://www.riotgames.com/en" />
<Feature title="Advanced Programming and Operating Systems Teacher Assistant - CS@Columbia University" location="New York, NY" desc="Helped with the instruction of 2 courses, Operating Systems and Advanced Programming in C. Graded labs and assessments, hosted office hours, and aided in instruction of the classes. Addtionally hosted review sessions, worked to help update the grading infrastructure, and updated the courses websites." time="September 2022 - Present" imgUrl="/CSColumbia.png" webLink="https://www.cs.columbia.edu/"/>				
<Feature title="VISER - Columbia Graphics and User Interfaces Researcher" location="New York, NY" desc="Helped improve the UI/UX of a VR application using the MRTK framework in Unity. Performed user studies to determine necessary features and fixes. Published in a research paper about the app." time="September 2023 - Present" imgUrl="/CSColumbia.png" webLink="https://graphics.cs.columbia.edu/home" />
<Feature title="Microsoft Software Engineering Internship" location="Redmond and Seattle, WA" desc="Working on a project in the Azure Holmes team under Nisarg Sheth. My project - codenamed Dr Watson - would diagnose live migrating virtual machines to improve visibility for team members solving issues, help increase the success rate of migrations and would lay the ground work for future improvements that could allow for a machine learning algorithm to automatically make decisions based on the status of a virtual machine provided by API endpoints I setup. I learned about working with a massive codebase, advanced C# skils, networking, multithreading and how to use databases and logging to understand how processes and services occur in a massive system." time="June 2023 - September 2023" imgUrl="/MS1.png" webLink="https://www.microsoft.com" />
<Feature title="Meta/Facebook University Internship" location="Menlo Park, CA" desc="Learned how to develop iOS applications and full stack development in Xcode with Objecive C and Swift. In the first 3 weeks of the 10 week internship, I was taught the ins and outs of iOS development in an accelerated Codepath course. During the course we made clones of IMDB, Twitter and Instagram using the moviedb, Twitter, and Parse APIs respectively. I ranked highly among my classmates due to the amount of stretch features and new features I implemented in my apps. The last 7 weeks were dedicated to my solo capstone project - Piccy, which can be found on my GitHub. This process involved me wireframing and designing the app and planning it out and then implementing the planned features." time="June 2022 - August 2022" imgUrl="/Meta1.png" webLink="https://www.metacareers.com/careerprograms/pathways/metauniversity" />
<Feature title="Microsoft TEALs Volunteer" location="Miami, FL" desc="Helped high school teachers teach introductory computer science classes. Gave guest speech about my experience." time="June 2021 - April 2022" imgUrl="/MS1.png" webLink="https://www.microsoft.com/en-us/teals"/> 


				<Feature title="Code Ninjas Sensei" location="Broomfield, CO" desc="Taught kids 7-15 how to code in JavaScript, Scratch, Python, C#, and Lua by making games. Helped organize and run day to day operations in center. Created curriculum and ran weeklong day camps during the summer and winter breaks. Created and ran a Python class during Covid-19 online learning. Recommendation letter from my employer can be found on my LinkedIn profile." time="November 2019 - June 2021" imgUrl="/CN2.png" webLink="https://www.codeninjas.com/" />
				<Feature title="Colorado School of Mines - High School Intern" location="Golden, CO" desc="Helped run a Python camp for faculty, researchers, professors and teachers around and in Colorado. Wrote curriculum for introductory Python class taken in the folllowing fall semester by undergraduates. Introduced computer science through STEM related fields with an undergraduate partner to K-12 graders. Helped run Coding for Good program where high school students worked on an app to help their community. My team made a carbon footprint calculator website." time="June 2020 - August 2020" imgUrl="/CSMines1.jpeg" webLink="https://cs.mines.edu/csminesinterns/"/>  			
			</Stack>
		</Flex>
	</section>
	)
}

//Exporting Experience
export default Experience
