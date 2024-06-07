// document.addEventListener('DOMContentLoaded', () => {
//     const outputElement = document.getElementById('output');

//     // Function to create a promise that resolves after a random time between 1 and 3 seconds
//     function createPromise(promiseNumber) {
//         const time = Math.floor(Math.random() * 3) + 1;
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve({ promiseNumber, time });
//             }, time * 1000);
//         });
//     }

//     // Create an array of 3 promises
//     const promises = [
//         createPromise(1),
//         createPromise(2),
//         createPromise(3)
//     ];

//     // By default, add a row that spans 2 columns with the exact text Loading...
//     const loadingRow = document.createElement('tr');
//     loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
//     outputElement.appendChild(loadingRow);

//     // Record the start time
//     const startTime = performance.now();

//     // Use Promise.all to wait for all promises to resolve
//     Promise.all(promises)
//         .then(results => {
//             // Calculate the total time taken
//             const totalTime = (performance.now() - startTime) / 1000;

//             // Remove the loading row
//             outputElement.removeChild(loadingRow);

//             // Add rows to the table for each promise result
//             results.forEach(result => {
//                 const row = document.createElement('tr');
//                 row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time}</td>`;
//                 outputElement.appendChild(row);
//             });

//             // Add the total time row
//             const totalRow = document.createElement('tr');
//             totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
//             outputElement.appendChild(totalRow);
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// });

document.addEventListener('DOMContentLoaded', () => {
    const outputElement = document.getElementById('output');

    // Function to create a promise that resolves after a random time between 1 and 3 seconds
    function createPromise(promiseNumber) {
        const time = Math.floor(Math.random() * 3) + 1;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ promiseNumber, time });
            }, time * 1000);
        });
    }

    // Create an array of 3 promises
    const promises = [
        createPromise(1),
        createPromise(2),
        createPromise(3)
    ];

    // By default, add a row that spans 2 columns with the exact text Loading...
    const loadingRow = document.createElement('tr');
    loadingRow.id = 'loading';
    loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
    outputElement.appendChild(loadingRow);

    // Record the start time
    const startTime = performance.now();

    // Use Promise.all to wait for all promises to resolve
    Promise.all(promises)
        .then(results => {
            // Calculate the total time taken
            const totalTime = (performance.now() - startTime) / 1000;

            // Remove the loading row
            outputElement.removeChild(loadingRow);

            // Add rows to the table for each promise result
            results.forEach(result => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>Promise ${result.promiseNumber}</td><td>${result.time}</td>`;
                outputElement.appendChild(row);
            });

            // Add the total time row
            const totalRow = document.createElement('tr');
            totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
            outputElement.appendChild(totalRow);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

