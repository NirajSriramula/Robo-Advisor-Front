import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss']
})
export class TypeComponent implements OnInit {
  eTFs:string[] = [];
  freq:Number[] = [];
  a: any;
  b:Number=0;
  isErrors: boolean = false;
  counter:number = 0;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.isErrors = false;
    console.log(this.eTFs);
    let user = ""+localStorage.getItem("name");
    let sessionId =""+ localStorage.getItem("sessionID");
    this.adminService.getPredictions(user,sessionId).subscribe((response:any)=>{
      console.log(response);
      let data = JSON.parse(response.weights);
      this.counter = this.counter+1;
      console.log(data);
      const arr: string[] = Object.keys(data);
      let i=0;
      const amounts: number[] = [];
      let amount = 1000;
      amount = parseInt(""+localStorage.getItem("amount"));
      this.eTFs = [];
      for(i=0;i<arr.length;i++){
        if(data[arr[i]]!=0){
          this.eTFs.push(arr[i]);
        }
      }
      console.log(this.eTFs);
      for(i=0;i<this.eTFs.length;i++){
        amounts.push(amount*data[this.eTFs[i]]);
        console.log(amounts);
      }
    this.freq = amounts;
    if(this.counter<=1){
      myChart.destroy();
      this.ngOnInit();
    }
    },(error)=>{this.isErrors = true;});
    console.log(`count array :`+this.freq)
    console.log(`count array :`+this.eTFs)
  // donut chart
  const ctx = document.getElementById('donut') as HTMLCanvasElement;
  const myChart = new Chart(ctx, {
    type:'doughnut',
    data: {
        labels: this.eTFs,
        datasets: [{
            data: this.freq,
            backgroundColor: [
              'rgba(231, 111, 81,0.9)',
              'rgba(231, 111, 81,0.7)',
              'rgba(231, 111, 81,0.5)',
              'rgba(231, 111, 81,0.3)',
            ],
        }]
    },
    options: {
      plugins:{
        tooltip:{
          yAlign: 'bottom',
          displayColors : false,
          backgroundColor:'rgba(188, 230, 227, 0.6)',
          titleColor:'#2f3030',
          bodyColor:'#2f3030',
          titleAlign:'center',
          bodyAlign:'center',
          callbacks: {
            title : function(context) {
              //console.log(context);  
              return `Category : ${[context[0].label]}`;
            },
            label : function(context) {
              return `Money invested: ${[context.formattedValue]} ₹`;
            }
          }
        }
      },
      animation:{
        animateRotate:true
      },
      cutout: '75%',
    }
  }); 
  console.log("DONUT CHART Works!") 
  }

}
//orange
//'rgba(231, 111, 81,0.9)',
// 'rgba(231, 111, 81,0.7)',
// 'rgba(231, 111, 81,0.5)',
// 'rgba(231, 111, 81,0.3)',