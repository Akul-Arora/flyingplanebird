// Registecollider component in Target.js

AFRAME.registerComponent("colliders", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `collider${i}`;
  
        //position variables     
        var posX =Math.floor((Math.random() * 3000 + (-1000)));      
        var posY = Math.floor((Math.random() * 2 + (-1)));
        var posZ = Math.floor((Math.random() * 3000 + -1000));
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCollider(id, position);
      }
    } ,
  
    createCollider: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var colliderEl = document.createElement("a-entity");
  
      colliderEl.setAttribute("id",id);
      colliderEl.setAttribute("position",position);
      colliderEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
      colliderEl.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf");
      
      colliderEl.setAttribute("animation-mixer", {})
  
      terrainEl.appendChild(colliderEl);
    }
  });
  