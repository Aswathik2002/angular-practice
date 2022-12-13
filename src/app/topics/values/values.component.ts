import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Topic} from 'src/app/modules/Topic';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {
  //(parent to child)
  @Input() pageTitle:string = '';
  
  // @Input() topicList:{id:number;topicName:string;}[]=[];
  @Input() topicList:Topic[]=[];

  @Output() onUserSelectTopic:EventEmitter<Topic> = new EventEmitter<Topic>();

  constructor() { }

  ngOnInit(): void {
  }

  onTopicSelect =(topic:Topic)=>{
    console.log("onTopicSelect",topic)
    this.onUserSelectTopic.emit(topic);
  }
}
