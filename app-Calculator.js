let tipCalculator = {
    bill: 0,
    numOfGuests: 0,
    qualOfService: 0,
    extraTip: 0,
    total: 0,

    // takes function to grab input from user and calculate tip

calculateTip: function() {
        this.bill = document.getElementById("billInput").value;
        this.qualOfService = document.getElementById("service").value;
        this.numOfGuests = document.getElementById("guestInput").value;

    // convert string data type to number data type

       this.bill = parseInt(this.bill);
       this.qualOfService = parseFloat(this.qualOfService);
       this.numOfGuests = parseInt(this.numOfGuests);


    // If there is a large group the minimum tip will be 18%

        if (this.numOfGuests > 6 && this.qualOfService < .2) {
            this.qualOfService = .18;
        }
    
    // get tip and total

        this.extraTip = (this.bill * this.qualOfService) / this.numOfGuests;

        this.total = this.bill + this.extraTip;


    // set a variable to html ID and output to user

       let output = document.getElementById("calOutput")

       output.innerHTML = `The tip for your $${this.bill} bill would be
       $${this.extraTip.toFixed(2)} for a total of $${this.total.toFixed(2)}`
    },

};
