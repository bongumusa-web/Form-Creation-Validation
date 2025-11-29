async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try{
        const response = await fetch(apiUrl);
        const users =await response.json(); // converting data to JSON format

        dataContainer.innerHTML = ''; // Clear previous data

        const userList = document.createElement('ul'); // creacting a list to display users
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;  // displaying user name
            userList.appendChild(li);   // adding list item to the user list
        });
        dataContainer.appendChild(userList); // adding user list to the container

  }
    catch(error){
        dataContainer.innerHTML = 'Failed to load user data.'; // error handling
        console.error('Error fetching data:', error);

   }

        
    
}


//envoking 
document.addEventListener('DOMContentLoaded', fetchUserData);