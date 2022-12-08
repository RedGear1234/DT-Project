const Hamburger_Menu = document.getElementById("hamburger-menu");
const Container_Sidebar = document.querySelector(
  ".container-sidebar-collapsed"
);

var flag = true;
Hamburger_Menu.addEventListener("click", () => {
  if (flag) {
    Container_Sidebar.classList.replace(
      "container-sidebar-collapsed",
      "container-sidebar"
    );
    flag = false;
  } else if (!flag) {
    Container_Sidebar.classList.replace(
      "container-sidebar",
      "container-sidebar-collapsed"
    );
    flag = true;
  }
});

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// fetch data

let Task_One = document.getElementById("task_heading_One");
let Task_Heading_Two_P = document.getElementById("task_heading_p");
let Task_Heading_Three_P = document.getElementById("task-heading-three-p");
let Task_Heading_Four_P = document.getElementById("task-heading-four-p");
let Task_Heading_Six_P = document.getElementById("task-heading-six-p");
let Task_Heading_Seven = document.getElementById("task_heading_seven");
let Iframe = document.getElementById("iframe");

async function fetchdata() {
  var Data = await fetch(
    "https://dev.deepthought.education/assets/uploads/files/others/project.json"
  )
    .then((res) => res.json())
    .then((data) => data.tasks[0].assets);

  Task_One.innerHTML = `<div id="task_heading_One" class="assets-section is-Active">
        <header>${Data[0].asset_title}</header>
        <details>
            <summary>
                  <p>
                    ${Data[0].asset_description}
                  </p>
                  <span class="icon">
                    <img src="./images/arrowDown.svg" alt="">
                  </span>
            </summary>
                  <p>
                   ${Data[0].display_asset_reflection} 
                  </p>
         </details>
      </div>`;

  Task_Heading_Two_P.innerHTML = `${Data[1].asset_description}`;
  Task_Heading_Three_P.innerHTML = `${Data[2].asset_description}`;
  Task_Heading_Four_P.innerHTML = `${Data[3].asset_description}`;
  Task_Heading_Six_P.innerHTML = `${Data[6].asset_description}`;
  Iframe.setAttribute("src", `${Data[8].display_asset_video}`);
}

fetchdata();

// -------------------------------------------------------------------------------------

// Page Switch

window.onload = () => {
  const tab_swtichers = document.querySelectorAll("[data-switcher]");
  for (let i = 0; i < tab_swtichers.length; i++) {
    const tab_switch = tab_swtichers[i];
    const page_id = tab_switch.dataset.tab;

    tab_switch.addEventListener("click", () => {
      document
        .querySelector(".sidebar-ul .tab.isActive")
        .classList.remove("isActive");
      tab_switch.parentNode.classList.add("isActive");

      SwitchPage(page_id);
    });
  }
};

function SwitchPage(page_id) {
  const currentPage = document
    .querySelector(".is-Active")
    .classList.remove("isActive");
  const nextPage = document.querySelector(`[data-page="${page_id}"]`);
  nextPage.classList.add("is-Active");
}

SwitchPage(1);
