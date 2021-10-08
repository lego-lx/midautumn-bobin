$(function () {
    let playernum=localStorage.getItem("playernum");
    let p1=localStorage.getItem("p1name");
    let p2=localStorage.getItem("p2name");
    let p3=localStorage.getItem("p3name");
    let p4=localStorage.getItem("p4name");
    let p1class=localStorage.getItem("p1class");
    let p2class=localStorage.getItem("p2class");
    let p3class=localStorage.getItem("p3class");
    let p4class=localStorage.getItem("p4class");
    let p1result=localStorage.getItem("p1result");
    let p2result=localStorage.getItem("p2result");
    let p3result=localStorage.getItem("p3result");
    let p4result=localStorage.getItem("p4result");
    let prize=[["","",""],["","",""],["","",""],["","",""],["","",""]];
    prize[0][0]=localStorage.getItem("prize1");
    prize[0][1]=localStorage.getItem("prizeclass1");
    prize[1][0]=localStorage.getItem("prize2");
    prize[1][1]=localStorage.getItem("prizeclass2");
    prize[2][0]=localStorage.getItem("prize3");
    prize[2][1]=localStorage.getItem("prizeclass3");
    prize[3][0]=localStorage.getItem("prize4");
    prize[3][1]=localStorage.getItem("prizeclass4");
    prize[4][0]=localStorage.getItem("prize5");
    prize[4][1]=localStorage.getItem("prizeclass5");
    //从localstorage中读取玩家名及对应掷骰结果和等级，奖品级别和对应等级以及总玩家数
    let prizeclass1="无奖品";
    let prizeclass2="无奖品";
    let prizeclass3="无奖品";
    let prizeclass4="无奖品";
    //设置玩家默认奖品（玩家等级不满足任何奖品对应等级时）
    for(let i=0;i<5;i++)
    { 
      if(p1class==prize[i][1]) prizeclass1=prize[i][0];
    }
    for(let i=0;i<5;i++)
    {
      if(p2class==prize[i][1]) prizeclass2=prize[i][0];
    }
    for(let i=0;i<5;i++)
    {
      if(p3class==prize[i][1]) prizeclass3=prize[i][0];
    }
    for(let i=0;i<5;i++)
    {
      if(p4class==prize[i][1]) prizeclass4=prize[i][0];
    }
    //按序查找每个玩家等级是否匹配奖品对应等级，并设置玩家对应奖品
        if( playernum>=1)
       {
        $('#p1name').text(p1);
        $('#p1class').text(p1class);
        $('#prizeclass1').text(prizeclass1);
        $('#p1result').html(p1result);
       }
        if( playernum>=2)
       {
        $('#p2name').text(p2);
        $('#p2class').text(p2class);
        $('#prizeclass2').text(prizeclass2);
        $('#p2result').html(p2result);
       }
        if( playernum>=3)
       {
        $('#p3name').text(p3);
        $('#p3class').text(p3class);
        $('#prizeclass3').text(prizeclass3);
        $('#p3result').html(p3result);
       }
      if( playernum>=4)
       { $('#p4name').text(p4);
        $('#p4class').text(p4class);
        $('#prizeclass4').text(prizeclass4);
        $('#p4result').html(p4result);
      }
      //根据玩家数决定是否修改对应玩家的结果栏（如果对应栏没有玩家则不修改，有的话则修改节点显示结果）
        let returning=$('#确定');
        returning.click(()=>{     
        localStorage.clear();  
        location.href="main.html";
        //游戏结束，跳转回开始页面并清空Localstorage
    });
    })