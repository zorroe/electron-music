<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside></Aside>
        </el-aside>
        <el-container>
          <el-main>
            <el-scrollbar>
              <div class="px-4">
                <router-view></router-view>
              </div>
            </el-scrollbar>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>



<script setup lang="ts">
import Header from '@/components/Header.vue';
import Aside from '@/components/Aside.vue';

</script>

<style>
.el-aside {
  border-right: 1px solid #e0e0e0;
  height: 600px;
}

.el-footer {
  background-color: #def7ff;
  height: 50px;
}

.el-main {
  height: 550px;
  padding: 10px 0px 0px 0px;
}
</style>
