    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/medicines.php?id=3",
        // data: "data",
        dataType: "json",
        success: function (data) {
			debugger;
            let str = "";
            // data.forEach(function(ele,index){
                str += `
				<div class="right-content">
					<h3>${data.title}</h3>
					<img src="../images/白芷.jpg" alt="">
					<ul class="right_item">
						<li>
							<span>别名：</span>
							${data.name}
						</li>
						<li>
							<span>来源：</span>
							${data.origins}
						</li>
						<li>
							<span>产地：</span>
							${data.areas}
						</li>
						<li>
							<span>性味归经:</span>
                            ${data.tonad}
						</li>
						<br>
						<li>
							<span>作用功效：</span>
							${data.effects}
						</li>
					</ul>
				</div>

				<div class="left-content">
					<ul class="left_item">
						<li>
						
							<span>药材形态:</span>
                            ${data.shape}
						</li>
						<li>
						<span>使用方法：</span>
                        ${data.methods}
						</li>
						<li>
							<span>使用注意：</span>
                            ${data.careful}
						</li>
						<li>
							<span>日常食用：</span>
							${data.edible}
						</li>
					</ul>
				</div>
                `
            // });
            $('.main-content').html(str);
        },
        error:function(err){
            console.log(err);
        }
    });











// new Vue({
//     el:"#app",
//     data:{
//         menu_list:[{
//             id:1,
//         	title:"解表药",
// 			list:[{
//         		menu_title:"发散风寒药",
// 				menus:["白芷", "葱白", "防风", "藁(gao)本", "桂枝", "荆芥", "麻黄", "羌活", "生姜", "香蒂（ru)", "细辛", "辛夷", "芫菱(yan sui)", "紫苏"]
// 			},{
//                 menu_title:"发散风热药",
//                 menus:["薄荷", "柴胡", "蝉蜕(tui)", "豆豉(chi)", "豆卷", "浮萍", "葛根", "菊花", "蔓荆子", "木贼草", "牛蒡子", "升麻", "水蜈蚣", "桑叶","天胡菱(sui)", "西河柳"]
// 			}]
// 		},{
//             id:2,
//         	title:"清热药",
// 			list:[{
//                 menu_title: '清热泻火药',
//                 menus: ["淡竹叶", "寒水石", "荷叶", "芦根", "莲子心", "石膏", "天花粉", "西瓜皮", "夏枯草", "鲜竹叶", "鸭拓草", "知母", "栀子"]
// 			},{
//                 menu_title: '清肝明目药',
//                 menus: ["谷精草", "决明子", "密蒙花", "千里光", "青箱子", "夜明砂"]
// 			},{
//                 menu_title: '清热凉血药',
//                 menus: ["板蓝根", "赤勺药", "大青叶", "牡丹皮", "茅根", "茅针花", "牛黄", "青黛", "玄参", "鲜生地(附生地)", "犀角", "紫草"]
// 			},{
//                 menu_title: '清热解毒药',
//                 menus: ["白花蛇舌草", "败酱草", "白蔹", "白毛夏枯草", "白头翁"]
// 			},{
//                 menu_title: '清热燥湿药',
//                 menus: ["白藓皮", "黄柏", "胡黄连", "黄连", "黄芪", "苦参", "龙胆草", "秦皮"]
// 			},{
//                 menu_title: '清虚热药',
//                 menus: ["白薇", "地骨皮", "青蒿(hao)", "银柴胡"]
// 			}]
// 		}]
//     }
// })