function submitResponse() {
    event.preventDefault();

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });
    
    var user_response_text = document.getElementById("mood-text-box").value;
    console.log(user_response_text);

    var timeInput = document.getElementById("time-input-box");
    var timeValue = timeInput.value;
    var hours = timeValue.split(":")[0];
    var minutes = timeValue.split(":")[1];

    var params = {
        
    };

    // console.log(params);

    var body = {
        "inputs": user_response_text,
        "hours": hours,
        "minutes": minutes
    };

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.classifyPost(params, body, additionalParams).then(function (result) {

        var moods = result.data.dynamo_data_moods;
        var sleep = result.data.dynamo_data_sleep;

        console.log("moods: "+JSON.stringify(moods));
        console.log("sleep: "+JSON.stringify(sleep));

        var data = {"moods" : moods, "sleep" : sleep};

        var responseText = document.getElementById("response-text");

        if(moods["label"] == "LABEL_1"){
            responseText.innerHTML = "Congratulations! You are doing good today, keep it up.";
        }else{
            responseText.innerHTML = "It's okay! Let's us cheer you up!";
        }
        
        insertData(data);
        // insertDataSleep(sleep)

    }).catch(function (error) {
        console.log(error);
    });

    document.getElementById("mood-text-box").value = "";
    document.getElementById("time-input-box").value = "";
}

function insertData(data){

    console.log(data);

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });
    var params = {
        
    };

    var body = data;

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.insertrdsPost(params, body, additionalParams).then(function (result) {

        console.log(result);

    }).catch(function (error) {
        console.log(error);
    });



}

function therapistOnLoad(){
    event.preventDefault();

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });

    var params = {
        
    };

    var body = {

    };

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.therapistGet(params, body, additionalParams).then(function (result) {
        var output = result
        var body = output.data.body
        var acceptings = body.Acceptings
        var names = body.Names
        var emails = body.Emails
        var pronouns = body.Pronouns
        var images = body.Images

        const therapistContainers = document.querySelectorAll(".therapist-list .row div");

        therapistContainers.forEach((container, index) => {
            // const therapistEmailsElement = therapistContainers.querySelector(".t1p3");
            // const therapistAcceptingsElement = therapistContainers.querySelector(".t1p2");
            // const therapistPronounsElement = therapistContainers.querySelector(".t1p1");

            const therapistNameElement = container.querySelector("h2");
            const therapistImageElement = container.querySelector("img");
            const therapistDetailssElement = container.querySelector("p");
            therapistNameElement.textContent = names[index]
            // therapistPronounsElement.textContent = pronouns[index]
            therapistDetailssElement.innerHTML = pronouns[index] + "<br>" + "Accepting: " + acceptings[index] + "<br>" + emails[index];
            // therapistDetailssElement.textContent = pronouns[index] + "\n" + "Accepting : " + acceptings[index] + "\n" + "Email : " + emails[index]
            // therapistEmailsElement.textContent = "Email" + emails[0]
            therapistImageElement.setAttribute("src", images[index])
        });

        // const therapistContainers = document.querySelector(".therapistRow1");
        // const therapistEmailsElement = therapistContainers.querySelector(".t1p3");
        // const therapistAcceptingsElement = therapistContainers.querySelector(".t1p2");
        // const therapistPronounsElement = therapistContainers.querySelector(".t1p1");
        // const therapistNameElement = therapistContainers.querySelector("h2");
        // const therapistImageElement = therapistContainers.querySelector("img");
        // therapistNameElement.textContent = names[0]
        // therapistPronounsElement.textContent = pronouns[0]
        // therapistAcceptingsElement.textContent = "Accepting : " + acceptings[0]
        // therapistEmailsElement.textContent = "Email" + emails[0]
        // therapistImageElement.setAttribute("src", images[0])
        console.log(body)

    }).catch(function (error) {
        console.log(error);
    });
}

function therapistOnLoad(){
    event.preventDefault();

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });

    var params = {
        
    };

    var body = {

    };

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.therapistGet(params, body, additionalParams).then(function (result) {
        var output = result
        var body = output.data.body
        var acceptings = body.Acceptings
        var names = body.Names
        var emails = body.Emails
        var pronouns = body.Pronouns
        var images = body.Images

        const therapistContainers = document.querySelectorAll(".therapist-list .row div");

        therapistContainers.forEach((container, index) => {
            // const therapistEmailsElement = therapistContainers.querySelector(".t1p3");
            // const therapistAcceptingsElement = therapistContainers.querySelector(".t1p2");
            // const therapistPronounsElement = therapistContainers.querySelector(".t1p1");

            const therapistNameElement = container.querySelector("h2");
            const therapistImageElement = container.querySelector("img");
            const therapistDetailssElement = container.querySelector("p");
            therapistNameElement.textContent = names[index]
            // therapistPronounsElement.textContent = pronouns[index]
            therapistDetailssElement.innerHTML = pronouns[index] + "<br>" + "Accepting: " + acceptings[index] + "<br>" + emails[index];
            // therapistDetailssElement.textContent = pronouns[index] + "\n" + "Accepting : " + acceptings[index] + "\n" + "Email : " + emails[index]
            // therapistEmailsElement.textContent = "Email" + emails[0]
            therapistImageElement.setAttribute("src", images[index])
        });

        // const therapistContainers = document.querySelector(".therapistRow1");
        // const therapistEmailsElement = therapistContainers.querySelector(".t1p3");
        // const therapistAcceptingsElement = therapistContainers.querySelector(".t1p2");
        // const therapistPronounsElement = therapistContainers.querySelector(".t1p1");
        // const therapistNameElement = therapistContainers.querySelector("h2");
        // const therapistImageElement = therapistContainers.querySelector("img");
        // therapistNameElement.textContent = names[0]
        // therapistPronounsElement.textContent = pronouns[0]
        // therapistAcceptingsElement.textContent = "Accepting : " + acceptings[0]
        // therapistEmailsElement.textContent = "Email" + emails[0]
        // therapistImageElement.setAttribute("src", images[0])
        console.log(body)

    }).catch(function (error) {
        console.log(error);
    });
}

function submitTherapistResponse() {
    event.preventDefault();

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });
    // console.log("HO")
    debugger
    var nameResponseText = document.getElementById("name-text-box").value;
    var emailResponseText = document.getElementById("email-text-box").value;
    var phoneNumberResponseText = document.getElementById("PhoneNumber-text-box").value;
    var genderResponseText = document.getElementById("gender-text-box").value;
    var dobResponseText = document.getElementById("dob-text-box").value;
    var appointmentResponseText = document.getElementById("appointment-text-box").value;

    var params = {
        
    };

    // console.log(params);

    var body = {
        "name": nameResponseText,
        "email": emailResponseText,
        "phoneNumber": phoneNumberResponseText,
        "gender": genderResponseText,
        "dob": dobResponseText,
        "appointment": appointmentResponseText
    };

    console.log(body);

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.therapistformPost(params, body, additionalParams).then(function (result) {
        console.log(result);

    }).catch(function (error) {
        console.log(error);
    });

    document.getElementById("name-text-box").value = "";
    document.getElementById("email-text-box").value = "";
    document.getElementById("PhoneNumber-text-box").value = "";
    document.getElementById("gender-text-box").value = "";
    document.getElementById("dob-text-box").value = "";
    document.getElementById("appointment-text-box").value = "";
    document.getElementById("therapist-select").value = "";

}