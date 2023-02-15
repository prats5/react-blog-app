import Base from "../components/Base"
import userContext from "../context/userContext"



const About = () => {
    return (
        <userContext.Consumer>
            {
                (object) => (

                    <Base>
                        <h1>
                            This is About page
                        </h1>
                        
                    </Base>
                )
            }
        </userContext.Consumer>
    )
 
 }
 
 export default About;