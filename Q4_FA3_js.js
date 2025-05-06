document.write("<strong>PART 01</strong><br><br>");

do 
{
	var num = prompt("Enter a number: ");
} 
while (num === null || num === "" || isNaN(num));
document.write("Number inputted: " + num + "<br><br>");
if (num % 2 === 0)
{
	for (i = num; i > 0; i = i - 1)
	{
		for (j = i; j > 0; j = j - 1)
		{
			document.write(i + " ");
		}
		document.write("<br>");
	}
}
else
{
	for (i = num; i > 0; i = i - 1)
	{
		for (j = num; j > 0; j = j - 1)
		{
			document.write(i + " ");
		}
		document.write("<br>");
	}
}


document.write("<br><br><strong>PART 02</strong><br><br>");

const contact_list = [];
function add(contact_list)
{
	if (contact_list.length <= 7)
	{
		let x = document.getElementById("contacts").value;
		contact_list.push(x);
		document.getElementById("list").innerHTML = contact_list.join(" ");
		console.log(contact_list);
	}
	else
	{
		let x = document.getElementById("contacts").value;
		contact_list.shift();
		contact_list.push(x);
		document.getElementById("list").innerHTML = contact_list.join(" ");
		console.log(contact_list);
	}
}
function remove(contact_list)
{
	contact_list.pop();
	document.getElementById("list").innerHTML = contact_list.join(" ");
	console.log(contact_list);
}