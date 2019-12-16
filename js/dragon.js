$(function () {

    // Making the deck of cards

    const deck = ["<div class='empty'><div class='fill' draggable='true'></div></div>",
        "<div class='empty'><div class='fill' draggable='true'></div></div>",
        "<div class='empty'><div class='fill' draggable='true'></div></div>"];
    openingHand();

    const fill = document.querySelector('.fill');
    const empties = document.querySelectorAll('.empty');


// Fill Listeners

    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('dragend', dragEnd);


// Loop through empties and call drag events
    for (const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }



// Drag Functions

    function dragStart() {
        this.className += ' hold';
        setTimeout(() => this.className = 'invisible', 0);
    }

    function dragEnd() {
        this.className = 'fill';
    }

    function dragOver(e) {
        e.preventDefault();

    }

    function dragEnter(e) {
        e.preventDefault();
        this.className += ' hovered';
    }

    function dragLeave() {
        this.className = 'empty';
    }

    function dragDrop() {
        this.className = 'empty';
        this.append(fill);
    }

    // Other Functions

    function openingHand() {
        for (let i = 0; i < deck.length; i++){
            deal(i);
        }
    }

    function deal(x) {
        $('#hand').append(deck[x]);
    }

});