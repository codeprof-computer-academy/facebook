// logic to take off welcome screen
setTimeout(function(){
         document.querySelector(".welcome-screen").style.display = "none"
}, 2000)

// logic to display the current year
document.querySelector(".year").innerHTML = new Date().getFullYear()

// logic to show nav
const menu_btn = document.querySelector(".menu-btn")
menu_btn.addEventListener("click", show_nav)

function show_nav(){
    //   target the nav
    const nav_bar = document.querySelector("nav")
    nav_bar.classList.toggle("show-nav")
    menu_btn.classList.toggle("change-menu-bg")
}

// logic to upload
const preview_img = document.querySelector(".preview-img")

preview_img.addEventListener("click", show_upload)

function show_upload(){
    document.querySelector(".upload").classList.toggle("show-upload")
}


// logic to preview the uploaded image
let uploaded_image_url = ""

const file_input = document.querySelector(".file-input")
file_input.addEventListener('change', function(event){
       let user_uploaded_image = event.target.files[0]
       uploaded_image_url = URL.createObjectURL(user_uploaded_image)
       document.querySelector(".preview-img").src = uploaded_image_url
})



// logic to display post
// target the posts container
const posts_container  = document.querySelector(".posts-container")

// target the post form
const post_form = document.querySelector("form")
// listen for form submission

post_form.addEventListener("submit", function(event){
        event.preventDefault() // prevent the page from reloading
      
        let post_body = document.querySelector(".user-mind").value
        let post_title = document.querySelector(".post-title").value

        let post = `
        
                   <div class="post-card">
                            <img src="${uploaded_image_url}">
                            <h1>
                                 ${post_title}
                            </h1>
                            <p>
                                 ${post_body}
                            </p>
                            <span class="call-to-actions">
                                <small>
                                       <img src="./images/like.png" alt="" width="12">
                                       <b>2.5k</b>
                                </small>

                                <small>
                                    <img src="./images/dislike.png" alt="" width="12">
                                    <b>56</b>
                                </small>

                                <small>
                                    <img src="./images/comment.png" alt="" width="12">
                                    <b>1k</b>
                                </small>

                                <small>
                                    <img src="./images/love.png" alt="" width="12">
                                    <b>70</b>
                                </small>

                                <small>
                                    <img src="./images/share.png" alt="" width="12">
                                    <b>25</b>
                                </small>

                            </span>
                       </div>
        
        `

        // insert the post created into the posts container
        posts_container.innerHTML += post

        // after posting clear the input fields
        document.querySelector(".user-mind").value = ""
        document.querySelector(".post-title").value = ""
        preview_img.src = "./images/image.png"
        uploaded_image_url = ""
         document.querySelector(".upload").classList.toggle("show-upload")

})