let slideshow = {
    bill = 0,
    numOfGuests = 0,
    qualOfService: ['bad', 'okay', 'great'],

    // takes billAmount and times it by .2
    tip: function (amount) {

        extraTip = 0;

        if (numOfGuests > 4) {
            extraTip = amount * .1;
        }

        return amount * 0.2;
    },

    // returns bill and adds the tip
    totalWithTip: function (amount) {
        return tip(amount) + amount;
    },

    // function call to get total
    getTotal: function{
        console.log(`$${totalWithTip(this.bill).toFixed(2)}`);
    }
};