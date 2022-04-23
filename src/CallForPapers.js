import React, { useEffect } from 'react'
import './CallForPapers.css'

function CallForPapers() {
    let arr = [
        {
            "id": "One",
            "Heading": "Computing",
            "Data": [
                {
                    "el" : "High Performance Computing",
                    "idd" : "Seven" 
                },
                {
                    "el" : "Districbuted and parallel System",
                    "idd" : "Eight"
                },
                { "el" : "Cloud Computing",
                  "idd" : "Nine"
                },   
                {
                    "el" : "Edge Computing",
                    "idd" : "Ten"
                },
                {
                    "el":"Fog Computing",
                    "idd" : "Eleven"
                },
                {
                    "el" : "Human Centered Computing",
                    "idd" : "Tweleve"
                }
            ]
        },
        {
            "id": "Two",
            "Heading": "Artificial Intelligence",
            "Data": [
                {"el":"Fuzzy Logic",                  "idd":"Thirteen"},
                {"el":"Expert System"                , "idd":"Fourteen"},
                {"el":"Agents and Multi Agent System", "idd":"Fifteen"},
                {"el":"Computational Optimisation"   , "idd":"Sixteen"},
                {"el":"Bio inspired Optimisation"    , "idd":"Seventeen"}
            ]
        },
        {
            "id": "Three",
            "Heading": "Machine Learning",
            "Data": [
                {"el":"Deep Learning",                   "idd":"Eighteen"},
                {"el":"Neural Networks","idd":"Nineteen"},
                {"el":"Natural Language Processing","idd":"Twenty"},
                {"el":"Data Mining","idd":"Twentyone"},
                {"el":"Data Science","idd":"Twentytwo"},
                {"el":"GANs","idd":"Twentythree"},
                {"el":"Software Engineering","idd":"Twentyfour"},
                {"el":"Recommender Systems","idd":"Twentyfive"},
                {"el":"Semantic web Analysis","idd":"Twentysix"},
            ]
        },
        {
            "id": "Four",
            "Heading": "Machine Vision",
            "Data": [
                {"el":"Human Computer Interaction", "idd":"Twentyseven"},
                {"el":"Computer Vision","idd":"Twentyeight"},
                {"el":"Image and video processing","idd":"Twentynine"},
                {"el":"Medical Diagnosis","idd":"Thirty"},
                {"el":"Augmented Reality","idd":"Thirtyone"},
                {"el":"Virtual Reality","idd":"Thirtytwo"},
            ]
        },
        {
            "id": "Five",
            "Heading": "Communication",
            "Data": [
                {"el":"Networking",                          "idd":"Thirtythree"},
                {"el":"Wireless and Mobile Communication","idd":"Thirtyfour"},
                {"el":"Signal Processing","idd":"Thirtyfive"},
                {"el":"Internet of Things","idd":"Thirtysix"},
                {"el":"Cyber Physical Systems","idd":"Thirtyseven"},
                {"el":"Wireless Sensor Networks","idd":"Thirtyeight"},
                {"el":"Software defined networks","idd":"Thirtynine"},
                {"el":"Industry 4.0","idd":"Forty"},
                {"el":"Security and Privacy","idd":"Fortyone"},
                {"el":"Biometric Security","idd":"Fortytwo"},
                {"el":"Cyber Security","idd":"Fortythree"},
            ]
        },
        {
            "id": "Six",
            "Heading": "Futuristic Applications",
            "Data": [
                {"el":"Sustainable cities and Societies","idd":"Fortyfour"},
                {"el":"Smart Grids and Energy Networks","idd":"Fortyfive"},
                {"el":"Ambidient Assisted Living","idd":"Fortysix"},
                {"el":"Smart Healthcare","idd":"Fortyseven"},
            ]
        }
    ];



    return (

        //         <div className="accordion">
        //             <h1 className="accordion__title">ACCORDION</h1>

        //             {arr.map((data) => {
        //                 return (
        //                     <div className="accordion__item">
        //                         <div className="accordion__header">
        //                             <h2 className="accordion__header-title">{data.Heading}</h2><i className="accordion__header-toggle"></i>
        //                         </div>
        //                         <div className="accordion__content">
        //                             {data.Data.map((element) => {
        //                                 return( 
        //                                 < h3 className="accordion__content-title">{element}</h3>
        //                                 )
        //                             })
        //                             // <p className="accordion__content-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, repellat vel et neque at asperiores recusandae necessitatibus voluptatum magnam. Odio est, repellendus quas molestias laborum itaque perspiciatis perferendis consequuntur quidem. Non ullam velit eaque accusantium nam, voluptates earum ab, placeat quaerat commodi delectus vel, magni maxime itaque dicta consequatur quisquam maiores nisi.</p>
        //                             }
        //                     </div>
        //                     </div>
        //     )
        // })
        //             }
        <div className="accordion" id="accordionPanelsStayOpenExample">
            {arr.map((data) => {
                return (
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`panelsStayOpen-heading${data.id}`}>
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${data.id}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${data.id}`}>
                                {data.Heading}
                            </button>
                        </h2>
                        <div id={`panelsStayOpen-collapse${data.id}`} className="accordion-collapse collapse" aria-labelledby={`panelsStayOpen-heading${data.id}`}>
                            <div className="accordion-body">
                                {data.Data.map((element) => {
                                    return (
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${element.idd}`} aria-expanded="false" aria-controls={`panelsStayOpen-collapse${element.idd}`}>
                                            {element.el}
                                        </button>
                                    )
                                })}
                                {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                            </div>
                        </div>
                    </div>
                )
            })}

            {/* <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div> */}
        </div>

        //         </div >
    )
}

export default CallForPapers