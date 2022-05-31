//Importing all parts of the page from the components folder
import NavBar from '../components/NavBar'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

//Exporting all of them called on for the Index
export default function Index() {
    return (
		<>
			<NavBar> </NavBar>
			<About> </About>
			<Experience> </Experience>
			<Projects> </Projects>
			<Contact> </Contact>
			<Footer> </Footer>
		</>
	)
}

