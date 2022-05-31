import React from 'react'

import {
	Flex,
	Box,
	Button,
	Heading,
	Stack,
	Image,
	Text,
	Link
} from '@chakra-ui/react'

function Feature({title, time, desc, imgUrl, webLink, ...rest}) {
	return (
		<Box backgroundColor="white" p={8} shadow="dark-lg" borderWidth='1px' {...rest}>
			<Flex> 
				<Box p={5}><Image fit="contain" boxSize="75px" src={imgUrl} /> </Box>
				<Box p={5}>
					<Link href={webLink}><Heading fontSize='xl'>{title}</Heading></Link>
					<Heading size="sm" fontWeight="400" fontStyle="italic">{time}</Heading>
					<Text mt={4}> {desc} </Text>
				</Box>
			</Flex>
		</Box>
	)
}

const Experience = () => {
	return (<section id="experience">
		<Flex p={5} justifyContent="center" backgroundColor="#ff4066">	
			<Stack direction="column">
				<Box mb={5}><Heading justifyContent="center" align="center" color="white"> Experience </Heading></Box>
				<Feature title="Meta University Internship" desc="Work" time="June 2022 - August 2022" imgUrl="/Meta1.png" webLink="https://www.metacareers.com/careerprograms/pathways/metauniversity" />
				<Feature title="Microsoft TEALs Volunteer" desc="Work 2" time="June 2021 - April 2022" imgUrl="/MS1.png" webLink="https://www.microsoft.com/en-us/teals"/> 
				<Feature title="Code Ninjas Sensei" desc="Work 3" time="November 2019 - June 2021" imgUrl="/CN2.png" webLink="https://www.codeninjas.com/" />
				<Feature title="Colorado School of Mines - High School Intern" desc="Work 4" time="June 2020 - August 2020" imgUrl="/CSMines1.jpeg" webLink="https://cs.mines.edu/csminesinterns/"/>  
			</Stack>
		</Flex>
	</section>
	)
}

export default Experience
