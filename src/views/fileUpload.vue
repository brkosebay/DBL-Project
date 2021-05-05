<template>
  <div class="fileupload" v-bind:style="{display:grid}">
    <h1>File Upload Page</h1>
    <input type="text" placeholder="Name of the Dataset" v-model=datasets.dataName class="form-control"><br><br>
    <input type="file" @change="selectFile"><button @click="uploadFile">Upload</button><br><br>
    <ul id="list"> </ul>
  </div>
</template>

<script>
import firebase from 'firebase';
import * as d3 from 'd3-dsv';
import {db} from '../main'

export default {
  name: 'fileUpload',
  data () {
      return {
        datasets: {
          fileLink: null,
          dataName: null,
        },
          selectedFile: null,
          datasetNo: 0
      }
  },
  mounted() {
    this.getAllDatabaseEntries();
  },
  methods: {
      selectFile(event) {
          console.log(event)
          this.selectedFile = event.target.files[0]
          console.log(this.selectedFile.name)
      },
      uploadFile() {
          let fileName = `${this.selectedFile.name}`;
          var storageRef = firebase.storage().ref(fileName);
          let uploadTask = storageRef.put(this.selectedFile);
          uploadTask.on('state_changed', () => {
          }, (error) => {
            //Handle unsuccessfull uploads.
            console.log(error);
          }, () => {
            //Handle successfull uploads.
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.datasets.fileLink = downloadURL;
              this.saveDataToDB();
            })
          })
          },
        saveDataToDB() {
          db.collection("datasets").add(this.datasets).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch( (error) => {
            console.error("Error adding document: ", error);
          })
          },
        showDatabaseEntries(name, link) {
          var ul = document.getElementById('list');
          var header = document.createElement('h2');
          var _name = document.createElement('li');
          var _visualise = document.createElement('button');
          header.innerHTML = "Dataset-"+ (++this.datasetNo);
          _name.innerHTML="Name of the dataset: "+name;
          _visualise.innerHTML = "Visualise";
          _visualise.onclick = async () => {
            const response = await fetch(link);
            const data = d3.csvParse(await response.text(), d3.autoType);
            console.log(data);
          }
          ul.appendChild(header);
          ul.appendChild(_name);
          ul.appendChild(_visualise);
        },
        getAllDatabaseEntries() {
          db.collection('datasets').get().then((snapshot) => {
            snapshot.forEach((doc) => {
              let name = doc.data().dataName;
              let link = doc.data().fileLink;
              this.showDatabaseEntries(name, link);
            }
            )
          }
          )
        },
        }
      }
</script>

