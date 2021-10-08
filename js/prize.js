    let firstprize=["","",""];
    let secondprize=["","",""];
    let thirdprize=["","",""];
    let fourthprize=["","",""];
    let fifthprize=["","",""];
    let returning=$('#返回');
    returning.click(()=>{
        location.href="main.html";
     //绑定返回按钮的点击返回主页面事件
    });
    let sure=$('#确定');
    //确认输入框是否无输入的方法
    let isNoInput = (value) => {
	return String(value).replace(/(^\s*)|(\s*$)/g, '') === '';
    }
    //绑定确认按钮的点击提交数据事件
    sure.click(()=>{
        if(!isNoInput($('[name=firstprize]').val()))
    {
        firstprize[0]=$('[name=firstprize]').val();
        firstprize[1]=$('[name=firstclass]').val();
        firstprize[2]=$('[name=firstcontent]').val();
        console.log(firstprize[0]);
        console.log(firstprize[1]);
        console.log(firstprize[2]);
        if (localStorage.prize1) {
            localStorage.prize1 =firstprize[0];
        } 
        else localStorage.setItem("prize1",firstprize[0]);
        if (localStorage.prizeclass1) {
            localStorage.prizeclass1 =firstprize[1];
        } 
        else localStorage.setItem("prizeclass1",firstprize[1]);  
    }
        if(!isNoInput($('[name=secondprize]').val()))
    {
        secondprize[0]=$('[name=secondprize]').val();
        secondprize[1]=$('[name=secondclass]').val();
        secondprize[2]=$('[name=secondcontent]').val();
        if (localStorage.prize2) {
            localStorage.prize2 =secondprize[0];
        } 
        else localStorage.setItem("prize2",secondprize[0]);
        if (localStorage.prizeclass2) {
            localStorage.prizeclass2 =secondprize[1];
        } 
        else localStorage.setItem("prizeclass2",secondprize[1]);  
       
    }    

        if(!isNoInput($('[name=thirdprize]').val()))
    {
        thirdprize[0]=$('[name=thirdprize]').val();
        thirdprize[1]=$('[name=thirdclass]').val();
        thirdprize[2]=$('[name=thirdcontent]').val();
        if (localStorage.prize3) {
            localStorage.prize3 =thirdprize[0];
        } 
        else localStorage.setItem("prize3",thirdprize[0]);
        if (localStorage.prizeclass3) {
            localStorage.prizeclass3 =thirdprize[1];
        } 
        else localStorage.setItem("prizeclass3",thirdprize[1]);  
    }   

        if(!isNoInput($('[name=fourthprize]').val()))
    {
        fourthprize[0]=$('[name=fourthprize]').val();
        fourthprize[1]=$('[name=fourthclass]').val();
        fourthprize[2]=$('[name=fourthcontent]').val();
        if (localStorage.prize4) {
            localStorage.prize4 =fourthprize[0];
        } 
        else localStorage.setItem("prize4",fourthprize[0]);
        if (localStorage.prizeclass4) {
            localStorage.prizeclass4 =fourthprize[1];
        } 
        else localStorage.setItem("prizeclass4",fourthprize[1]); 
        
    }
        if(!isNoInput($('[name=fifthprize]').val()))
    {
        fifthprize[0]=$('[name=fifthprize]').val();
        fifthprize[1]=$('[name=fifthclass]').val();
        fifthprize[2]=$('[name=fifthcontent]').val();
        if (localStorage.prize5) {
            localStorage.prize5 =fifthprize[0];
        } 
        else localStorage.setItem("prize5",fifthprize[0]);
        if (localStorage.prizeclass5) {
            localStorage.prizeclass5 =fifthprize[1];
        } 
        else localStorage.setItem("prizeclass5",fifthprize[1]); 
        
    }
    //每输入一个奖品级别（输入框不为空），将奖品级别和其对应等级存入Localstorage（如果有则改写，没有则新建）；
    location.href="main.html";
    //设置奖品信息后跳转回开始页面
 });
