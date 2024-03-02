import Header from './Header';
const Resume=()=>{
    return(
        <>

<section className="bg-black text-light" >
	<Header/>
    	<div class="container pb-5">
    		<div class="row justify-content-center pb-5">
          <div class="col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated">
          	<h1 class="big big-2 text-warning">Resume</h1>
            
          </div>
        </div>
    		<div class="row m-4">
    			<div class="col-md-6 ">
    				<div class="resume-wrap ftco-animate fadeInUp ftco-animated p-1">
    					<span class="date text-warning-emphasis">2014-2016</span>
    					<h2>Master of Arts</h2>
    					<span class="position">DDU Gorakhpur</span>
    					
    				</div>
    				<div class="resume-wrap ftco-animate fadeInUp ftco-animated p-1">
    					<span className="date text-warning-emphasis">2014-2015</span>
    					<h2>Bachelor's of Arts</h2>
    					<span class="position">DDU Gorakhpur</span>
    					
    				</div>
    				<div class="resume-wrap ftco-animate fadeInUp ftco-animated p-1">
    					<span class="date text-warning-emphasis">2007-2010</span>
    					<h2>Diploma in Information Technology</h2>
    					<span class="position">Board of Technical Education, Lucknow</span>
    					
    				</div>
    			</div>

    			<div class="col-md-6">
    				<div class="resume-wrap ftco-animate fadeInUp ftco-animated p-1">
    					<span class="date text-warning-emphasis">2024</span>
    					<h2>Full Stack Web Development Internship Programm</h2>
    					<span class="position">Edureka!</span>
    					
    				</div>
    				
    					
    					
    			</div>
    		</div>
    		
    	</div>
    </section>
       
        </>
    )
};

export default Resume;