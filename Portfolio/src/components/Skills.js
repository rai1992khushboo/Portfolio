import Header from './Header';
const Skills=()=>{
    return(
        <>
        <section className="bg-black text-light ">
			<Header/>
			<div class="container">
				<div class="row justify-content-center pb-5">
          <div class="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
          	<h1 class="fw-bold text-warning m-5">Skills</h1>
            {/* <h2 class="mb-4">My Skills</h2> */}
            <p> Editor Skilled in Web Design</p>
          </div>
        </div>
				<div class="row">
					<div class="col-md-6 animate-box">
						<div class="progress-wrap ftco-animate fadeInUp ftco-animated mt-4 mb-5">
							<h3 className="text-warning-emphasis">HTML5</h3>
							<div class="progress">
							 	<div class="progress-bar color-1" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
							    <span>90%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box">
						<div class="progress-wrap ftco-animate fadeInUp ftco-animated mt-4 mb-5">
							<h3 className="text-warning-emphasis">Bootstrap</h3>
							<div class="progress">
							 	<div class="progress-bar color-2" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
							    <span>80%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box">
						<div class="progress-wrap ftco-animate fadeInUp ftco-animated mt-4 mb-5">
							<h3 className="text-warning-emphasis">CSS</h3>
							<div class="progress">
							 	<div class="progress-bar color-3" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
							    <span>90%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box">
						<div class="progress-wrap ftco-animate fadeInUp ftco-animated mt-4 mb-5">
							<h3 className="text-warning-emphasis">Java Script</h3>
							<div class="progress">
							 	<div class="progress-bar color-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box">
						<div class="progress-wrap ftco-animate fadeInUp ftco-animated mt-5 mb-5">
							<h3 className="text-warning-emphasis">Node js</h3>
							<div class="progress">
							 	<div class="progress-bar color-5" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
							    <span>75%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box">
						<div class="progress-wrap ftco-animate fadeInUp ftco-animated mt-5 mb-5">
							<h3 className="text-warning-emphasis">React</h3>
							<div class="progress">
							 	<div class="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box">
						<div class="progress-wrap ftco-animate fadeInUp ftco-animated mt-5 mb-5">
							<h3 className="text-warning-emphasis">Express.js</h3>
							<div class="progress">
							 	<div class="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
					<div class="col-md-6 animate-box">
						<div class="progress-wrap ftco-animate fadeInUp ftco-animated mt-5 mb-5">
							<h3 className="text-warning-emphasis">Mongo db</h3>
							<div class="progress">
							 	<div class="progress-bar color-6" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
							    <span>70%</span>
							  	</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        {/* <section>
    <div> My Skills</div>
    <div>HTML5</div>
    <div>CSS</div>
    <div>Bootstrap</div>
    <div>Jave Script</div>
    <div>MERN</div>
</section> */}
        </>
    );
};

export default Skills;