if(localStorage.getItem('token')==="") {
	window.location.replace("/") ;
}

var logout = document.getElementsByClassName("logoutUser")[0] ;
logout.addEventListener('click' , () => {
    console.log("user")
    localStorage.setItem("token" , "") ;
    localStorage.setItem("admintoken" , "") ;
    window.location.reload();
})
