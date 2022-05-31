import React from 'react'
import {
	Flex,
	Box,
	Image,
	Heading,
	Icon,
	Link,
	Stack
} from '@chakra-ui/react'

import { BsLinkedin } from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'

const Contact = () => {
	return (
		<section id="contact">
		<Flex backgroundColor="#faf8f7" justifyContent="center" align="center"> <Stack justifyContent="center" align="center" direction="column">
			<Heading p={8} size="lg" color="black"> Thanks for visiting! </Heading>
			<Heading size="md" color="gray" fontWeight={400}> If you would like to contact me you can reach out to me on LinkedIn or through email! You can also check out my GitHub! </Heading>
			<Flex justifyContent="center" align="center">
				<Link p={4} href="https://www.linkedin.com/in/jake-torres-3a50b2212/">
					<Icon boxSize="2em" as={BsLinkedin}/>
				</Link>
				<Link p={4} href="mailto:jakert2244@gmail.com">
					<Icon boxSize="2em" as={MdEmail}/>
				</Link>
				<Link p={4} href="https://github.com/JakasaurusRex">
					<Icon boxSize="2em" as={BsGithub}/>
				</Link>
			</Flex>
			<Image p={4} src="/Penguino.jpeg" width="60%"/>
		</Stack></Flex>
		</section>
	)
}

export default Contact
