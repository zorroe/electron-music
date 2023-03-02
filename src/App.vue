<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>



<script setup lang="ts">
import Header from '@/components/Header.vue';

localStorage.setItem("BASE_URL", "https://service-0g03ogpy-1254067389.gz.apigw.tencentcs.com/release/")

</script>

<style></style>
