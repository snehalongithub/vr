AFRAME.registerComponent('moving', {

    init: function() {
        let el = this.el;
        this.animateMoving = function(e) {
            let curPosition = el.getAttribute('position');
            let params = {
                property: 'position',
                to: {
                    x: curPosition.x,
                    y: curPosition.y - 1,
                    z: curPosition.z
        },
        dur: 5000,
        easing: 'easeInOutSine'      
    };
    el.setAttribute('animation', params);
}
    this.el.addEventListener('click', this.animateMoving);
},
    remove: function() {
        this.el.removeEventListener('click', this.animateMoving);
    }

});