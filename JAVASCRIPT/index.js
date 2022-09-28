// Function for nav bar active link
var atags = document.getElementsByClassName('navbar')[0].getElementsByTagName('a');
for(i = 0; i < atags.length; i++)
{
    if(atags[i].href == window.location.href)
    {
        atags[i].classList.add('active');
        var imgsrc_old = atags[i].getElementsByTagName('img')[0].src
        var imgsrc_new = imgsrc_old.replace('.png','_b.png');
        atags[i].getElementsByTagName('img')[0].src = imgsrc_new;
    }
}

function dropdowncard(ID_arrowdown,ID_arrowup, ID_card)
{
    if(document.getElementById(ID_arrowdown).style.display != 'none')
    {
        document.getElementById(ID_arrowdown).style.display = 'none';
        document.getElementById(ID_arrowup).style.display = 'inline-block';
        document.getElementById(ID_card).style.display = 'block';
    }
    else
    {
        document.getElementById(ID_arrowdown).style.display = 'inline-block';
        document.getElementById(ID_arrowup).style.display = 'none';
        document.getElementById(ID_card).style.display = 'none';
    }
    dropdownsubcard('crncyddwrap')
}

function dropdownsubcard(ID_card)
{
    if(ID_card == 'cntryddwrap')
    {
        document.getElementById('crncyddwrap').style.display = 'none';
        document.getElementById(ID_card).style.display = 'block';
    }
    else
    {
        document.getElementById(ID_card).style.display = 'block';
        document.getElementById('cntryddwrap').style.display = 'none';
    }
}


function displaymodal(value)
{
    document.getElementById('overlay').classList.add('modal_active')
    if(value =='signin')
    {
        document.getElementById('modal__signup').classList.add('signup__active')
    }
    else
    {
        document.getElementById('modal__login').classList.add('login__active')
    }
}

function closemodal()
{
    document.getElementById('overlay').classList.remove('modal_active')
    document.getElementById('modal__signup').classList.remove('signup__active')
    document.getElementById('modal__login').classList.remove('login__active')
}

var count = 0;

var dict_status = {email: 'false', password: 'false'};
var dict_valid = {email: 'false', password: 'false'};
var dict_DialogBox = {email: 'dialogBox_email', password: 'dialogBox_password'};
var dict_Validationmsg = {email: 'Wrong Email Format', password: 'Wrong password Format'};
var dict_alertmsg = {email: 'E-Mail Required', password: 'Password Required' };
var dict_InputBox_IdName = {email: 'email_text_box', password: 'password_text_box'};
var dict_regex = {email : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/};


function inputClick(ID_,key)
{
    var inputvalue = document.getElementById(ID_).value;
    if (inputvalue != "" && dict_status[key] == 'false' && dict_valid[key] == 'true')
    {
        count++;
        dict_status[key] = 'true';
    }
    else if (inputvalue == "" && dict_status[key] == 'true' && dict_valid[key] == 'false'
    )
    {
        count--;
        dict_status[key] = 'false';
    }
    activebutton();
    validation_shake(ID_,key);
}

function activebutton() 
{
    button = document.getElementById("submit_btn");
    if (count == 2) 
    {
        button.classList.remove('button_Deactive');
        button.classList.add('button_Active');
    }
    else 
    {
        button.classList.remove('button_Active');
        button.classList.add('button_Deactive');
    }
}


function dialogueBox() 
{
    for (var key in dict_status) 
    {
        if (dict_status[key] == 'false' && document.getElementById(dict_InputBox_IdName[key]).value == "") 
        {
            document.getElementsByClassName(dict_DialogBox[key])[0].style.display="block";
            document.getElementById(dict_DialogBox[key]).innerHTML=dict_alertmsg[key];
            document.getElementById(dict_InputBox_IdName[key]).style.border="solid #d00b2f";
            document.getElementsByClassName(document.getElementById(dict_InputBox_IdName[key]).nextElementSibling.className)[0].innerHTML="___________________";
            document.getElementsByClassName(document.getElementById(dict_InputBox_IdName[key]).nextElementSibling.className)[0].style.color="#d00b2f";
            document.getElementsByClassName(dict_DialogBox[key])[0].classList.add('shake');
            document.getElementById(dict_InputBox_IdName[key]).classList.add('shake');
            document.getElementsByClassName(document.getElementById(dict_InputBox_IdName[key]).nextElementSibling.className)[0].classList.add('shake');
            setTimeout(removeClass,1000);
        }
        if (dict_status[key] == 'false' && document.getElementById(dict_InputBox_IdName[key]).value != "") 
        {
            document.getElementsByClassName(dict_DialogBox[key])[0].style.display="block";
            document.getElementById(dict_DialogBox[key]).innerHTML=dict_Validationmsg[key];
            document.getElementsByClassName(dict_DialogBox[key])[0].classList.add('shake');
            document.getElementById(dict_InputBox_IdName[key]).classList.add('shake');
            document.getElementsByClassName(document.getElementById(dict_InputBox_IdName[key]).nextElementSibling.className)[0].classList.add('shake');
            setTimeout(removeClass,1000);
        }
    }
}

function removeClass() 
{
    for (var key in dict_DialogBox) 
    {
        document.getElementsByClassName(dict_DialogBox[key])[0].classList.remove('shake');

        document.getElementById(dict_InputBox_IdName[key]).classList.remove('shake');

        document.getElementsByClassName(document.getElementById(dict_InputBox_IdName[key]).nextElementSibling.className)[0].classList.remove('shake');
    }
}

function statechange(id_,class_,classLabel_,value)
{
    document.getElementsByClassName(class_)[0].style.display="none";
    document.getElementById(id_).style.border="solid 2px #000000db";
    document.getElementsByClassName(classLabel_)[0].innerHTML=value;
}


function validation(ID_, key)
{
    if(document.getElementById(ID_).value.match(dict_regex[key]))
    {
        document.getElementById(ID_).classList.remove('input_invalid');
        document.getElementById(ID_).classList.add('input_valid');
        dict_valid[key] = 'true';
    }
    else
    {
        document.getElementById(ID_).classList.remove('input_valid');
        document.getElementById(ID_).classList.add('input_invalid');
        dict_valid[key] = 'false';
    }
}

function validation_shake(ID_, key)
{
    if(!(document.getElementById(ID_).value.match(dict_regex[key])))
    {
        document.getElementById(dict_InputBox_IdName[key]).classList.add('shake');
        document.getElementsByClassName(document.getElementById(dict_InputBox_IdName[key]).nextElementSibling.className)[0].classList.add('shake');
        setTimeout(removeClass,1000);
    }
}

function slide_carousel(arrow)
{
    var index = (document.getElementById('slider')).style.getPropertyValue('--slide_index')
    console.log(index);
    for(i = 0; i < 5; i++)
    {
        if(document.getElementsByClassName('slider')[0].getElementsByTagName('img')[i].classList.contains('center'))
        {
            break;
        }
    }
    document.getElementsByClassName('slider')[0].getElementsByTagName('img')[i].classList.remove('center');
    if (arrow == 'right')
    {
        index++;
        document.getElementsByClassName('slider')[0].getElementsByTagName('img')[i+1].classList.add('center');
    }
    else
    {
        index--;
        document.getElementsByClassName('slider')[0].getElementsByTagName('img')[i-1].classList.add('center');
    }
    (document.getElementById('slider')).style.setProperty('--slide_index',index);
    console.log(index);
}

function expand_card()
{
    document.getElementsByClassName('service_wrapper_1')[0].classList.add('expand')
    document.getElementsByClassName('test')[0].classList.add('expand')
    console.log('function called')
}




console.log('Success')
