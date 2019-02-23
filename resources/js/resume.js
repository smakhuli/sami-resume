document.querySelector(".alldetails").addEventListener("click", event => toggleAllSections(event));

document.querySelector(".details1").addEventListener("click", event => toggleSection(event, "job1"));
document.querySelector(".details2").addEventListener("click", event => toggleSection(event, "job2"));
document.querySelector(".details3").addEventListener("click", event => toggleSection(event, "job3"));
document.querySelector(".details4").addEventListener("click", event => toggleSection(event, "job4"));
document.querySelector(".details5").addEventListener("click", event => toggleSection(event, "job5"));
document.querySelector(".details6").addEventListener("click", event => toggleSection(event, "job6"));
document.querySelector(".details7").addEventListener("click", event => toggleSection(event, "job7"));
document.querySelector(".details8").addEventListener("click", event => toggleSection(event, "job8"));
document.querySelector(".details9").addEventListener("click", event => toggleSection(event, "job9"));

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
    
    const jobIDs = ["job1", "job2", "job3", "job4", "job5", "job6", "job7", "job8", "job9"];
    const eventClassArray = [".details1", ".details2", ".details3", ".details4", ".details5", ".details6", ".details7", ".details8", ".details9"];

    const displayStyle = valuesArray[0];
    const buttonText = valuesArray[1];
    const backgroundColor = valuesArray[2];
    
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
            togggleButton.style.backgroundColor = backgroundColor;
        }
    });
}
