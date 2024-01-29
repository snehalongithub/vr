
AFRAME.registerComponent('rotate-cylinder', {
    init: function() {
        let el = this.el;
        this.rotateCylinder = function() { el.emit('rotate'); }        
        this.el.addEventListener('click', this.rotateCylinder);
     },

    remove: function() { 
        this.el.removeEventListener('click', this.rotateCylinder);
    }
}) 