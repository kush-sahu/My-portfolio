document.querySelector(".cross").style.display = "none";

// Function to hide the hamburger icon if the screen size is larger than 900px
function checkScreenSize() {
    if (window.innerWidth > 900) {
        document.querySelector(".hamburger").style.display = "none";
    } else {
        document.querySelector(".hamburger").style.display = "block";
    }
}

// Call the function initially to set the correct state on page load
checkScreenSize();

// Add an event listener to check the screen size whenever the window is resized
window.addEventListener('resize', checkScreenSize);

// Function to handle the hamburger icon click
document.querySelector(".hamburger").onclick = function() {
  let cross=  document.querySelector(".cross").style.position='fixed'  ;
 
    let box = document.querySelector('.boxham');
    if (!box.classList.contains('show')) {
        box.classList.remove('hide');
        box.classList.add('show');
        box.style.display = "block";
        document.querySelector(".hamburger").style.display = "none";
        document.querySelector(".cross").style.display = "block";
    }
    box.innerHTML = '';

    // Create and append the 'home' element
    let home = document.createElement('h2');
    let homeLink = document.createElement('a');
    homeLink.href = '#home'; // Set the URL for home
    homeLink.innerText = 'HOME';
    home.classList.add('home1');
    home.appendChild(homeLink);
    box.appendChild(home);

    // Create and append the 'about' element
    let about = document.createElement('h2');
    let aboutLink = document.createElement('a');
    aboutLink.href = '#about'; // Set the URL for about
    aboutLink.innerText = 'ABOUT';
    about.classList.add('about');
    about.appendChild(aboutLink);
    box.appendChild(about);

    // Create and append the 'experience' element
    let experience = document.createElement('h2');
    let experienceLink = document.createElement('a');
    experienceLink.href = '#experience'; 
    experienceLink.innerText = 'EXPERIENCE';
    experience.classList.add('home1');
    experience.appendChild(experienceLink);
    box.appendChild(experience);

    // Create and append the 'project' element
    let project = document.createElement('h2');
    let projectLink = document.createElement('a');
    projectLink.href = '#project'; // Set the URL for project
    projectLink.innerText = 'PROJECT';
    project.classList.add('project1');
    project.appendChild(projectLink);
    box.appendChild(project);

    // Create and append the 'contact' element
    let contact = document.createElement('h2');
    let contactLink = document.createElement('a');
    contactLink.href = '#contact'; // Set the URL for contact
    contactLink.innerText = 'CONTACT';
    contact.classList.add('contact1');
    contact.appendChild(contactLink);
    box.appendChild(contact);

    let hireme =document.createElement('h2');
    let hierlink=document.createElement('a');
    hierlink.href='#hierme';
    hierlink.innerText='Hired me with';
    hireme.appendChild(hierlink);
    hireme.classList.add('contact1');
    box.appendChild(hireme);

    let certificate =document.createElement('h2');
    let certilink=document.createElement('a');
    certilink.href='#certi';
    certilink.innerText='Certificates';
    certificate.appendChild(certilink);
    certificate.classList.add('contact1');
    box.appendChild(certificate);

    let arch=document.createElement('h2');
    let arcilink=document.createElement('a');
    arcilink.href='#archivement';
    arcilink.innerText='Achivement';
    arch.appendChild(arcilink);
    arch.classList.add('contact1');
    box.appendChild(arch);

}

// Function to handle the cross icon click
document.querySelector(".cross").onclick = function() {
    let box = document.querySelector('.boxham');
    if (box.classList.contains('show')) {
        box.classList.remove('show');
        box.classList.add('hide');
        

        document.querySelector(".cross").style.display = "none";
        document.querySelector(".hamburger").style.display = "block";
    }
}

