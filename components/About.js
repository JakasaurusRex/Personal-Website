import AnchorLink from 'react-anchor-link-smooth-scroll'
import React from 'react'
import {EmailIcon} from '@chakra-ui/icons'

import {Fade} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import {
     Flex,
     Box,
     Button,
     Heading,
	 AspectRatio,
	 Image,
	 Link
} from '@chakra-ui/react' 

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

const About = () => {
	return (
		<section id="about"><Flex minWidth="full" backgroundColor="#faf8f7">
			<Box w ="30%" p = {8}>
				<Slideshow />	
			</Box>
			<Box> 
				<Heading size="md" mt="10%" py={4} px={12}> Hey! I'm Jake Torres! </Heading> 
				<Heading size="sm" fontWeight={500} px={12} justify="center"> I am currently a sophmore at <Link href="https://www.columbia.edu" color="gray">Columbia University</Link> in New York city studying Computer Science concentrating in either Inteligent Systems or Software Systems with an interest in Astronomy and Physics. Some of my interests outside of CS and physics are board games and  video games (I am currently playing Star Wars: Jedi Fallen Order) with friends, video and photo editing, traveling, walking through nature, EATING (I love food), reading comics (reading Berserk right now!), and hanging out with my dogs Clifford and Homer. An interest I found more recently is creative writing for <Link href="https://www.bwog.com/author/jaket/" color="gray">Bwog</Link>, one of Columbia's student news organizations, which has been super fun! Another passion and hobby of mine is video game developing and modding which is what I work on in my free-time occasionally.  					
				</Heading> 	
			</Box>  
		</Flex></section>
	)
}

export default About
