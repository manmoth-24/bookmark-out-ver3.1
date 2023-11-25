let default_links = [
    {name: "UnityAssetStore", link: "https://assetstore.unity.com/?category=3d&orderBy=4", emp: true},
    {name: "UnityLern_Junior", link: "https://learn.unity.com/mission/programming-simple-functionality?pathwayId=5f7e17e1edbc2a5ec21a20af"},
    {name: "html辞典", link: "https://html-coding.co.jp/annex/dictionary/html/"},
    {name: "css辞典", link: "https://html-coding.co.jp/annex/dictionary/css/"},
    {name: "github-manmoth", link: "https://github.com/manmoth-24"},
    {name: "マイクラログイン", link: "https://aka.ms/remoteconnect", emp: true},
    {name: "マイクラスキン作成", link: "https://minecraft.novaskin.me/"}
];

const makeList = (emp,name,link,linkName) =>{
    if(emp){
        return `<tr><td class="Kyotyo"> ${name} </td><td><a href=" ${link}" target="_blank" class="Kyotyoa"> ${linkName} </a></td></tr>`
    }else{
        return `<tr><td> ${name} </td><td><a href=" ${link}" target="_blank"> ${linkName} </a></td></tr>`
    }
}

//実行内容
document.writeln('<table border="1" align="center">');
default_links.forEach((list) =>{
    if(list.link.length < 50){
        //makeList関数が必要になります
        document.writeln(makeList(list.Emp,list.name,list.link,list.link));
    }else{
        document.writeln(makeList(list.Emp,list.name,list.link,list.name));
    }
});
document.writeln("</table>");

