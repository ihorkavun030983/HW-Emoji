const emojiBlock = document.getElementById('emojis');
const quantityBlock = document.getElementById('quantity');
// console.log(emojiBlock, quantityBlock);

const emojiArray = ['😀', '😍', '😡', '😱', '😂'];
const quantityArray = [0, 0 ,0 ,0 ,0];

for (let i = 0; i < emojiArray.length; i++) {
    emojiBlock.innerHTML += `<span id = emoji data-index="${i}">${emojiArray[i]}</span>`;
    quantityBlock.innerHTML += `<span class = "quantity__span">0</span>`;
}

// console.log(emojiBlock.innerHTML, quantityBlock.innerHTML)


emojiBlock.addEventListener('click', (event) => {
    const emoji = event.target.closest('#emoji'); //closest отрим елемент span
    if (emoji) {
        const emojiIndex = emoji.dataset.index;
        quantityArray[emojiIndex]++;
        quantityBlock.children[emojiIndex].textContent = quantityArray[emojiIndex];
    }    
});

