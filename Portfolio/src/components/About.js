import image from '../components/IMG20220212133519.jpg';
import Header from './Header';
const About=()=>{
    return(
        <>
        <section className="bg-black">
         <Header/>   
    	<div class="container">
    		<div class="row d-flex">
    			<div class="col-md-6 col-lg-5 d-flex">
    				<div class="img-about img d-flex align-items-stretch">
    					<div class="overlay"></div>
	    				<div className="p-5 mt-5"><img className="img-fluid" style={{width:"300px", height:"300px",borderRadius:"10px"}} src={image}></img></div>
    				</div>
    			</div>
    			<div class="col-md-6 col-lg-7 pl-lg-5 pb-5">
    				<div class="row justify-content-start pb-3">
		          <div class="col-md-12 heading-section ftco-animate fadeInUp ftco-animated text-light">
		          	{/* <h1 class="big">About</h1> */}
		            <h2 class="mb-5 fw-bold text-warning">About Me</h2>
		            <p>Full Stack Developer (Front End, Back End and Databases)  Java Script. Strong knowledge base of<span className="text-warning"> Node.js</span>  framework and <span className="text-warning"> REST</span> REST architecture. Hands on Experience in designing, building, maintaining, and enhancing Java script-based websites & applications.</p>
		            <table>
        <tr>
            <th className="text-warning-emphasis p-2">Name:</th>
            <td>Khushboo Rai</td>
        </tr>
        <tr>
            <th className="text-warning-emphasis p-2">Date of birth:</th>
            <td>July 5, 1993</td>
        </tr>
        <tr>
            <th className="text-warning-emphasis p-2">Address:</th>
            <td>Gorakhpur, Uttar Pradesh</td>
        </tr>
       
        <tr>
            <th className="text-warning-emphasis p-2">Email:</th>
            <td>khusboo.rai1992@gmail.com</td>
        </tr>
        <tr>
            <th className="text-warning-emphasis p-2">Phone:</th>
            <td>9616971796</td>
        </tr>
     </table>
		          </div>
		        </div>
	          <div class="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
              <div class="text m-2">
              	<p class="mb-4 text-light">
	                <span> 3 Project complete</span>
                </p>
                
              </div>
	          </div>
	        </div>
        </div>
    	</div>
    </section>
        
        
        </>
    );
};

export default About;