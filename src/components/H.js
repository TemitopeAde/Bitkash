if ("work hour" > "approved hours") {
  sendmail({
    from : zoho.adminuser,
    to : samphiremedia95@gmail.com,
    subject: "over budget work hour",
    message : "<div>kindly note that this user has exceeded his approved work hour<br></div>"
  })
};




if ("work hour" > "approved hours")
{
    sendmail
    [ 
	    from : zoho.adminuser
	    to : samphiremedia95@gmail.com
	    subject: "over budget work hour"
	    message : "<div>kindly note that this user has exceeded his approved work hour<br></div>"
    ]
};