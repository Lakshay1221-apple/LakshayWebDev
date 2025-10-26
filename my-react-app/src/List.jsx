

function List() {
    

    const fruits = [
        {name: "apple", calories: 95},
        {name: "banana", calories: 105}, 
        {name: "mango", calories: 60},
        {name: "orange", calories: 45},
        {name: "pineapple", calories: 100}
    ];

    const lowCalFruit = fruits.filter(fruit => fruit.calories < 90);
 
    const listItems1 = lowCalFruit.map(fruit => (
        <li key={fruit.name}>
            {fruit.name}: {fruit.calories} calories
        </li>
    ));

    
    const highCalFruit = fruits.filter(fruit => fruit.calories >= 90);
    const listItems = highCalFruit.map(fruit => (
        <li key={fruit.name}>
            {fruit.name}: {fruit.calories} calories
        </li>
    ));
 
    const listItemsAll = fruits.map(fruits =>(
        <li key ={fruits.name}>
            {fruits.name}: {fruits.calories} calories
        </li>
    ) )


    return (
        <> 
            <h2 className = "list-title">Fruit List</h2>
            <ul className = "list-items">{listItemsAll}</ul>
            <h3 className = "list-title">Low Calorie Fruits (&lt; 90)</h3>
            <ul className = "list-items">{listItems1}</ul>
            <h3 className = "list-title">High Calorie Fruits (&gt;= 90)</h3>
            <ul className = "list-items">{listItems}</ul>
        </>
    );

}


export default List;



