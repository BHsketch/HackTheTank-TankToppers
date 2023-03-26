var node = document.getElementById('node');

var studlist = document.getElementById('studlist');

var studentslist = ['U1', 'U23', 'U45', 'U47', 'U72'];

var toggle = true;

node.addEventListener('click', ()=>
{
    toggle = !toggle;
    if(toggle == false)
    {
        studlist.innerHTML = '';
    }else{
        for(stud in studentslist)
        {
            var temp = document.createElement('div');
            temp.classList.add('transparentdiv');
            studlist.appendChild(temp);

            var intemp = document.createElement('div');
            intemp.classList.add('studlistdiv');
            intemp.textContent = studentslist[stud];
            temp.appendChild(intemp);

            var contact1 = document.createElement('div');
            contact1.classList.add('contact');
            temp.appendChild(contact1);

            var contact2 = document.createElement('div');
            contact2.classList.add('contact');
            temp.appendChild(contact2);
            
        }
    }
})
