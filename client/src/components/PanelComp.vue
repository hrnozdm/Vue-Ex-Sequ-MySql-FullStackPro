<template>
  <div>
    <div class="container-fluid mt-5 d-flex justify-content-center">
      <div class="card" style="width: 55rem;">
        <div class="card-header bg-primary text-white" style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            {{ title }}
          </div>
         
          <div>
            <slot name="action"></slot>
          </div>

          <div>
            <slot name="search"></slot>
          </div>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style>

</style>
