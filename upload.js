jQuery(document).ready(function () {
    var pbar = $("#progressBar"),
      currentProgress = 0;
    function trackUploadProgress(e) {
      if (e.lengthComputable) {
        currentProgress = (e.loaded / e.total) * 100; // Amount uploaded in percent
        $(pbar).width(currentProgress + "%");
  
        if (currentProgress == 100) console.log("Progress : 100%");
      }
    }
  
    function getUploadURL(filename, filetype) {
      console.log("getUploadURL start!");
    //   var getUploadURLURL = "https://os5v5mmlf5.execute-api.us-east-1.amazonaws.com/default/file-upload-function1";
    var getUploadURLURL = "https://9egnevpgg4.execute-api.us-east-1.amazonaws.com/default/file-upload-function1";
      var completeURL =
      getUploadURLURL + "?fileName=" + filename + "&contentType=" + filetype;  
    //   getUploadURLURL + "?fileName=" + filename + "&contentType=" + filetype;
      var uploadURL;
  
      jQuery.ajax({
        url: completeURL,
        async: false,
        type: "GET",
        dataType: "json",
        success: function (data) {
          console.log(data);
          uploadURL = data.uploadURL;
          filename = data.filename;
          console.log("filename: " + filename);
          console.log("uploadURL: " + uploadURL);
        },
        error: function (data) {
          console.log("could not get upload URL");
        },
      });
      return uploadURL;
    }
  
    function sendFile(e) {
      e.preventDefault();
      $("#fileUploadMessage").removeClass("active");
      $(pbar).width(0).addClass("active");
      // get the reference to the actual file in the input
      var theFormFile = $("#file").get()[0].files[0];
  
      var filename = theFormFile.name;
      console.log("filename: " + filename);
  
      var filetype = theFormFile.type;
      console.log("filetype: " + filetype);
  
      var uploadURL = getUploadURL(filename, filetype);
  
      console.log("uploadURL: " + uploadURL);
  
      $.ajax({
        type: "PUT",
        url: uploadURL,
        // Content type must much with the parameter you signed your URL with
        contentType: filetype,
        // this flag is important, if not set, it will try to send data as a form
        processData: false,
        // the actual file is sent raw
        data: theFormFile,
        xhr: function () {
          // Custom XMLHttpRequest
          var appXhr = $.ajaxSettings.xhr();
  
          // Check if upload property exists, if "yes" then upload progress can be tracked otherwise "not"
          if (appXhr.upload) {
            // Attach a function to handle the progress of the upload
            appXhr.upload.addEventListener(
              "progress",
              trackUploadProgress,
              false
            );
          }
          return appXhr;
        },
        success: function () {
          // alert('File uploaded');
          $("#fileUploadMessage").addClass("active");
          $("#fileUploadMessage").html("Upload Complete!");
        },
        error: function (data) {
          //alert('File NOT uploaded');
          $("#fileUploadMessage").addClass("active");
          $("#fileUploadMessage").html("Upload Failed!");
          console.log(data);
        },
      });
      return false;
    }
  
    $(function () {
      $("#fileUploadForm").on("submit", sendFile);
    });
  });

  function submitTherapistResponse() {
    event.preventDefault();

    // var apigClient = apigClientFactory.newClient({
    //     apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    // });
    // console.log("HO")
    debugger
    var usernameResponseText = document.getElementById("username-text-box").value;
    var emailResponseText = document.getElementById("email-text-box").value;
    var ageResponseText = document.getElementById("age-text-box").value;
    var bloodGroupText = document.getElementById("bloodgroup-text-box").value;
 

    var params = {
        
    };

    // console.log(params);

    var body = {
        "name": nameResponseText,
        "email": emailResponseText,
        "age": ageResponseText,
        "bloodgroup": bloodGroupText,
    };

    console.log(body);


}