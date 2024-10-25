const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav')
const navLinks = document.querySelector('nav ul')

function openMenu(){
    sideMenu.style.transform = 'translateX(-16rem)'
}
function closeMenu(){
    sideMenu.style.transform = 'translateX(16rem)'
}

window.addEventListener('scroll', ()=>{
    if(scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme','dark:shadow-white/20')
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent')
    } else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme','dark:shadow-white/20')
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50','dark:border','dark:border-white/50','dark:bg-transparent')
    }
})

// ------------------ light mode and dark mode ----------------------

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    if(document.documentElement.classList.contains('dark')){
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light' ;
    }
}

//------------------- projects section ------------------------

document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.getElementById("show-more");
    const projectsContainer = document.querySelector(".projects");

    const projects = [
      {
        imageSrc: "./images/doctor.png",
        projectName: "Doctor Website",
        projectURL: "https://doctor-appointment-frontend-eta.vercel.app/",
      },
      {
        imageSrc: "./images/ecommerce.png",
        projectName: "E-Commerce",
        projectURL: "https://ecommerce-fs-frontend.vercel.app/",
      },
      {
        imageSrc: "./images/Hair.png",
        projectName: "Barbershop",
        projectURL: "https://hair-studio-ltp.netlify.app/",
      },
      {
        imageSrc: "./images/amazon.png",
        projectName: "Amazon design",
        projectURL: "https://astounding-maamoul-8fd06a.netlify.app/",
      },
      {
        imageSrc: "./images/video.png",
        projectName: "YouTube design",
        projectURL: "https://video-player-vite.netlify.app/",
      },
      {
        imageSrc: "./images/music-vite.png",
        projectName: "Spotify design",
        projectURL: "https://ltp-music-vite.netlify.app/",
      },
      {
        imageSrc: "./images/gemini.png",
        projectName: "AI Chat",
        projectURL: "https://stately-axolotl-14ed3d.netlify.app/",
      },
      {
        imageSrc: "./images/todo-react.png",
        projectName: "To-Do List",
        projectURL: "https://ltp-todo-react.netlify.app/",
      },
      {
        imageSrc: "./images/gym-app.png",
        projectName: "Workout Generator",
        projectURL: "https://gym-genie.netlify.app/",
      },
      {
        imageSrc: "./images/weather-react.png",
        projectName: "Weather App",
        projectURL: "https://ltp-weather.netlify.app/",
      },
      {
        imageSrc: "./images/crypto.png",
        projectName: "Crypto Market ",
        projectURL: "https://ltp-crypto.netlify.app/",
      },
      
      {
        imageSrc: "./images/edusity.png",
        projectName: "University Website Design",
        projectURL: "https://main--mellifluous-dieffenbachia-38cc75.netlify.app/",
      },
      
      {
        imageSrc: "./images/netflix.png",
        projectName: "Netflix Clone",
        projectURL: "https://main--loquacious-moxie-a5ec06.netlify.app/",
      },
      {
        imageSrc: "./images/amazon.png",
        projectName: "Amazon clone",
        projectURL: "https://astounding-maamoul-8fd06a.netlify.app/",
      },
      {
        imageSrc: "./images/portfolio2.0.png",
        projectName: "Portfolio Design",
        projectURL: "https://ltp-portfolio.netlify.app/",
      },
      {
        imageSrc: "./images/pomoclock.png",
        projectName: "Pomodoro Clock",
        projectURL: "https://portfolio-pomodoro-clock.netlify.app",
      },
      {
        imageSrc: "./images/calculator.png",
        projectName: "Calculator",
        projectURL: "https://js-calculator-app-fcc.netlify.app",
      },
      {
        imageSrc: "./images/dragon.png",
        projectName: "FCC Dragon Repeller RPG",
        projectURL: "https://dragon-slayer-rpg.netlify.app/",
      },
      {
        imageSrc: "./images/music.png",
        projectName: "FCC Music Player",
        projectURL: "https://js-music-player-fcc.netlify.app/",
      },
    ];

    const numberOfProjectsToShow = 6;
    let currentIndex = 0;

    function showProjects(startIndex, endIndex) {
      for (let i = startIndex; i < endIndex; i++) {
        if (projects[i]) {
          const projectTile = generateProjectTile(projects[i]);
          projectsContainer.appendChild(projectTile);
        }
      }
    }

    function createElementWithClasses(tag, classes) {
      const element = document.createElement(tag);
      element.className = classes;
      return element;
    }
    
    function createTextElement(tag, classes, text) {
      const element = document.createElement(tag);
      element.className = classes;
      element.textContent = text;
      return element;
    }
    
    function generateProjectTile(project) {
      const projectTile = createElementWithClasses("a", `
        relative cursor-pointer group rounded-lg overflow-hidden
        aspect-square bg-cover bg-center
      `);
      projectTile.href = project.projectURL;
      projectTile.target = "_blank";
      projectTile.style.backgroundImage = `url(${project.imageSrc})`;
    
      const projectInfo = createElementWithClasses("div", `
        absolute bottom-5 left-1/2 -translate-x-1/2 w-10/12 h-[100px] py-3 px-5
        bg-transparent rounded-md flex items-center justify-between
        duration-500 group-hover:bottom-7
      `);
    
      // Create the project title with text overflow handling
      const projectTitle = createTextElement(
        "h2",
        "font-bold text-white text-3xl relative z-10 shadow-md shadow-black/50 truncate",
        project.projectName
      );
    
      // Add a semi-transparent overlay behind the text for extra contrast
      const titleOverlay = createElementWithClasses("div", `
        absolute inset-0 bg-black/40 rounded-md
      `);
    
      // Wrap the title and overlay in a container to stack them
      const titleContainer = createElementWithClasses("div", "relative");
      titleContainer.append(titleOverlay, projectTitle);
    
      // Append title container to project text
      const projectText = createElementWithClasses("div", "w-full overflow-hidden");
      projectText.appendChild(titleContainer);
    
      const projectType = createTextElement("p", "text-sm text-gray-700", "");
      projectText.appendChild(projectType);
    
      // Adjust projectIconContainer for consistency
      const projectIconContainer = createElementWithClasses("div", `
        border rounded-full border-black w-[36px] h-[36px] flex items-center
        justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition
      `);
      const projectIcon = createElementWithClasses("img", "w-5");
      projectIcon.src = "./images/send-icon.png";
      projectIcon.alt = "";
    
      projectIconContainer.appendChild(projectIcon);
    
      projectInfo.append(projectText, projectIconContainer);
      projectTile.appendChild(projectInfo);
    
      return projectTile;
    }

    showProjects(currentIndex, currentIndex + numberOfProjectsToShow);
    currentIndex += numberOfProjectsToShow;

    showMoreButton.addEventListener("click", function (event) {
      event.preventDefault();
      const nextIndex = currentIndex + numberOfProjectsToShow;
      showProjects(currentIndex, nextIndex);
      currentIndex = nextIndex;
      if (currentIndex >= projects.length) {
        showMoreButton.style.display = "none";
      }
    });
  });