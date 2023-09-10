import ReactDOM from 'react-dom';
import WelcomeImage from '../public/Welcome.png'
import Tilt from 'react-parallax-tilt';

function Codeblock(){
    return(
        <Tilt>
            <img src={WelcomeImage} alt="Welcome Image" className='rounded-sm w-2/5 h-auto'/>
        </Tilt>

    )
};

export default Codeblock;