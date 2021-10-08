let returning=$('#返回');
    returning.click(()=>{       
        location.href="main.html";
    });
    //绑定返回按钮的点击返回主页面事件
    let sure=$('#确定');
    let playernum=0;
    //绑定确认按钮的点击提交数据事件
    sure.click(()=>{
        let p1=$('input#first').val();
        let p2=$('input#second').val();
        let p3=$('input#third').val();
        let p4=$('input#fourth').val();
        //获得四个输入框的输入值
        let isNoInput = (value) => {
	return String(value).replace(/(^\s*)|(\s*$)/g, '') === ''
    }
    //确认输入框是否无输入的方法
        if(!isNoInput($('input#first').val()))
    {
        if (localStorage.p1name) {
            localStorage.p1name =p1;
        } 
        else localStorage.setItem("p1name",p1);
        playernum++;
    }
        if(!isNoInput($('input#second').val()))
    {
        if (localStorage.p2name) {
            localStorage.p2name =p2;
        } 
        else localStorage.setItem("p2name",p2);
        playernum++;
    }
        if(!isNoInput($('input#third').val()))
    {
        if (localStorage.p3name) {
            localStorage.p3name =p3;
        } 
        else localStorage.setItem("p3name",p3);
        playernum++;
    }
        if(!isNoInput($('input#fourth').val()))
    {
        if (localStorage.p4name) {
            localStorage.p4name =p4;
        } 
        else localStorage.setItem("p4name",p4);
        playernum++;
    }    
    //每输入一个玩家名（输入框不为空），将玩家名存入Localstorage（如果有则改写，没有则新建），且玩家数+1；
        if (localStorage.playernum) {
            localStorage.playernum =playernum;
        } 
        else localStorage.setItem("playernum",playernum);
        //将玩家数存入Localstorage（如果有则改写，没有则新建）
        location.href="game.html";
        //跳转到游戏页面
     });
