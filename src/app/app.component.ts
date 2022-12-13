import { Component } from '@angular/core';
import { Topic } from './modules/Topic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  message = "Text Interpolation Data Binding";
  
  imageUrl = "https://picsum.photos/seed/picsum/200/300";

  UserName:string ="";
  PassWord:string ="";

  titleBGColor = "blue";
  WidthSize = "200px";

  selectedTopic?:Topic; 

  topics:Topic[] =[
    {
      id:1,
      topicName:"frontend developing",
    },
    {
      id:2,
      topicName:"backend developing",
    }
  ]

  showDetails = () =>{
    console.log("UserName:",this.UserName);
    this.UserName ="dummy";
    this.titleBGColor = "yellow";
    console.log("showDetails function")
  }

  onTopicSelection =(topic:Topic)=>{
    this.selectedTopic=topic;
    console.log("Selected Topic Recevied:",topic)
  }
}
