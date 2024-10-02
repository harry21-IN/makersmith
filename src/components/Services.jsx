import React from 'react';
import './Services.css';
import printing3d from '../assets/3DPrinting.png';
import designconsulting from '../assets/CADConsulting.png';
import designing from '../assets/designing.png';

function Services(){
    return (
        <div className="Services">
            <div className='serv-heading'>
                <h2>Services</h2>
            </div>
            <div className='serv-list'>
                <div>
                    <div className='image-div'>
                        <img src={printing3d} alt="" />
                    </div>
                    <h3>Custom 3D Printing</h3>
                    <span>Tailored Solutions</span>
                    <p>We provide customized 3D printing solutions tailored to your specific design needs.</p>
                </div>
                <div>
                    <div className='image-div'>
                        <img src={designconsulting} alt="" />
                    </div>
                    <h3>3D Modeling</h3>
                    <span>Modeling Support</span>
                    <p>Collaborate with our experts to refine your ideas and create optimal desgins for printing.</p>
                </div>
                <div>
                    <div className='image-div'>
                        <img src={designing} alt="" />
                    </div>
                    <h3>Designing and Animation</h3>
                    <span>Animation Support</span>
                    <p>Work with our experts to bring your ideas to life with quality animations.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;