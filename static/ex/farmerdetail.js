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



var name = document.getElementById("name").value ;
var aadharid = document.getElementById("aadharid").value ;
var region = document.getElementById("region").value ;
var crops_produced = document.getElementById("crops_produced").value ;
var no_of_seedlings = document.getElementById("no_of_seedlings").value ;
var income = document.getElementById("income").value ;
var latitude = document.getElementById("latitude").value ;
var longitude = document.getElementById("longitude").value ;

var submitbtn = document.getElementById("submit") ;
submitbtn.addEventListener('click' , async (event) => {
    event.preventDefault() ;
    const result = await fetch('/api/farmercreate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' ,
            'auth-token' : localStorage.getItem('token') 
        },
        body: JSON.stringify({
            name ,
			aadharid,
			region,
			crops_produced,
			no_of_seedlings,
			income,
			latitude,
			longitude
        })
    }).then((res) => res.json())

    if (result.status === 'ok') {
        // everythign went fine
        alert('Success')
    } else {
        alert(result.error)
    }
})