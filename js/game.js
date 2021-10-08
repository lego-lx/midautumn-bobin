$(function () {
    let p1=localStorage.getItem("p1name");
    let p2=localStorage.getItem("p2name");
    let p3=localStorage.getItem("p3name");
    let p4=localStorage.getItem("p4name");
    $('#tp1').text(p1);
    $('#tp2').text(p2);
    $('#tp3').text(p3);
    $('#tp4').text(p4);
    $('#pn1').text(p1);
    $('#pn2').text(p2);
    $('#pn3').text(p3);
    $('#pn4').text(p4);
    //从内存中读取玩家名并反映到页面上
    $('#return').click(
      ()=>
      {
        let con = confirm("是否退出游戏？");
        if(con) location.href="main.html";
      }
    )
    $('.smalldice').hide();
    });
    let order=1;
    let bigdices1=$('#bigdice1');
    let bigdices2=$('#bigdice2');
    let bigdices3=$('#bigdice3');
    let bigdices4=$('#bigdice4');
    let bigdices5=$('#bigdice5');
    let bigdices6=$('#bigdice6');
    //获得主游戏界面骰子图标的Jquery对象
    let p1result=new Array(6);
    let p2result=new Array(6);
    let p3result=new Array(6);
    let p4result=new Array(6);
    //创建结果数组
    let p1num=[0,0,0,0,0,0,0];
    let p2num=[0,0,0,0,0,0,0];
    let p3num=[0,0,0,0,0,0,0];
    let p4num=[0,0,0,0,0,0,0];
    //创建掷骰结果中每个结果包含几个特定骰子值的数组（用于判定等级）
    let p1class;
    let p2class;
    let p3class;
    let p4class;
    let playernum=localStorage.getItem("playernum");
    //从内存中读取玩家数
    console.log(playernum);
    $('#go').click(
    //绑定点击掷骰按钮的掷骰事件
      ()=>
    { //如果所有玩家都掷骰完毕，则结束游戏并跳转到结果页面
      if (order>playernum)
        {  
          let con = alert("游戏结束！进入结果统计页面。");
          location.href="result.html";         
        }
      switch(order)
      //确定是哪个玩家在掷骰
      { 
        case 1:
        {
          for(let i=0;i<6;i++)
          {
            p1result[i]=Math.floor(Math.random()*6 + 1);
            p1num[p1result[i]]++;
            switch(i)
            {
              case 0:
              { let src="img/骰子"+p1result[i]+".png";
                bigdices1.attr("src",src);
                $('#sd1-1').attr("src",src);
                $('#sd1-1').show();
              }
              case 1:
              { let src="img/骰子"+p1result[i]+".png";
                bigdices2.attr("src",src);
                $('#sd1-2').attr("src",src);
                $('#sd1-2').show();
              }
              case 2:
              { let src="img/骰子"+p1result[i]+".png";
                bigdices3.attr("src",src);
                $('#sd1-3').attr("src",src);
                $('#sd1-3').show();
              }
              case 3:
              { let src="img/骰子"+p1result[i]+".png";
                bigdices4.attr("src",src);
                $('#sd1-4').attr("src",src);
                $('#sd1-4').show();
              }
              case 4:
              { let src="img/骰子"+p1result[i]+".png";
                bigdices5.attr("src",src);
                $('#sd1-5').attr("src",src);
                $('#sd1-5').show();
              }
              case 5:
              { let src="img/骰子"+p1result[i]+".png";
                bigdices6.attr("src",src);
                $('#sd1-6').attr("src",src);
                $('#sd1-6').show();
              }
            }
          }
          //掷骰后连续产生六个随机数，并根据随机数修改游戏界面和结果栏骰子的显示结果，同时将掷骰结果保存
          p1class=judgeclass(p1num);
          $('#p1class').text(p1class);
          //调用等级判定函数判定等级后显示等级
        if (localStorage.p1result) {
            localStorage.p1result =$('#p1result').html();
        } 
        else localStorage.setItem("p1result",$('#p1result').html());
        if (localStorage.p1class) {
            localStorage.p1class =p1class;
        } 
        else localStorage.setItem("p1class",p1class);
        } 
        //保存等级和掷骰结果，将其与玩家绑定
        break;
        case 2:
        {
          for(let i=0;i<6;i++)
          {
            p2result[i]=Math.floor(Math.random()*6 + 1);
            p2num[p2result[i]]++;
            switch(i)
            {
              case 0:
              { let src="img/骰子"+p2result[i]+".png";
                bigdices1.attr("src",src);
                $('#sd2-1').attr("src",src);
                $('#sd2-1').show();
              }
              case 1:
              { let src="img/骰子"+p2result[i]+".png";
                bigdices2.attr("src",src);
                $('#sd2-2').attr("src",src);
                $('#sd2-2').show();
              }
              case 2:
              { let src="img/骰子"+p2result[i]+".png";
                bigdices3.attr("src",src);
                $('#sd2-3').attr("src",src);
                $('#sd2-3').show();
              }
              case 3:
              { let src="img/骰子"+p2result[i]+".png";
                bigdices4.attr("src",src);
                $('#sd2-4').attr("src",src);
                $('#sd2-4').show();
              }
              case 4:
              { let src="img/骰子"+p2result[i]+".png";
                bigdices5.attr("src",src);
                $('#sd2-5').attr("src",src);
                $('#sd2-5').show();
              }
              case 5:
              { let src="img/骰子"+p2result[i]+".png";
                bigdices6.attr("src",src);
                $('#sd2-6').attr("src",src);
                $('#sd2-6').show();
              }
            }
          }
          p2class=judgeclass(p2num);
          $('#p2class').text(p2class); 
        if (localStorage.p2result) {
            localStorage.p2result =$('#p2result').html();
        } 
        else localStorage.setItem("p2result",$('#p2result').html());
        if (localStorage.p2class) {
            localStorage.p2class =p2class;
        } 
        else localStorage.setItem("p2class",p2class);
         
        } 
        break;
        case 3:
        {
          for(let i=0;i<6;i++)
          {
            p3result[i]=Math.floor(Math.random()*6 + 1);
            p3num[p3result[i]]++;
            switch(i)
            {
              case 0:
              { let src="img/骰子"+p3result[i]+".png";
                bigdices1.attr("src",src);
                $('#sd3-1').attr("src",src);
                $('#sd3-1').show();
              }
              case 1:
              { let src="img/骰子"+p3result[i]+".png";
                bigdices2.attr("src",src);
                $('#sd3-2').attr("src",src);
                $('#sd3-2').show();
              }
              case 2:
              { let src="img/骰子"+p3result[i]+".png";
                bigdices3.attr("src",src);
                $('#sd3-3').attr("src",src);
                $('#sd3-3').show();
              }
              case 3:
              { let src="img/骰子"+p3result[i]+".png";
                bigdices4.attr("src",src);
                $('#sd3-4').attr("src",src);
                $('#sd3-4').show();
              }
              case 4:
              { let src="img/骰子"+p3result[i]+".png";
                bigdices5.attr("src",src);
                $('#sd3-5').attr("src",src);
                $('#sd3-5').show();
              }
              case 5:
              { let src="img/骰子"+p3result[i]+".png";
                bigdices6.attr("src",src);
                $('#sd3-6').attr("src",src);
                $('#sd3-6').show();
              }
            }
          }
          p3class=judgeclass(p3num);
          $('#p3class').text(p3class);
          if (localStorage.p3result) {
            localStorage.p3result =$('#p3result').html();
        } 
        else localStorage.setItem("p3result",$('#p3result').html());
        if (localStorage.p3class) {
            localStorage.p3class =p3class;
        } 
        else localStorage.setItem("p3class",p3class);
        } 
        break;
        case 4:
        {
          for(let i=0;i<6;i++)
          {
            p4result[i]=Math.floor(Math.random()*6 + 1);
            p4num[p4result[i]]++;
            switch(i)
            {
              case 0:
              { let src="img/骰子"+p4result[i]+".png";
                bigdices1.attr("src",src);
                $('#sd4-1').attr("src",src);
                $('#sd4-1').show();
              }
              case 1:
              { let src="img/骰子"+p4result[i]+".png";
                bigdices2.attr("src",src);
                $('#sd4-2').attr("src",src);
                $('#sd4-2').show();
              }
              case 2:
              { let src="img/骰子"+p4result[i]+".png";
                bigdices3.attr("src",src);
                $('#sd4-3').attr("src",src);
                $('#sd4-3').show();
              }
              case 3:
              { let src="img/骰子"+p4result[i]+".png";
                bigdices4.attr("src",src);
                $('#sd4-4').attr("src",src);
                $('#sd4-4').show();
              }
              case 4:
              { let src="img/骰子"+p4result[i]+".png";
                bigdices5.attr("src",src);
                $('#sd4-5').attr("src",src);
                $('#sd4-5').show();
              }
              case 5:
              { let src="img/骰子"+p4result[i]+".png";
                bigdices6.attr("src",src);
                $('#sd4-6').attr("src",src);
                $('#sd4-6').show();
              }
            }
          }
          p4class=judgeclass(p4num);
          $('#p4class').text(p4class);
          if (localStorage.p4result) {
            localStorage.p4result =$('#p4result').html();
        } 
        else localStorage.setItem("p4result",$('#p4result').html());
        if (localStorage.p4class) {
            localStorage.p4class =p4class;
        } 
        else localStorage.setItem("p4class",p4class);
        } 
        break;
        default: break;
      } 
      //对于每个玩家重复第一个玩家的掷骰行为，并注意结果与玩家的绑定
        order++;
        //一个玩家掷骰完毕后顺序加1，用以判断是否所有玩家掷骰完毕
        //所有玩家掷骰完毕后结束游戏跳转至结果页面
    }
    );
    
    function judgeclass(pnum)
    { if(pnum[4]==4&&pnum[1]==2) return "插金花";
      else if(pnum[4]==6) return "红六勃";
      else if(pnum[1]==6) return "遍地锦";
      else if(pnum[1]==6||pnum[2]==6||pnum[3]==6||pnum[5]==6||pnum[6]==6) return "黑六勃";
      else if(pnum[4]==5) return "五红";
      else if(pnum[1]==5||pnum[2]==5||pnum[3]==5||pnum[5]==5||pnum[6]==5) return "五子登科";
      else if(pnum[4]==4) return "四红";
      else if(pnum[1]==1&&pnum[2]==1&&pnum[3]==1&&pnum[4]==1&&pnum[5]==1&&pnum[6]==1) return "对堂";
      else if(pnum[4]==3) return "三红";
      else if(pnum[1]==4||pnum[2]==4||pnum[3]==4||pnum[5]==4||pnum[6]==4) return "四进";
      else if(pnum[4]==2) return "二举";
      else if(pnum[4]==1) return "一秀";
      else return "无级别";
    }
//结果判断函数，用于根据掷骰结果判断级别
