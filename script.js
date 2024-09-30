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
        imageSrc: "./images/ecommerce.png",
        projectName: "Full Stack E-Commerce",
        projectURL: "https://ecommerce-fs-frontend.vercel.app/",
      },
      {
        imageSrc: "./images/health.png",
        projectName: "Frontend Doctor Appointment",
        projectURL: "https://health-lance.netlify.app/",
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
        projectName: "Crypto Market Tracker",
        projectURL: "https://ltp-crypto.netlify.app/",
      },
      {
        imageSrc: "./images/gemini.png",
        projectName: "AI Chat",
        projectURL: "https://stately-axolotl-14ed3d.netlify.app/",
      },
      {
        imageSrc: "./images/edusity.png",
        projectName: "University Website Design",
        projectURL: "https://main--mellifluous-dieffenbachia-38cc75.netlify.app/",
      },
      {
        imageSrc: "./images/video.png",
        projectName: "YouTube Clone",
        projectURL: "https://video-player-vite.netlify.app/",
      },
      {
        imageSrc: "./images/music-vite.png",
        projectName: "Spotify Clone",
        projectURL: "https://ltp-music-vite.netlify.app/",
      },
      {
        imageSrc: "./images/netflix.png",
        projectName: "Netflix Clone",
        projectURL: "https://main--loquacious-moxie-a5ec06.netlify.app/",
      },
      {
        imageSrc: "./images/Hair.png",
        projectName: "Barbershop design",
        projectURL: "https://hair-studio-ltp.netlify.app/",
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

    function generateProjectTile(project) {
      const projectTile = document.createElement("a");
      projectTile.href = project.projectURL;
      projectTile.target = "_blank";
      projectTile.classList.add(
        "relative",
        "cursor-pointer",
        "group",
        "rounded-lg",
        "overflow-hidden",
        "aspect-square",
        "bg-cover",
        "bg-center"
      );
      projectTile.style.backgroundImage = `url(${project.imageSrc})`;

      const projectInfo = document.createElement("div");
      projectInfo.classList.add(
        "absolute",
        "bottom-5",
        "left-1/2",
        "-translate-x-1/2",
        "w-10/12",
        "py-3",
        "px-5",
        "bg-transparent",
        "rounded-md",
        "flex",
        "items-center",
        "justify-between",
        "duration-500",
        "group-hover:bottom-7"
      );

      const projectText = document.createElement("div");

      const projectTitle = document.createElement("h2");
      projectTitle.classList.add("font-bold","text-orange-500", "text-lg");
      projectTitle.textContent = project.projectName;

      const projectType = document.createElement("p");
      projectType.classList.add("text-sm", "text-gray-700");
      projectType.textContent = "";

      projectText.appendChild(projectTitle);
      projectText.appendChild(projectType);

      const projectIconContainer = document.createElement("div");
      projectIconContainer.classList.add(
        "border",
        "rounded-full",
        "border-black",
        "w-9",
        "aspect-square",
        "flex",
        "items-center",
        "justify-center",
        "shadow-[2px_2px_0_#000]",
        "group-hover:bg-lime-300",
        "transition"
      );

      const projectIcon = document.createElement("img");
      projectIcon.src = "./images/send-icon.png";
      projectIcon.alt = "";
      projectIcon.classList.add("w-5");

      projectIconContainer.appendChild(projectIcon);

      projectInfo.appendChild(projectText);
      projectInfo.appendChild(projectIconContainer);

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