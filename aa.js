document.write("<p class=\"almost\">password:<p>");
function change(input){
    var tmp=""
    
}
function ButtonPress() {
    var value = document.getElementById("input").value;
    if (value != 'ЯпзНЂϩЩътгЪсϪЊФГЧЯЯϪϼИфрϯ') {
        alert('wrong!');
        window.opener = null;
        window.open('', '_self'); window.close();
    }
    else {
        var tmp = document.getElementsByClassName("almost");
        for (var i=0;i<=tmp.length;i++){
            tmp[i].remove();
        document.getElementById('input').remove()
        document.getElementById('button').remove()
        var string='<div class="almost"><p>周沈诺:</p><p></p><p>    你好!</p><p>    我很高兴我终于得到了一个机会，能够与你分享我的心声，尽管这对我来说是非常艰难的。但我相信，只有勇敢地面对自己的内心，才能找到真正的快乐和满足。</p><p>    首先，我想告诉你，我很喜欢你。我们是好朋友，但我认为我对你的情感已经超出了这个范畴。在我心中，你是一个非常特别的人，无论是你的外表、气质还是性格，都让我感到十分倾心。每次看到你，我都会感到心跳加速，甚至有点手足无措语无伦次。</p><p>    我一直都对你怀有深深的感情，也一直在默默关注着你的一举一动。在我暗恋你的这段时间里，我发现我和你之间似乎有一种特殊的联系和默契，让我们可以用更多的方式来相互交流和理解。</p><p>我喜欢你！我们在一起吧！</p><p>    现在，我希望你能够认真考虑一下，如果你也有同样的感觉，那么请给我一个机会来表达我的情感和渴望!如果你不这样想，我也会尊重你的决定，并且希望能继续与你保持友谊。</p><p>    最后，我想再次向你表达我的感情。无论你的决定是什么，我都会珍惜我们之间的友谊，希望我们可以共同度过快乐而美好的每一天。</p><p></p></div><div style="text-align:right" class="almost"><p>祝好</p><p>许嘉乐</p><p>2023年4月30日</p></div>';
        document.write("<style>\n    .almost {\n        font-size: 150%;\n        font-family: '仿宋';\n    }\n</style>")
        document.write(string)
        
        
        }
    }
}
