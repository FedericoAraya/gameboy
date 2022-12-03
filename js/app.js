"use strict";

const boton_img = document.querySelector("#btn-img");
const imagen = document.querySelector("#foto-producto");

let widget_cloudinary = cloudinary.createUploadWidget({
    cloud_name: 'dyksknsxc', 
    uploadPreset: 'preset_fede'
}, (error, result)=>{
    if(!error && result && result.event === 'success'){
        console.log('imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
})


boton_img.addEventListener("click", ()=>{
    widget_cloudinary.open();
},false);


