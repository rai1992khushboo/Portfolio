
import Header from './Header';
const Contact=()=>{
    return(
        <>
        
           <section class="text-white bg-black ftco-section contact-section ftco-no-pb" id="contact-section">
            <Header/>
      <div class="container pb-5">
      	<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
            
            <h2 class="m-5 text-bold">Contact Me</h2>
            
          </div>
        </div>

        <div class="row d-flex contact-info m-5">
          <div class="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
          	<div class="align-self-stretch box p-5 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-map-signs"></span>
          		</div>
          		<h3 class="mb-5">Address</h3>
	            <p>Gorakhpur,Uttar Pradesh</p>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
          	<div class="align-self-stretch box p-5 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-phone2"></span>
          		</div>
          		<h3 class="mb-5">Contact Number</h3>
	            <p><a href="tel://1234567920">9616971796</a></p>
	          </div>
          </div>
          <div class="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
          	<div class="align-self-stretch box p-5 text-center">
          		<div class="icon d-flex align-items-center justify-content-center">
          			<span class="icon-paper-plane"></span>
          		</div>
          		<h3 class="mb-4">Email Address</h3>
	            <p><a href="khusboo.rai1992@gmail.com">khusboo.rai1992@gmail.com</a></p>
	          </div>
          </div>
          
        </div>

      </div> 
    </section>
        </>
    )
};

export default Contact;