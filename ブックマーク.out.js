let password = '0001';
let maxlocalStrageLength = '10000'
//sitsとsite_namesそれぞれリンクしていて、sitsの一つ目がURLでsite_namesの一つ目は表示になっています


let important_links = [
    {name: "Scratch", link: "https://scratch.mit.edu/mystuff/"},
    {name: "youtube", link: "https://www.youtube.com/"},
    {name: "Google翻訳", link: "https://translate.google.com/?sl=ja&tl=en&text=%E7%BF%BB%E8%A8%B3&op=translate"},
    {name: "Google図形描画", link: "https://docs.google.com/drawings/?hl=ja"},
    {name: "電卓", link: "https://www.desmos.com/scientific?lang=ja"},
]

let linksWithKey = [
    {name: "Lineうんこぉなスタンプ", link: "https://store.line.me/stickershop/product/20393337/ja", key: ["Line","stump","ライン","スタンプ","ウンコ","うんこ"]},
    {name: "JsDocument.getElementById", link:"https://developer.mozilla.org/ja/docs/Web/API/Document/getElementById", key: ["js","JS","document","getElementById","id"]},
    {name: "3D背景/ポリヘブン", link: "https://polyhaven.com/",key: ["Blender","ポリヘブン","Poly","3D","blender"]},
    {name: "3Dマテリアル/アンビエントCG", link: "https://ambientcg.com/", key: ["Blender","3D","CG","マテリアル","blender"]},
    {name: "2023/10/27 ToLikeMusic", link: "https://www.youtube.com/watch?v=M39eT_tbtjI&list=RDM39eT_tbtjI&start_radio=1", key: ["Youtube", "Music", "youtube", "music", "2023"]},
    {name: "なぞときらぼ", link: "https://www.youtube.com/@nazotokilab", key: ["Youtube", "youtube", "Math", "数学"]},
    {name: "chatGPT", link: "https://openai.com/product/gpt-4", key: ["OpenAi", "AI", "ChatGpt", "chatGPT", "chatgpt"]},
    {name: "性格診断テスト", link: "https://www.16personalities.com/ja/%E6%80%A7%E6%A0%BC%E8%A8%BA%E6%96%AD%E3%83%86%E3%82%B9%E3%83%88", key: ["16personalities","性格","占い","診断"]},
    {name: "css positionについて", link: "https://webst8.com/blog/css-position/", key: ["css", "position", "stylesheet", "topbottomrightleft位置関係"]},
    {name: "よせなべちゃんねる", link: "https://www.youtube.com/@bandai_y", key: ["よせなべちゃんねる", "Youtube", "minecraftmod"]},
    {name: "Optifine", link: "https://optifine.net/downloads", key: ["optifine", "オプティファイン", "minecraftmod"]},
    {name: "CutAll", link: "https://www.curseforge.com/minecraft/mc-mods/break-all-of-the-same-block-and-more/files/2740435", key: ["CutAll", "カットオール", "minecraftmod", "一括破壊"]},
    {name: "MineAll", link: "https://www.curseforge.com/minecraft/mc-mods/break-all-of-the-same-block-and-more/files/2850631", key: ["DigAll", "ディグオール", "minecraftmod", "一括破壊"]},
]





let search = document.querySelector(`input[id='search']`);

const makeList = (emp,name,link,linkName) =>{
    if(emp){
        return `<tr><td class="Imp-name"> ${name} </td><td><a href=" ${link}" target="_blank" class="imp-link"> ${linkName} </a></td></tr>`
    }else{
        return `<tr><td> ${name} </td><td><a href=" ${link}" target="_blank"> ${linkName} </a></td></tr>`
    }
}

//最初から出ているサイト
const DisplayImportantLinks = (displayLink)=>{
    document.writeln('<table border="1" align="center">');
    displayLink.forEach((list) =>{
    if(list.link.length < 50){
        document.writeln(makeList(list.Emp,list.name,list.link,list.link));
    }else{
        document.writeln(makeList(list.Emp,list.name,list.link,list.name));
    }
});
    document.writeln("</table>");
}

const SerchLinksByKey = (importKey, mode) =>{
    let displayLinks = []
    linksWithKey.forEach((link) =>{
        link.key.forEach((key) =>{
            if (mode == 0){
                if (importKey == key){
                    displayLinks.push(link)
                }
            }else if(mode == 1){
                if (key.includes(importKey)){
                    displayLinks.push(link)
                }
            }
        })
    })
    if (importKey == "all"){
        displayLinks = linksWithKey
    }
    DisplayImportantLinks(displayLinks)
}

const InputKeyRunSerch = ()=>{
    let inputKey = document.getElementById("password-input-text").value
    document.writeln('<link rel="stylesheet" href="ブックマーク.out.css"><h1>サーチ.Asult</h1>')
    SerchLinksByKey(inputKey, 0)

    document.writeln('<h1>二アーサーチ.Asult</h1>')
    SerchLinksByKey(inputKey, 1)
}

DisplayImportantLinks(important_links);

document.addEventListener('keydown', keypress_ivent);

function keypress_ivent(e) {
	if(e.code === 'Enter'){
        if (document.getElementById("password-input-text").value != ""){
            InputKeyRunSerch()
        }
	}
	return false; 
}

//保存用
const ClearStrage = ()=>{
    localStorage.clear("Names")
    console.log("M:clear完了！")
}

const ImportKeyNames = ()=>{
    var namesList = localStorage.getItem("Names")
    if (namesList != null){
        return namesList.split(',');
    }
    return namesList
}

const ImportBlockFromName = (name)=>{
    var link = localStorage.getItem(name + "-link")
    var key = localStorage.getItem(name + "-key")
    key = key.split(',');
    var block = {name: name,link: link,key: key}
    return block
}

const SaveToLocalStrage = (block)=>{
    var name = block.name
    var link = block.link
    var key = block.key
    var namesInLocalStrage = localStorage.getItem("Names")
    if (namesInLocalStrage == null){
        localStorage.setItem("Names", name)
    }else{
        localStorage.setItem("Names", namesInLocalStrage + ',' + name)
    }
    localStorage.setItem(name + "-link", link)
    localStorage.setItem(name + "-key", key)
    console.log("M:登録完了")
    console.log(`Information:${name + link + key}`)

}

const GetElementForSave = ()=>{
    var newName = document.getElementById("set-new-name").value
    var newLink = document.getElementById("set-new-link").value
    var newKey = document.getElementById("new-keys").value.split(',')
    console.log({name: newName, link: newLink, key: newKey})
    SaveToLocalStrage({name: newName, link: newLink, key: newKey})
}

//既定のローカルストレージの容量（自己設定）を超えるとfalseを出力します
const CountAllLocalStrage = ()=>{
    if (localStorage.length > maxlocalStrageLength){
        console.log("M:localStrageの容量（自己設定）を超えました。削除する場合はConsoleからDeleteIndex('削除する名前')を入力してください。")
        alert("localStrageの容量（自己設定）を超えました。削除する場合はConsoleからDeleteIndex('削除する名前')を入力してください。")
        return false
    }
    return true
}

//ここ最初に稼働しますよ！！
//import localStrage and add list
var importNames = ImportKeyNames()
if (importNames != null){
    importNames.forEach((blockName) =>{
        if (blockName != null){
            linksWithKey.push(ImportBlockFromName(blockName))
        }
    })
}

