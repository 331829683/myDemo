//导航点击脚本
let lis = $('#navbtn li')
lis.click(function () {
	lis.removeClass('active')
	$(this).addClass('active')
	let toName = '#' + $(this).children('a')[0].href.split('#')[1]
	let toDom = $(toName)
	let top = toDom.offset().top
	$('#collapse').attr('aria-expanded', false)
	$('#collapse').addClass('collapsed')
	$('#navbar').attr('aria-expanded', false)
	$('#navbar').removeClass('in')
	$('html,body').animate({ scrollTop: top - 70 }, 500)
})

//点击上传
$('#filebutton').click(function () {
	$('#browsefile').click()
})
$('#browsefile').change(function () {
	var name = this.files[0].name
	$('#filetitle').html(name)
})
// 表单验证
$('#form').bootstrapValidator({
	live: 'disabled', //验证时机，enabled是内容有变化就验证（默认），disabled和submitted是提交再验证
	excluded: [':disabled', ':hidden', ':not(:visible)'], //排除无需验证的控件，比如被禁用的或者被隐藏的
	submitButtons: '#sub', //指定提交按钮，如果验证失败则变成disabled，但我没试成功，反而加了这句话非submit按钮也会提交到action指定页面
	message: '通用的验证失败消息', //好像从来没出现过
	feedbackIcons: {
		//根据验证结果显示的各种图标
		valid: 'glyphicon glyphicon-ok',
		invalid: 'glyphicon glyphicon-remove',
		validating: 'glyphicon glyphicon-refresh'
	},
	fields: {
		user_name: {
			validators: {
				notEmpty: {
					message: 'Name can not be empty'
				}
			}
		},
		user_email: {
			validators: {
				notEmpty: {
					message: 'Email can not be empty'
				},
				emailAddress: {
					message: 'The email address is incorrect'
				}
			}
		},
		user_phone: {
			validators: {
				notEmpty: {
					message: 'Phone can not be empty'
				}
			}
		},
		user_address: {
			validators: {
				notEmpty: {
					message: 'Suburb can not be empty'
				}
			}
		},
		user_subject: {
			validators: {
				notEmpty: {
					message: 'Please select the best description for your request.'
				}
			}
		},
		user_desc: {
			validators: {
				notEmpty: {
					message: 'Describe Your Project can not be empty'
				}
			}
		}
	}
})
$('#sub').click(function () {
	//非submit按钮点击后进行验证，如果是submit则无需此句直接验证
	$('#form').bootstrapValidator('validate') //提交验证
	if ($('#form').data('bootstrapValidator').isValid()) {
		//获取验证结果，如果成功，执行下面代码
		alert('yes') //验证成功后的操作，如ajax
	}
})
