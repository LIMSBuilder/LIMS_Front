import iziToast from 'mod/iziToast'
import 'mod/iziModal'

var BlogUtils = {
    utf16to8: function (str) {
        var out, i, len, c;
        out = "";
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            } else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            } else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    },
    pulsate: function (id) {
        jQuery("#" + id).pulsate({
            color: "#bf1c56",
            glow: true,
            repeat: 5,
        });
    },
    atoc: function (numberValue) {
        var numberValue = new String(Math.round(numberValue * 100)); // 数字金额
        var chineseValue = ""; // 转换后的汉字金额
        var String1 = "零壹贰叁肆伍陆柒捌玖"; // 汉字数字
        var String2 = "万仟佰拾亿仟佰拾万仟佰拾元角分"; // 对应单位
        var len = numberValue.length; // numberValue 的字符串长度
        var Ch1; // 数字的汉语读法
        var Ch2; // 数字位的汉字读法
        var nZero = 0; // 用来计算连续的零值的个数
        var String3; // 指定位置的数值
        if (len > 15) {
            alert("超出计算范围");
            return "";
        }
        if (numberValue == 0) {
            chineseValue = "零元整";
            return chineseValue;
        }
        String2 = String2.substr(String2.length - len, len); // 取出对应位数的STRING2的值
        for (var i = 0; i < len; i++) {
            String3 = parseInt(numberValue.substr(i, 1), 10); // 取出需转换的某一位的值
            if (i != (len - 3) && i != (len - 7) && i != (len - 11) && i != (len - 15)) {
                if (String3 == 0) {
                    Ch1 = "";
                    Ch2 = "";
                    nZero = nZero + 1;
                }
                else if (String3 != 0 && nZero != 0) {
                    Ch1 = "零" + String1.substr(String3, 1);
                    Ch2 = String2.substr(i, 1);
                    nZero = 0;
                }
                else {
                    Ch1 = String1.substr(String3, 1);
                    Ch2 = String2.substr(i, 1);
                    nZero = 0;
                }
            }
            else { // 该位是万亿，亿，万，元位等关键位
                if (String3 != 0 && nZero != 0) {
                    Ch1 = "零" + String1.substr(String3, 1);
                    Ch2 = String2.substr(i, 1);
                    nZero = 0;
                }
                else if (String3 != 0 && nZero == 0) {
                    Ch1 = String1.substr(String3, 1);
                    Ch2 = String2.substr(i, 1);
                    nZero = 0;
                }
                else if (String3 == 0 && nZero >= 3) {
                    Ch1 = "";
                    Ch2 = "";
                    nZero = nZero + 1;
                }
                else {
                    Ch1 = "";
                    Ch2 = String2.substr(i, 1);
                    nZero = nZero + 1;
                }
                if (i == (len - 11) || i == (len - 3)) { // 如果该位是亿位或元位，则必须写上
                    Ch2 = String2.substr(i, 1);
                }
            }
            chineseValue = chineseValue + Ch1 + Ch2;
        }
        if (String3 == 0) { // 最后一位（分）为0时，加上“整”
            chineseValue = chineseValue + "整";
        }
        return chineseValue;
    },
    copyTextToClipboard(text){
        var textArea = document.createElement("textarea");

        //
        // *** This styling is an extra step which is likely not required. ***
        //
        // Why is it here? To ensure:
        // 1. the element is able to have focus and selection.
        // 2. if element was to flash render it has minimal visual impact.
        // 3. less flakyness with selection and copying which **might** occur if
        //    the textarea element is not visible.
        //
        // The likelihood is the element won't even render, not even a flash,
        // so some of these are just precautions. However in IE the element
        // is visible whilst the popup box asking the user for permission for
        // the web page to copy to the clipboard.
        //

        // Place in top-left corner of screen regardless of scroll position.
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;

        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textArea.style.width = '2em';
        textArea.style.height = '2em';

        // We don't need padding, reducing the size if it does flash render.
        textArea.style.padding = 0;

        // Clean up any borders.
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';

        // Avoid flash of white box if rendered for any reason.
        textArea.style.background = 'transparent';


        textArea.value = text;

        document.body.appendChild(textArea);

        textArea.select();

        try {
            var successful = document.execCommand('copy');
            return successful;
        } catch (err) {
            // console.log('Oops, unable to copy');
            return false;
        }
        document.body.removeChild(textArea);
    },
    formValid(form, rules, messages){
        //var form1 = $('#department_add');
        if (!rules) rules = {};
        if (!messages) messages = {};
        var error1 = $('.alert-danger', form);
        form.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "", // validate all fields including form hidden input
            messages: messages,
            rules: rules,
            invalidHandler: function (event, validator) { //display error alert on form submit
                error1.show();
                App.scrollTo(error1, -200);
            },
            errorPlacement: function (error, element) {
                if (element.is(':checkbox')) {
                    error.insertAfter(element.closest(".md-checkbox-list, .md-checkbox-inline, .checkbox-list, .checkbox-inline"));
                } else if (element.is(':radio')) {
                    error.insertAfter(element.closest(".md-radio-list, .md-radio-inline, .radio-list,.radio-inline"));
                } else {
                    error.insertAfter(element); // for other inputs, just perform default behavior
                }
            },
            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },
            submitHandler: function (form) {
                error1.hide();
            }
        });
    },
    selectAll(name, handle){
        handle.off("click").on("click", function () {
            var oCheckBox = jQuery("[type=checkbox][name=" + name + "]");
            for (var i = 0; i < oCheckBox.length; i++) {
                jQuery(oCheckBox[i]).prop("checked", !jQuery(oCheckBox[i]).prop("checked"));
            }
            //jQuery("[type=checkbox][name=" + name + "]").prop("checked", true);
        });
    },
    getSelect(name){
        var oCheckBox = jQuery("[type=checkbox][name=" + name + "]:checked");
        var temp = [];
        for (var i = 0; i < oCheckBox.length; i++) {
            temp.push(oCheckBox[i].value);
        }
        console.log(temp);
        return temp;
    }
};
var rowCount = window.rowCount = localStorage.getItem("rowCount") || 10;
window.alert = function (content) {
    iziToast.success({
        title: '通知',
        message: content,
        position: 'topRight',
        progressBarColor: 'rgb(0, 255, 184)'
    });
};
window.error = function (content) {
    iziToast.error({
        title: '警告',
        message: content,
        position: 'topRight'
    });
};
window.confirm = function (option) {
    option.title && jQuery("#modal_title").html(option.title);
    option.content && jQuery("#modal_body").html(option.content);
    option.success && jQuery("#modal_btn").off("click").on("click", function () {
        option.success();
        closeConfirm();
    });
    $("#confirm").modal("show");
};
window.closeConfirm = function () {
    jQuery("#confirm").modal("hide");
}
window.serverErrorInfo = function (response) {
    if (response.status == 403) {
        router.push("/403");
    }
    if (response.status == 500) {
        error("服务器错误")
    }
};
window.modal = function (option) {
    option && option.title && jQuery("#dialog_title").html(option.title);
    option && option.content && jQuery("#dialog_body").html(option.content);
    option && option.success && jQuery("#dialog_btn").off("click").on("click", function () {
        option.success();
    });
    $("#modal").modal("show");
};
window.codeState = function (code, opt) {
    if (!code) return;
    if (code == 200) {
        if (opt[200] && typeof opt[200] == "string") {
            alert(opt[200]);
        } else {
            if (opt[200] && typeof opt[200] == "function") {
                opt[200]();
            } else {
                alert('操作成功！');
            }
        }
    }
    if (code == 500) {
        if (opt[500] && typeof opt[500] == "string") {
            error(opt[500]);
            return;
        } else {
            opt[500] ? opt[500]() : error('服务器异常,请刷新后重新尝试！');
        }

    }
    if (code == 501) {
        if (opt[501] && typeof opt[501] == "string") {
            error(opt[501]);
            return;
        } else {
            opt[501] ? opt[501]() : error('数据值不能为空,请检查后重新操作！');
        }
    }
    if (code == 502) {
        if (opt[502] && typeof opt[502] == "string") {
            error(opt[502]);
            return;
        }
        opt[502] ? opt[502]() : error('请求异常,请重新尝试操作！');
    }
    if (code == 503) {
        if (opt[503] && typeof opt[503] == "string") {
            error(opt[503]);
            return;
        }
        opt[503] ? opt[503]() : error('当前记录值已经存在，请尝试更换其他值！');
    }
    if (code == 504) {
        if (opt[504] && typeof opt[504] == "string") {
            error(opt[504]);
            return;
        }
        opt[504] ? opt[504]() : error('当前操作的数据不存在,请刷新后重新尝试！');
    }
    if (code == 505) {
        if (opt[505] && typeof opt[505] == "string") {
            error(opt[505]);
            return;
        }
        opt[505] ? opt[505]() : error('系统不允许您注册两次！');
    }
};
window.BlogUtils = BlogUtils;