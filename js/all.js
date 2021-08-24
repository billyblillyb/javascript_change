var country = [
    {
        farmer: '查理斯 查理爾 查理傑',
        place: '前鎮區'
    },
    {
        farmer: ['卡斯伯', '允兒', '孝淵'],
        place: '苓雅區'
    }
    ,{
        farmer: '小花',
        place: '苓雅區'
    }
    ,{
        farmer: ['大花', '二牛'],
        place: '苓雅區'
    }
    ,{
        farmer: '蚵仔 帶子 帆立貝',
        place: '海鮮區'
    }
]

var selectedCountry = document.getElementById('areaId');
var farmerList = document.querySelector('.list');
var countryTotal = country.length;
var farmerTotal = [];

//整理農夫數據，統一成陣列，再計算每個農場有多少個農夫
for (let i = 0; i < countryTotal; i++) {
    if (Array.isArray(country[i].farmer) == false) {
        country[i].farmer = country[i].farmer.split(" ");
    }
    farmerTotal[i] = country[i].farmer.length;
}

//如果地區的選擇有改動
selectedCountry.addEventListener('change', updateList,false);

function updateList(e) {
    //生成一個將要加入UL，帶有與用戶選擇地區一樣的農夫列表
    var str = document.createElement('li');
    for (let j = 0; j < countryTotal; j++) { 
        //如果用戶選擇的地區與農場所在地一樣，才會執行下一步
        if (e.target.value == country[j].place) {  
            //利用上方已計算好的各個農場的農夫數量，依次把農夫名字加入列表              
           for (let k = 0; k < farmerTotal[j]; k++) {
               //如果為列表第一個農夫，會連帶開場的句子，反之不會
                if (str.textContent == "") {
                    str.textContent +=  selectedCountry.value + "的農夫有：" + country[j].farmer[k];  
                } else {
                    str.textContent +=  "、" + country[j].farmer[k];  
                }                                  
            }             
        }  
    };
    //正式把農夫農表的元素與UL連在一起
    farmerList.appendChild(str);
};