let beginningGetAnimationIds = [
    "site-explanation-beginning"
]

function sleep(waitMsec) {
    var startMsec = new Date();
  
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  }

function clickTest(id) {
    target = document.getElementById(id);
    if (target.className == null || target.className=="") {
      target.className = "active";
    } else {
      target.className = "";
    }
}

const beginFirstAnimation = ()=>{
    beginningGetAnimationIds.forEach((usingId) =>{
        clickTest(usingId)
    })
}

setTimeout('beginFirstAnimation();', 100);