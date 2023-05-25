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
<Feature title="Microsoft Software Engineering Internship" location="Redmond and Seattle, WA" desc="Working on a project in the Azure Allocator team under Nisarg Sheth to allocate virtual machines to physical nodes on demand in Microsoft Servers." imgUrl="/MS1.png" webLink="https://www.microsoft.com" />
<Feature title="Advanced Programming Teacher Assistant - CS@Columbia University" location="New York, NY" desc="Graded labs and assessments, hosted office hours, and aided in instruction of the class of 400 students. Addtionally hosted review sessions, worked to help update the grading infrastructure, and updated the course website." time="September 2022 - January 2023 (Studied abroad in Madrid, Spain Spring 2023, but I would like to return as a TA in the fall!)" imgUrl="/CSColumbia.png" webLink="https://www.cs.columbia.edu/"/>				
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
