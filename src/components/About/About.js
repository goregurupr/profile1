import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo,name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {photo && (
       <img height="200px" style={{borderRadius:"15px 50px"}} alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1>
          Hi, I am <span className='about__name'>prasad Gore</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A Frontend Developer.</h2>}
      <p className='about__desc'>{description && description}</p>
      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>

   {/* **********    */}
      <div class="resume-wrapper">
	<section class="profile section-padding">
		<div class="container">
			{/* <div class="picture-resume-wrapper">
        <div class="picture-resume">
        <span><img src="" alt="" /></span>
        <svg version="1.1" viewBox="0 0 350 350">
  
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
    </filter>
  </defs>
  
  
<g filter="url(#goo)" >  
  
  <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130"/>
  
  <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7"/>
  <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7"/>

</g>  
</svg>
      </div>
         <div class="clearfix"></div>
 </div> */}
      <div class="name-wrapper">
        <h1>Prasad <br/>Gore</h1>
      </div>
      <div class="clearfix"></div>
      <div class="contact-info clearfix">
      	<ul class="list-titles">
      		<li>Phone</li>
      		<li>Email</li>
      		<li>Address</li>
      	</ul>
        <ul class="list-content ">
        	<li>+91 9960957833</li> 
        	<li>goreguruprasad48@gmail.com</li> 
        	<li>Aurangabad 431002</li> 
        </ul>
      </div>
      <div class="contact-presentation"> 
      <h3 class="section-title">About</h3> 
      	<p class="about"> Hi, I am a Front End Developer. I am Pursuing in Bachelors's in Computer Application from Apex College.I am currently learning HTML, CSS, and JavaScript, which are the foundation of web development.Additionally, I am also exploring various front-end frameworks like React, Tailwind-CSS, Bootstrap. I am Highly Motivated to Continue Learning and Improving my Craft. I am a self-dependable person who is good at time Management and always energetic </p>
      </div>
      <div class="contact-social clearfix">
      	<ul class="list-titles">
      		<li>LinkedIn</li>
      		<li>GitHub</li>
      		<li>Twitter</li>
      	</ul>
        <ul class="list-content">
      	<li><a href="https://www.linkedin.com/in/prasad-gore-728a35261/">@linkedin</a></li>
      	<li><a href="https://github.com/goregurupr">@gitHub</a></li> 
      	<li><a href="https://twitter.com/PrasadGore7833">@twitter</a></li>
      	</ul>

      </div>
		</div>
	</section>
  
  <section class="experience section-padding">
  	<div class="container">
  		<h3 class="experience-title">Projects</h3>
      
      <div class="experience-wrapper">
      	<div class="company-wrapper clearfix">
      		<div class="experience-title">Jar-Management (MERN)</div> 
      	</div>
        
        <div class="job-wrapper clearfix">
        	{/* <div class="experience-title">Front End Developer </div>  */}
          <div class="company-description">
          	<p>The JAR management project developed using the MERN (MongoDB, Express.js, React, Node.js) stack is a comprehensive web application that revolutionizes the recruitment process.</p>  
          </div>
        </div>
        
        <div class="company-wrapper clearfix">
      		<div class="experience-title">E-Commerce</div> 
      	</div>     
         <div class="job-wrapper clearfix">
          {/* <div class="experience-title">Front End Developer </div>  */}
          <div class="company-description">
          	<p>A tourism booking project frontend is a user-oriented digital platform crafted to facilitate seamless booking experiences for travelers. This interface serves as the gateway through which users access and engage with a diverse array of travel services.</p> 
          </div>
        </div>
        
        <div class="company-wrapper clearfix">
      		<div class="experience-title">Todo Application (MERN)</div>
          {/* <div class="time">Nov 2009 - Nov 2010</div>  */}
      	</div>     
         <div class="job-wrapper clearfix">
        	{/* <div class="experience-title">Resource Planner</div> */}
          <div class="company-description">
          	<p>I am successfully created a Todo application using the MERN (MongoDB, Express.js, React, Node.js) stack. This project offers users a streamlined way to manage tasks and stay organized.</p>   
          </div>
        </div>
        
      </div>
      
      <div class="section-wrapper clearfix">
      	<h3 class="section-title">Skills</h3>
        	<ul>
        		<li class="skill-percentage">HTML</li>
        		<li class="skill-percentage">CSS</li>
        		<li class="skill-percentage">Javascript</li>
        		<li class="skill-percentage">React</li>
        		<li class="skill-percentage">Redux</li>
        		<li class="skill-percentage">TypeScript</li>
        		<li class="skill-percentage">Bootstrap</li>
        		<li class="skill-percentage">Tailwind</li>
            
        	</ul>
        
      </div>
      
      <div class="section-wrapper clearfix">
        <h3 class="section-title">EXPERIENCE </h3>  
        <p>I have a experience in 6 month intership in skillhub it solution, Aurangabad.</p>   
        <p></p> 
      </div>
      <div class="section-wrapper clearfix">
        <h3 class="section-title">EDUCATION</h3>  
        <p>2022-2025</p> 
        <p>Bachelors's in Computer Application.</p>   
        <p>Dr.Babasaheb Ambedkar Marathwada University.</p>   
      </div>
      
  	</div>
  </section>
  
  <div class="clearfix"></div>
      </div>

{/* ******** */}
    </div>
  )
}

export default About
