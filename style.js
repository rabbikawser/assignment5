
  function btn2(){
    const bt1=document.getElementById('bt1')
    const bt2=document.getElementById('bt2')
    bt2.classList.add('bg-[#B4F461]');
    bt1.classList.remove('bg-[#B4F461]')
   console.log(bt1);
   const main=document.getElementById('main')
   const main1=document.getElementById('main1')
   main.classList.add('hidden')
   main1.classList.remove('hidden')
  }

  function btn1(){
    const bt1=document.getElementById('bt1')
    const bt2=document.getElementById('bt2')
    bt1.classList.add('bg-[#B4F461]');
    bt2.classList.remove('bg-[#B4F461]')

    const main=document.getElementById('main')
    const main1=document.getElementById('main1')
    main1.classList.add('hidden')
    main.classList.remove('hidden')
   
  }

function clk(){
  window.location.href="blog.html"
}


function getDateTime() {

  const now = new Date();
  

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); 
  const day = now.getDate().toString().padStart(2, '0');
  

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  

  const dateTimeString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  

  return dateTimeString;
}
console.log(getDateTime());


 function btnn1(){
      
     const btn1=document.getElementById('input1').value
   const int=parseInt(btn1)

    console.log(typeof(int));
    if(!isNaN(int)&&int>0 &&typeof(int)==='number'){
      const amonut=document.getElementById('taka1').innerText;
      const totalamount=document.getElementById('money').innerText
      const inttotalamount=parseInt(totalamount)
      const title=document.getElementById('title1').innerText;
      console.log(title);
      const date=getDateTime()

      console.log(amonut);
      intamount=parseInt(amonut)
      const total=intamount+int;
      document.getElementById('taka1').innerText=total;
      document.getElementById('input1').value=""
      const settotalamount=inttotalamount-int;
      document.getElementById('money').innerText=settotalamount
      const main1=document.getElementById('main1');
      const div=document.createElement('div')
      div.innerHTML=`<div class="p-6 mt-5 border rounded shadow">
        <h1 class="font-bold">${int} Taka ${title}</h1>
        <h1>Date: ${date}</h1>
       </div>`
       main1.appendChild(div);
      //  alert('succesfully doneted')
   
      const aa=document.getElementById('my_modal_5')
      aa.showModal();
     
     
    }
    else{
    alert('please give valid input')
    }
 }


 function btnn2(){
      
  const btn1=document.getElementById('input2').value
const int=parseInt(btn1)

 console.log(typeof(int));
 if(!isNaN(int)&&int>0 &&typeof(int)==='number'){
   const amonut=document.getElementById('taka2').innerText;
   const totalamount=document.getElementById('money').innerText
   const inttotalamount=parseInt(totalamount)
   const title=document.getElementById('title2').innerText;
   console.log(title);
   const date=getDateTime()

   console.log(amonut);
   intamount=parseInt(amonut)
   const total=intamount+int;
   document.getElementById('taka2').innerText=total;
   document.getElementById('input2').value=""
   const settotalamount=inttotalamount-int;
   document.getElementById('money').innerText=settotalamount
   const main1=document.getElementById('main1');
   const div=document.createElement('div')
   div.innerHTML=`<div class="p-6 mt-5 border rounded shadow">
     <h1 class="font-bold">${int} Taka ${title}</h1>
     <h1>Date: ${date}</h1>
    </div>`
    main1.appendChild(div);
    const aa=document.getElementById('my_modal_5')
      aa.showModal();
  
 }
 else{
 alert('please give valid input')
 }
}

function btnn3(){
      
  const btn1=document.getElementById('input3').value
const int=parseInt(btn1)

 console.log(typeof(int));
 if(!isNaN(int)&&int>0 &&typeof(int)==='number'){
   const amonut=document.getElementById('taka3').innerText;
   const totalamount=document.getElementById('money').innerText
   const inttotalamount=parseInt(totalamount)
   const title=document.getElementById('title3').innerText;
   console.log(title);
   const date=getDateTime()

   console.log(amonut);
   intamount=parseInt(amonut)
   const total=intamount+int;
   document.getElementById('taka3').innerText=total;
   document.getElementById('input3').value=""
   const settotalamount=inttotalamount-int;
   document.getElementById('money').innerText=settotalamount
   const main1=document.getElementById('main1');
   const div=document.createElement('div')
   div.innerHTML=`<div class="p-6 mt-5 border rounded shadow">
     <h1 class="font-bold">${int} Taka ${title}</h1>
     <h1>Date: ${date}</h1>
    </div>`
    main1.appendChild(div);
    const aa=document.getElementById('my_modal_5')
      aa.showModal();
  
 }
 else{
 alert('please give valid input')
 }
}
