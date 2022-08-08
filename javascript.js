



function createNBlocks(){
    const num = prompt("How many N x N blocks you want to create?")
    const grid_container = document.querySelector('.grid-container');
    grid_container.innerHTML = "";
    grid_container.style.gridTemplateColumns = `repeat(${num},auto)`;
    grid_container.style.gridTemplateRows = `repeat(${num},auto)`;
    for(let i = 0; i < (num * num); i++){
        const div  = document.createElement('div');
        div.addEventListener('mouseover',()=>{
            div.style.boxShadow = 'inset 0 0 5px 1px rgba(15, 15, 15, 0.5)';
            div.style.backgroundColor = '#04A777';
        })
        grid_container.appendChild(div);
    }
}

createNBlocks();

function populate(){
    const button = document.querySelector('button');
    button.addEventListener('click',createNBlocks);
}

populate();

function trace(){
    const grid_container = document.querySelector('.grid-container');
    const divs = grid_container.querySelectorAll('div');
    divs.forEach(div => div.addEventListener('mouseover',()=>{
        div.style.boxShadow = 'inset 0 0 5px 1px rgba(15, 15, 15, 0.5)';
        div.style.backgroundColor = '#04A777';
    }))
}

trace();