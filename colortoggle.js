
AFRAME.registerComponent('color-toggle', {
    init: function() {
        let el = this.el;
        this.toggleColor = function() { el.setAttribute('color', '#8B0000'); }  //DarkRed
        this.el.addEventListener('click', this.toggleColor);
     },
    remove: function() { 
        this.el.removeEventListener('click', this.toggleColor);
    }
})