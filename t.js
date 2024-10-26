const dogs = [
    {
        name: "Tommy",
        breed: "Golden Retriever",
        age: 2,
        weight: "65 lbs",
        color: "Golden",
        location: "5 miles away ,phone : 9578641290",
        description: "Loves playing fetch and swimming.",
        image: "https://i.pinimg.com/564x/99/f5/01/99f5018b38821c9923403f4250386220.jpg",
    },
    {
        name: "Chikku",
        breed: "Bulldog",
        age: 1,
        weight: "50 lbs",
        color: "Brindle",
        location: "10 miles away ,phone : 9452337082",
        description: "A friendly dog who loves cuddles.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/800px-Bulldog_inglese.jpg",
    },
    {
        name: "Charlie",
        breed: "Beagle",
        age: 2,
        weight: "30 lbs",
        color: "Tri-color",
        location: "8 miles away ,phone : 8078899564",
        description: "Curious and loves to explore.",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2023/11/GettyImages-157603001-e1701106766955.jpg?w=1024",
    },
    {
        name: "Daisy",
        breed: "pitbull",
        age: 2,
        weight: "45 lbs",
        color: "White",
        location: "15 miles away ,phone : 7580930122",
        description: "Smart and loves learning tricks.",
        image: "https://media.istockphoto.com/id/494725524/photo/smiling-white-pit-bull.jpg?s=612x612&w=0&k=20&c=RM10Zg_g8Qv2bSP-rjyFv6QfN7PfZbf_55Hhp5B59xk=",
    },
    {
        name: "Subru",
        breed: "Labrador",
        age: 3,
        weight: "70 lbs",
        color: "Black",
        location: "20 miles away ,phone : 04762665935",
        description: "A loyal companion and great family dog.",
        image: "https://dogtime.com/wp-content/uploads/sites/12/2024/01/GettyImages-590608307-e1706029609404.jpg?w=1024",
    },
    {
        name: "Julie" ,
        breed: "Pomeranian",
        age: 1,
        weight: "50 lbs",
        color: "blonde",
        location: "100 miles away ,phone : 8069647444",
        description: "need a muscular guy.",
        image: "https://i.pinimg.com/564x/ec/c0/86/ecc08656546d6626a52b58f052f27af6.jpg"
    },
    {
        name: "Sky" ,
        breed: "Shih Tzu",
        age: 1.5,
        weight: "30 lbs",
        color: "White",
        location: "78 miles away ,phone : 9765442378",
        description: "Music Lover, dancer ",
        image: "https://doggywala.com/assets/images/shih-tzu/shih-tzu-vertical-image.jpg"
    },
    {
        name: "Mickey",
        breed: "poodle",
        age: 4,
        weight: "70 lbs",
        color: "white",
        location: "86 miles away ,phone : 7231712033",
        description: "Athletic and loves to play game and is energetic",
        image: "https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/277177400_157348866664807_8551027505360783970_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=exHuhzgaJfcQ7kNvgGi2XF7&_nc_zt=23&_nc_ht=scontent.fmaa8-1.fna&_nc_gid=ALp5fiHRAIxVU-cAbAcA5GP&oh=00_AYDJWqox2ozdPv5df74e0X4s8dXrXZ3aP5rx3hLtRGwHsA&oe=6721ED02",
    },
    {
        name: "Bruno",
        breed: "Rottweiler",
        age: 5,
        weight: "98 lbs",
        color: "Black",
        location: "86 miles away ,phone : 9785463280",
        description: "gym addict",
        image: "https://puffandfluffspa.com/wp-content/uploads/2017/08/Depositphotos_1979239_m-2015-1000x675.jpg",
    },
    {
        name: "Ruby",
        breed: "Golden retriever",
        age: 7,
        weight: "112 lbs",
        color: "Golden",
        location: "138 miles away ,phone : 8296562345",
        description: "Loyal , prince Charming ",
        image: "https://images.ctfassets.net/ub3bwfd53mwy/1V6YRCwEPNAADgqehMwbZk/e1ef1616addabd71f9acfd0b41dd9ea4/pexels-helena-lopes-5268300.jpg?w=750",
    },
    {
        name: "leo",
        breed: "Pug",
        age: 1,
        weight: "30 lbs",
        color: "white",
        location: "20 miles away ,phone : 7543129670",
        description: "Endless Love",
        image: "https://cdn.jwplayer.com/v2/media/4eTrM1Yk/poster.jpg?width=720",
    },
];

let currentDogIndex = 0;

const dogCard = document.getElementById("dogCard");
const dogImage = document.getElementById("dogImage");
const dogDetails = document.getElementById("dogDetails");
const rightArrow = document.getElementById("rightArrow");
const likeButton = document.getElementById("likeButton");
const chatSection = document.getElementById("chatSection");
const messages = document.getElementById("messages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

function showDog() {
    const dog = dogs[currentDogIndex];
    dogImage.src = dog.image;
    dogDetails.innerHTML = `
        <h2>${dog.name}</h2>
        <p>Breed: ${dog.breed}</p>
        <p>Age: ${dog.age} years</p>
        <p>Weight: ${dog.weight}</p>
        <p>Color: ${dog.color}</p>
        <p>Location: ${dog.location}</p>
        <p>Description: ${dog.description}</p>
    `;
}

rightArrow.addEventListener("click", () => {
    currentDogIndex = (currentDogIndex + 1) % dogs.length;
    showDog();
});

likeButton.addEventListener("click", () => {
    alert(`You liked ${dogs[currentDogIndex].name}`);
});

sendButton.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message) {
        const newMessage = document.createElement("div");
        newMessage.textContent = `You: ${message}`;
        messages.appendChild(newMessage);
        chatInput.value = '';
        messages.scrollTop = messages.scrollHeight; // Scroll to the latest message
    }
});

// Show the first dog and chat section
showDog();
chatSection.style.display = "block";