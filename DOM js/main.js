////EVENTS
window.onload=function()
{
    var enterItems = document.getElementById("additems");
    var form = document.getElementById("formSubmit");
    var itemList = document.getElementById("itemsList");
    var filterlist = document.getElementById("search1");
    filterlist.addEventListener('keyup', filterList);

    itemList.addEventListener('click', removeItem);
    form.addEventListener('submit', addItem);

    function addItem(a)
    {
        a.preventDefault();

        var string = document.getElementById("additems").value;

        var li = document.createElement('li');
        li.className="list-group-item";

        li.appendChild(document.createTextNode(string));

        var deleteKey = document.createElement('input');
        deleteKey.className = "btn btn-danger butn-dn";
        deleteKey.type = "button";
        deleteKey.value = "X";

        li.appendChild(deleteKey);

        itemList.appendChild(li);
       
    }

    function removeItem(d)
    {
        if(d.target.classList.contains("butn-dn"))
        {
            var li = d.target.parentElement;
            itemList.removeChild(li);
        }
    }

    function filterList(f)
    {
        var text = f.target.value.toLowerCase();
        items = document.getElementsByTagName('li');

        Array.from(items).forEach(function(item)

        {
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) != -1)
            {
                item.style.display = 'block';
            }

            else
            {
                item.style.display="none";
            }
        });

    }
}














