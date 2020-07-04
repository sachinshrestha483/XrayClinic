var app = new Vue({
  el: '#app',
  data: {
    id:'',
    pname:'',
    page:'',
    psex:'',
    pry:'',
    pdate:'',
    t:'',
    sum:0,
    dis:0,
    name:'',
    price:0,

   
    rowData:[] //the declared array
  },
  methods:{
    addItem(){
      var my_object = {
        id:this.id,
        name:this.name,
        price:this.price,

   
      };
      this.rowData.push(my_object)

      this.id = '';
      this.name = '';
      this.price = 0;
      this.AmountTotal();
     
    },
    removeItem(){
      this.rowData.splice(0,0)
      this.AmountTotal();
    },
    removeEl: function (index) {
      this.sum=this.sum-this.rowData[index].price;

      this.rowData.splice(index, 1);
      console.log(index);
    },
    AmountTotal()
    {
        var t=0;
      for(let i = 0; i < this.rowData.length; i++){
          t += (parseFloat(this.rowData[i].price) );
          console.log(this.sum);
        }
        this.sum=t;
       this.sum= this.sum-this.dis;
       
    }

  }
})