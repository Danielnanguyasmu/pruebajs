let foods = [],
    newFood,
    btnAddFood = document.getElementById('btnAddFood'),
    btnDeleteFood = document.getElementById('btnDeleteFood'),
    foodList = document.getElementById('foodList');



function chkFood(food){
    if (food == null || food.trim() == '')
    {
        alert('Comida inválida. Ingrese otra');
        return true
    }
    return false
}

function addFood(){
    do{
        newFood = prompt('Ingrese su comida: ')
    }while(chkFood(newFood));

    foods.push(" " + newFood);
    foodList.innerHTML = foods;
}

function dltFood(){
    let foodFDlt = prompt('¿Qué comida quieres eliminar?');

    let foodFDlt_index = foods.indexOf(' ' + foodFDlt);
    if (foodFDlt_index >= 0){
        foods.splice(foodFDlt_index, 1);
        foodList.innerHTML = foods;
    }else{
        alert('No se encontro esa comida');
    }
}

btnAddFood.onclick = addFood;
btnDeleteFood.onclick = dltFood;

