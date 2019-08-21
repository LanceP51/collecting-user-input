const container = document.querySelector("#wishlist")

document.querySelector("#saveToWishlist").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const itemName = document.querySelector("#favoriteItem").value
    const storeLocation = document.querySelector("#store").value

    if (itemName != "" && storeLocation != ""){

    // Once you have collected all the values, update the DOM with some HTML
    container.innerHTML += `
        <section>
            <h4>You can purchase ${itemName} at ${storeLocation}.</h4>
        </section>
    `
    document.querySelector("#favoriteItem").value= "" 
    document.querySelector("#store").value = ""
    document.querySelector("#favoriteItem").focus()

}
else{alert("Please enter both an item and store location.")}

})
