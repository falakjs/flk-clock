class FlkClock {
    /**
     * Constructor
     * Put your required dependencies in the constructor parameters list  
     */
    constructor() {}
    
    /**
     * Initialize the component
     * This method is triggered before rendering the component
     */
    init() {
        this.additionalClasses = this.inputs.getAttr('class', '');
        
        this.time = {
            hours: 0,
            minutes: 0,
            ampm: null,
        };

        this.updateTime();

        setInterval(this.updateTime.bind(this), 1000);
    }

    /**
     * Update time
     */
    updateTime() {
        let date = new Date;
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        if (hours < 10) {
            hours = '0' + hours;
        }
        minutes = minutes < 10 ? '0'+minutes : minutes;
        this.time = {
            hours,
            minutes,
            ampm,
            seconds,
        };
    }

    /**
     * The component is ready to do any action after being rendered in dom
     */
    ready() {}
}