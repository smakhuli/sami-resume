// ======================= Hide/Show Work History Sections

document.querySelector(".alldetails").addEventListener("click", event => toggleAllSections(event));

document.querySelector(".details1").addEventListener("click", event => toggleSection(event, "job1"));
document.querySelector(".details2").addEventListener("click", event => toggleSection(event, "job2"));
document.querySelector(".details3").addEventListener("click", event => toggleSection(event, "job3"));
document.querySelector(".details4").addEventListener("click", event => toggleSection(event, "job4"));
document.querySelector(".details5").addEventListener("click", event => toggleSection(event, "job5"));
document.querySelector(".details6").addEventListener("click", event => toggleSection(event, "job6"));
document.querySelector(".details7").addEventListener("click", event => toggleSection(event, "job7"));

const toggleSection = (event, thisID) => {
    
    const togggleElement = document.getElementById(thisID);
    
    if (togggleElement) {
        if (togggleElement.style.display === "none") {
            updateButton(event, "Hide Details", "#2ecc71");
            togggleElement.style.display = "block";
        } else {
            updateButton(event, "Show Details", "#6174c3");
            togggleElement.style.display = "none";
        }
    }
}

const updateButton = (event, text, color)  => {
    event.target.textContent = text;
    event.target.style.backgroundColor = color;
    event.target.style.border = `1px solid ${color}`;
}

const toggleAllSections = (event) => {

    if (event.target.textContent === "Hide All Details") {
        updateButton(event, "Show All Details", "#6174c3");
        const valuesArray = ["none", "Show Details", "#6174c3"];
        sectionsShowOrHide("hide", valuesArray);
    } else {
        updateButton(event, "Hide All Details", "#2ecc71");
        const valuesArray = ["block", "Hide Details", "#2ecc71"];
        sectionsShowOrHide("show", valuesArray);
    }
    
}

const sectionsShowOrHide = (action, valuesArray) => {
    
    const jobIDs = ["job1", "job2", "job3", "job4", "job5", "job6", "job7"];
    const eventClassArray = [".details1", ".details2", ".details3", ".details4", ".details5", ".details6", ".details7"];

    const displayStyle = valuesArray[0];
    const buttonText = valuesArray[1];
    const buttonColor = valuesArray[2];
    
    jobIDs.forEach(job => { 
        const togggleElement = document.getElementById(job);
        
        if (togggleElement) {
            togggleElement.style.display = displayStyle;
        };
    });
    
    eventClassArray.forEach(eventClass => { 
        const togggleButton = document.querySelector(eventClass);
        
        if (togggleButton) {
            togggleButton.textContent = buttonText;
            togggleButton.style.backgroundColor = buttonColor;
            togggleButton.style.border = `1px solid ${buttonColor}`;
        }
    });
}

// ==================== Generate Online Class section
const onlineClassSection = (classInfo) => (
    `<ul class="class-list">
        <li>${classInfo.className}</li>
        <li class="rating">${classInfo.className}</li>
        <li class="btn btn-full"><a href="${classInfo.classUrl}" target="_blank">Course on Udemy</a></li>
        <li class="btn btn-full"><a href="${classInfo.certificateUrl}" target="_blank" >Certificate of Completion</a></li>
    </ul>`
);

// ====================== Generate Javascript online class section
javascriptHTML = onlineClassSection({
    className: 'The Complete JavaScript Course 2019: Build Real Projects!',
    classRating: 'Rated 4.5 / 5 (37,202 ratings) - 174,280 students enrolled',
    classUrl: 'https://www.udemy.com/the-complete-javascript-course/',
    certificateUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-JGGAY8W7.jpg'
});

document.querySelector('.javascript').innerHTML = javascriptHTML;

// ====================== Generate HTML5/CSS3 online class section
html5css3HTML = onlineClassSection({
    className: 'Build Responsive Real World Websites with HTML5 and CSS3',
    classRating: 'Rated 4.6 / 5 (22,270 ratings) - 113,611 students enrolled',
    classUrl: 'https://www.udemy.com/design-and-develop-a-killer-website-with-html5-and-css3/',
    certificateUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-TV17U0M4.jpg'
});

document.querySelector('.html5css3').innerHTML = html5css3HTML;


