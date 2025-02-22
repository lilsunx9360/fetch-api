async function getTodos() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        const tabledata = document.getElementById('data');

        let rows = '';
        data.users.forEach((data, index) => {
            rows += `
            <tr>
                <td>${index + 1}</td>
                <td>${data.firstName}</td>  
                <td>${data.lastName}</td>
            </tr>`;
        });

        tabledata.innerHTML = rows;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getTodos();


// async function getTodos() {
//     try {
//         const response = await fetch('https://dummyjson.com/users');
//         const data = await response.json();
//         const tabledata = document.getElementById('data');

//         let rows = '';
//         data.users.forEach((user, index) => {
//             rows += `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${user.firstName}</td>  
//                 <td>${user.lastName}</td>
//             </tr>`;
//         });

//         tabledata.innerHTML = rows;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// getTodos();
