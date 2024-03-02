import image from '../components/IMG20220212133519.jpg';
// import{useNavigate} from "react-router-dom";
import Header from './Header';

const Home=()=>{
// let navigate = useNavigate();
    return(
        <>
 <section className="bg-black">      
<Header/>
<section className="d-flex flex-row justify-content-between m-5 p-5">
    <div className="p-5 fs-2 fw-bold text-warning text-decoration">Hello 
        <div className="text-light">I'm a <span > Full Stack Developer</span></div>
    </div>
    <div className="p-5"><img className="img-fluid" style={{width:"300px", height:"300px",borderRadius:"10px"}} src={image}></img></div>
</section>
</section>    
 </>
);
};
export default Home;

