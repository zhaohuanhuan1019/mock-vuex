var Mock = require('mockjs')
/*var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))*/

// 1. 属性值是字符串 String

	/*1.'name|min-max': string

	通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。*/
	//随机生成几个字符串的属性值eg:
		/*var data = Mock.mock({
		    'list|1-10': '张三'
		})
		// 输出结果
		console.log(JSON.stringify(data, null, 4))*/

	/*2.'name|count': string

	通过重复 string 生成一个字符串，重复次数等于 count。*/
	//生成5个张三的字符串作为属性值eg:
		/*var data = Mock.mock({
		    'list|5': '张三'
		})
		// 输出结果
		console.log(JSON.stringify(data, null, 4))*/

//2. 属性值是数字 Number

	/*1.'name|+1': number

	属性值自动加 1，初始值为 number。*/
	//eg
		/*var data = Mock.mock({
		    'list|+1': 0
		})
		// 输出结果
		console.log(JSON.stringify(data, null, 4))*/

	/*2.'name|min-max': number

	生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。*/
	//随即生成在1-10属性值eg
		/*var data = Mock.mock({
		    'list|1-10': 0
		})
		// 输出结果
		console.log(JSON.stringify(data, null, 4))*/

	/*3.'name|min-max.dmin-dmax': number

	生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。*/
	//随机生成浮点数eg
		/*var data = Mock.mock({
		    'list|1-10.2-3': 0
		})
		// 输出结果
		console.log(JSON.stringify(data, null, 4))*/

	/*var data =Mock.mock(
		{
		    'number1|1-100.1-10': 1,
		    'number2|123.1-10': 1,
		    'number3|123.3': 1,
		    'number4|123.10': 1.123,
		}
	)
	console.log(JSON.stringify(data, null, 4))*/


//3. 属性值是布尔型 Boolean

	/*1.'name|1': boolean

	随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。*/
	//eg
		/*var data = Mock.mock({
		    'list|1': true
		})
		// 输出结果
		console.log(JSON.stringify(data, null, 4))*/

	/*2.'name|min-max': value

	随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。*/
	//随即生成概率为1/5值为true   eg
		/*var data = Mock.mock({
		    'list|1-5': true
		})
		// 输出结果
		console.log(JSON.stringify(data, null, 4))*/



//4. 属性值是对象 Object

	/*1.'name|count': object

	从属性值 object 中随机选取 count 个属性。*/
		//eg
			/*var data = Mock.mock({
			    'list|2': {name:'jack',age:28,color:'yellow',ege:'blank'}
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/

	/*2.'name|min-max': object

	从属性值 object 中随机选取 min 到 max 个属性。*/
		//eg
			/*var data = Mock.mock({
			    'list|1-2': {name:'jack',age:28,color:'yellow',ege:'blank'}
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/



//5. 属性值是数组 Array

	/*1.'name|1': array

	从属性值 array 中随机选取 1 个元素，作为最终值。*/
		//eg
			/*var data = Mock.mock({
			    'list|1': ['范冰冰','杨幂','baby','迪丽热巴','郑爽']
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/

	/*2.'name|+1': array

	从属性值 array 中顺序选取 1 个元素，作为最终值。*/
		//eg
			/*var data = Mock.mock({
			    'list|+1': ['鹿晗','邓超','郑恺','王祖蓝','林更新']
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/

	/*3.'name|min-max': array

	通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。*/
		//eg
			/*var data = Mock.mock({
			    'list|1-5': ['范冰冰','杨幂','baby','迪丽热巴','郑爽']
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/

	/*4.'name|count': array

	通过重复属性值 array 生成一个新数组，重复次数为 count。*/
		//eg
			/*var data = Mock.mock({
			    'list|2': ['范冰冰','杨幂','baby','迪丽热巴','郑爽']
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/



//6. 属性值是函数 Function

	/*1.'name': function

	执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。*/
		//eg
			/*var data = Mock.mock({
			    'list': function test(){
			    			return 25
			    		}
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/

//7. 属性值是正则表达式 RegExp

	/*1.'name': regexp

	根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。*/
		//eg
			/*var data = Mock.mock({
			    'list': /[a-z][A-Z][0-9]/
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/

		/*Mock.mock({
		    'regexp1': /[a-z][A-Z][0-9]/,
		    'regexp2': /\w\W\s\S\d\D/,
		    'regexp3': /\d{5,10}/
		})
		// =>
		{
		    "regexp1": "pJ7",
		    "regexp2": "F)\fp1G",
		    "regexp3": "561659409"
		}*/


//数据占位符
//注意：
/*
	用 @ 来标识其后的字符串是 占位符。
	占位符 引用的是 Mock.Random 中的方法。
	通过 Mock.Random.extend() 来扩展自定义占位符。
	占位符 也可以引用 数据模板 中的属性。
	占位符 会优先引用 数据模板 中的属性。
	占位符 支持 相对路径 和 绝对路径。
*/
			/*var data = Mock.mock({
			    'list': {
					        first: '@FIRST',
					        middle: '@FIRST',
					        last: '@LAST',
					        full: '@FIRST @FIRST @FIRST'
					    }
			})
			// 输出结果
			console.log(JSON.stringify(data, null, 4))*/




//Mock.Random
	var Random = Mock.Random
	var emile = Random.email();
	console.log(emile)
	
	var data= Mock.mock('@email')
	console.log(data)

	var emile2=Mock.mock( { email: '@email' } )
	console.log(emile2)



			