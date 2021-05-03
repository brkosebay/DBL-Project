<template>
  <div class="fileupload">
    <h1>File Upload Page</h1>
    <input type="file" @change="selectFile"><button @click="uploadFile">Upload</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'fileUpload',
  data () {
      return {
          selectedFile: null
      }
  },
  methods: {
      selectFile(event) {
          console.log(event)
          this.selectedFile = event.target.files[0]
          console.log(this.selectedFile.name)
      },
      uploadFile() {
          let fileName = `${this.selectedFile.name}`;
          var storageRef=firebase.storage().ref(fileName);
          storageRef.put(this.selectedFile);
      }
  }
}
</script>

