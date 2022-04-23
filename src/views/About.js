import React from 'react'; 
import { Link } from "react-router-dom";
import Ourppl from '../components/Ourppl';
import storyimg from '../Images/our-story.jpg'; 
import promiseimg from '../Images/our-promise.jpg'; 
import NewReviews from '../components/NewReviews';

function About(){
    return (
        <div>
            <main>
                <div className="title">
                    <h2>about us</h2>
                </div>
            </main>
            
            <section>
                <div className="container">
		            <div className="row about">
                        <div className="col-lg-9">
				            <img className="img-fluid aboutimg" src={storyimg} alt="A piece of meat in barbecue fire." />
                            <div className="centered">
                            <h2>Our Story</h2>
                            <p className="txtoverimg">
                            Pellentesque in neque felis. Cras nibh nisl, condimentum ac pretium vitae, accumsan id elit. Suspendisse varius felis eu accumsan pharetra. Vestibulum gravida nec est ac suscipit. Mauris hendrerit eu mauris a sodales. Integer vitae auctor elit. Fusce consequat vulputate lacus a porta. 
                            </p>
                            </div>
			            </div>
                        
		            </div>
	            </div>
            </section>

            <section>
                <div className="container">
		            <div className="row about">
                        <div className="col-lg-9">
				            <img className="img-fluid aboutimg" src={promiseimg} alt="Cook's hands in black gloves with a raw hambrger." />
                            <div className="centered">
                            <h2>Our Promise</h2>
                            <p className="txtoverimg">
                            Pellentesque in neque felis. Cras nibh nisl, condimentum ac pretium vitae, accumsan id elit. Suspendisse varius felis eu accumsan pharetra. Vestibulum gravida nec est ac suscipit. Mauris hendrerit eu mauris a sodales. Integer vitae auctor elit. Fusce consequat vulputate lacus a porta. 
                            </p>
                            </div>
			            </div>
                        
		            </div>
	            </div>
            </section>

            <section>
                <div className="container">
                    <div className="row about">
                        <div className="col-lg-12">
                            <h3>Our People</h3>
                            <Ourppl/>
			            </div>
		            </div>
	            </div>
            </section>

            <section>
                <div className="container about">
                    <div>
                        <button className='btn-sml'>
                        <Link className='apply-btn-link' to="/contact">
                        Wanna join our Team?<br/>Contact us!
                        </Link>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row about">
                        <div className="col-lg-12">
                            <h3>Our Clients say:</h3>

			            </div>
		            </div>
	            </div>
            </section>
            
        </div>
    )
}

export default About; 