/*
M1: From the data structure, show every icon in the document.
M2: Color the icons per color
M3: Use a select to filter icons via icon type


MILESTONE 1

*/


const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

let icon_type = document.getElementById("type").value;
filterIcons();
function colorPicker(icon) {
    if (icon.type == "animal") {
        return "icon_blue";
    } else if (icon.type == "vegetable") {
        return "icon_orange";
    } else {
        return "icon_purple";
    }
}

function filterIcons() {
    document.querySelector(".cards").innerHTML = "";
    icon_type = document.getElementById("type").value;
    let iconsCopy = icons.filter(filtering);
    iconsCopy.forEach((icon, i, array) => {
        let icon_color = colorPicker(icon);
        const uppercaseName = icon.name.toUpperCase();
        const element = `
    <div class="card ${icon_color}">
    <i class="${icon.family} ${icon.prefix}${icon.name} fa-2x"></i>
    <p>${uppercaseName}</p>
    </div>
    `
        document.querySelector(".cards").insertAdjacentHTML("beforeend", element)
    })

}

function filtering(filtered) {

    if (filtered.type == icon_type) {
        return true;
    } else if (icon_type == "all") {
        return true;
    } else {
        return false;
    }
}