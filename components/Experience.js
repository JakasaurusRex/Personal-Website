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
				<Box p={5}><Image fit="contain" boxSize="7em" src={imgUrl} /> </Box>
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
				<Feature title="Meta University Internship" location="Menlo Park, CA" desc="I will be working on a team to develop an iOS app using Meta's infastructure and tools." time="June 2022 - August 2022" imgUrl="/Meta1.png" webLink="https://www.metacareers.com/careerprograms/pathways/metauniversity" />
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
