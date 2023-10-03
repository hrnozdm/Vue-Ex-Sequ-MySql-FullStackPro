<template>

<div>
    <div class="container-fluid mt-5 d-flex justify-content-center">
        <div class="card" style="width: 55rem;">
            <div  class="card-header bg-primary text-white" style="font-size: 25px;height:4rem">{{title}}</div>
            <div class="card-body">
              <slot></slot>
            </div>
        </div>
    </div>
</div>
   
</template>
  
  <script>

  export default {
    data() {
      return {
      
      };
    },
    
    props:['title']
  };
  </script>
  
  <style>
 
  </style>
  