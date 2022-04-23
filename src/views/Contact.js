import React from 'react'; 
import Locations from '../components/Locations';

function Contact(){ 

    return (
        <main>
            <section>
                <div className="title">
                    <h2>contact</h2>
                </div>
                {/*Importing Component responsible for changing restaurant location address*/}
                <Locations/>
            </section>
        </main>
    )
}

export default Contact; 