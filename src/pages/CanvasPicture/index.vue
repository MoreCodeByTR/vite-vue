<template>
  <div>
    <button size="mini" type="primary" plain @click="download">导出图片</button>
    <div ref="content" class="img-container">
      <div class="decription-text">通过htmltocanvas导出图片，只要是在容器里面的都可以被画入幕布中，div不能隐藏</div>
      <img class="avatar" src="https://avatars.githubusercontent.com/u/51108500?v=4" />
      <img class="avatar-two" src="https://avatars.githubusercontent.com/u/51108500?v=4" />
    </div>
  </div>
</template>
<script>
import html2canvas from 'html2canvas'
export default {
  name:'CanvasPicture',
  data:() => {
    return {
    }
  },
  mounted:function() {
    return null
  },
  methods:{
    download() {
      const ref = this.$refs.content
      html2canvas(ref, {
        backgroundColor: '#e8f4ff',
        scale: 4, //设置导出图片尺寸缩放
        useCORS: true // 如果截图的内容里有图片,可能会有跨域的情况,加上这个参数,解决文件跨域问题
      }).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png')
        const creatDom = document.createElement('a')
        document.body.appendChild(creatDom)
        creatDom.href = dataURL
        creatDom.download = '图片'
        creatDom.click()
      })
    }
  }
}
</script>
<style scoped>
.loading-container{
    position: fixed;
    top: 0;
    z-index: 9999;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
}

.img-container{
  width: 400px;
  height: 400px;
  border: 2px  dashed black;
  position: relative;
  overflow: hidden;
  transform: scale(1);
}

.avatar{
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid black;
}

.avatar-two{
  position: absolute;
  top: 0;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid black;
}

.decription-text{
  width: 50%;
  font-size: 24px;
  font-family: cursive;
  text-align: justify;
}

</style>