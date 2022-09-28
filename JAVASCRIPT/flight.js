function inputClick()
{
    var return_ = document.getElementById('radio_return').checked;
    var one_way = document.getElementById('radio_one-way').checked;
    if(return_)  
    {
        document.getElementById('ret-date').removeAttribute("disabled");
    }
    if(one_way)
    {
        document.getElementById('ret-date').setAttribute("disabled","disabled");
    }
}
// dep-ret-date
function getdate(id_)
{
    console.log(document.getElementById(id_).value);
}