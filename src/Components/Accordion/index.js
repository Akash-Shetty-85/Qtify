import React from 'react'
import './accordion.css'

const Accordion = () => {
    return (
        <div className='cs-faqs'>
            <h1 className='faqs-title'>FAQs</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne" style={{ width: '1135px', color: '#FFF', fontFamily: 'Poppins', fontSize: '20px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal', background: '#121212' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Is QTify free to use?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ width: '1135px', height: '81px', flexShrink: 0, borderRadius: '0px 0px 10px 10px', background: '#FFF' }}>
                            Yes! It is 100% free, and has 0% ads!.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne" style={{ width: '1135px', color: '#FFF', fontFamily: 'Poppins', fontSize: '20px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal', background: '#121212', borderRadius: '10px 10px 0 0' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Is QTify free to use?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ width: '1135px', height: '81px', flexShrink: 0, borderRadius: '0 0 10px 10px', background: '#FFF' }}>
                            Yes! It is 100% free, and has 0% ads!.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo" style={{ width: '1135px', color: '#FFF', fontFamily: 'Poppins', fontSize: '20px', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Can I download and listen to songs offline?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{ width: '1135px', height: '81px', flexShrink: 0, borderRadius: '0px 0px 10px 10px', background: '#FFF' }}>
                            Sorry, unfortunately, we don't provide the service to download any songs.
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Accordion