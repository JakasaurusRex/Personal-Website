//Importing stuff
import React from 'react'

//Importing stuff for slideshow
import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import {
    Flex,
    Box,
    Heading,
	Link
} from '@chakra-ui/react' 

//Creating an array for all the images in the slideshow, if you wanna add more, add them here
const fadeImages = [
	{
		url: '/Roaree.png'
	},
	{
		url: '/Beach2.png'
	},
	{
		url: 'Cliff.jpg'
	},
	{
		url: 'CN1.png'
	},
	{
		url: 'Eat1.png'
	},
	{
		url: 'Noco1.png'
	},
	{
		url: 'Phys1.png'
	},
];

//Function for slideshow, called when creating About
const Slideshow = () => {
	return (
		<div className="slide-container">
			<Fade>
				{fadeImages.map((fadeImage, index) => (
					<div className="each-fade" key={index}>
						<div className="image-container">
							<img src={fadeImage.url} />
						</div>
						<h2>{fadeImage.caption}</h2>
					</div>
				))}
			</Fade>
		</div>
	)
}

//About function, calls slideshow
const About = () => {
	return (
		<section id="about"><Flex minWidth="full" backgroundColor="#faf8f7">
			<Box w ="30%" p = {8}>
				<Slideshow />	
			</Box>
			<Box> 
				<Heading size="md" mt="10%" py={4} px={12}> Hey! I'm Jake Torres! </Heading> 
				<Heading size="sm" fontWeight={500} px={12} justify="center"> I am currently a sophmore at <Link href="https://www.columbia.edu" color="gray">Columbia University</Link> in New York city studying Computer Science concentrating in either Intelligent Systems or Software Systems with an interest in Astronomy and Physics. Some of my interests outside of CS and physics are board games and video games (I am currently playing indie games on Xbox Game Pass and Valorant) with friends, building computers and keyboards, video and photo editing, traveling (I am currently planning on studying abroad in Madrid, Spain during the 2023 Spring semester), walking through nature, EATING (I love food), reading comics/manga (reading Jujutsu Kaisen right now!), and hanging out with my dogs Clifford and Homer. An interest I found more recently is creative writing for <Link href="https://www.bwog.com/author/jaket/" color="gray">Bwog</Link>, one of Columbia's student news organizations, which has been super fun! Another passion and hobby of mine is video game developing and modding which is what I work on in my free-time occasionally.  					
				</Heading> 	
			</Box>  
		</Flex></section>
	)
}

//Exporting About
export default About
