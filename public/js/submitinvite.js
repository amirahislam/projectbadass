console.log("HEEEY");
$(document).ready(function() {
    console.log("I AM AWESOME");
   var url = window.location.search;

   var inviteId;

   if (url.indexOf("?invite_id") !== -1) {
       inviteId = url.split("=")[1];
       getInviteData(inviteId);
   }

   $(".invite-form").on("submit", function(event) {
    
    var firstNameInput = $(this).find(".invite-firstname");
    var lastNameInput = $(this).find(".invite-lastname");
    var inviteEmail = $(this).find(".invite-email");
    var invitePhone = $(this).find(".invite-phone");
    var inviteForm = $(this).find(".invite-form");
    var postId = $(this).find(".post-id");
       event.preventDefault();
    //    if (!firstNameInput.val().trim() || !lastNameInput.val().trim() || !inviteEmail.val().trim() || !invitePhone.val().trim()) {
    //        return;
    //    }
    console.log(postId);
       var newInvite = {
           firstname: firstNameInput.val().trim(),
           lastname: lastNameInput.val().trim(),
           email: inviteEmail.val().trim(),
           phonenumber: invitePhone.val().trim()

       };
       var elem = $(this);
       console.log(newInvite);
        $.post("/api/invites", newInvite, function() {
            //window.location.href = ""

            elem.find("#invite-firstname").val("");
            elem.find("#invite-lastname").val("");
            elem.find("#invite-email").val("");
            elem.find("#invite-phone").val("");
        });
       
   });
});