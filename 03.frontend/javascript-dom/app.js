/*
    Event Bubbling: -
    if you want to perform actions on some elements and those elements has not 
    added event listener then we use event bubbling to listen the events

*/

/*
    class, id, href ..etc there are attributes and their values are attribute value
    -> getAttribute(attr_name)
    -> setAttribute(attr_name,value) // set the value of attribute
    -> ele.hasAttribute(attr_name) // to check attribute present in the element
    -> ele.removeAttribute(attr_name) // to remove attribute
*/
// This event is useful when you have used script in header and some dom dependent on script
document.addEventListener('DOMContentLoaded',(e)=>{
    
    // here implementation of event bubbling 
    const list = document.querySelector('#book-list ul')
    list.addEventListener('click',(e)=>{
        if(e.target.className ==='delete'){
            const li = e.target.parentElement;
            // li.parentElement.removeChild(li);
            list.removeChild(li);
        }
    })

    // Add-book
    // here add-book is form id
    const add_form = document.forms['add-book']
    console.log("add_form",add_form);
    add_form.addEventListener('submit',(e)=>{
        e.preventDefault();
        // value of input field
        const value = add_form.querySelector("input[type='text']").value;
        // console.log("event is ",value);
        // create html element
        const li = document.createElement('li');
        const bookName = document.createElement('span')
        const deleteButton = document.createElement('span')

        //  add content
        bookName.textContent = value;
        deleteButton.textContent = 'delete'

        // Adding style and classes
        // deleteButton.style.color = "red";
        // deleteButton.style.marginTop = '10px'
        // className replace the current class with newly assigned class but
        // classList append the newly assigned class with current class
        
        // Add classes
        bookName.classList.add('name');
        deleteButton.classList.add('delete')
        //

        // Add child
        li.appendChild(bookName);
        li.appendChild(deleteButton);

        // Add li to Ul
        const ul = list.appendChild(li);
    })

    //Hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change',(e)=>{
        if(hideBox.checked){
            list.style.display = 'none';
        }else{
            list.style.display = 'initial';
            console.log("Show all book lists");
        }
    })

    // Search item
    let input  = document.querySelector('#search-books input');

    input.addEventListener('keyup',(e)=>{
        const term = e.target.value.toLowerCase();
        // console.log("event value is",term);
        let lis = document.getElementsByTagName('li');
        // console.log("Lis ",lis[0].innerText);
        Array.from(lis).forEach((item)=>{
            // console.log(item.innerText);
            if(item.firstElementChild.innerText.toLowerCase().includes(term) ){
                item.style.display = 'block';
            }else{
                item.style.display = 'none';
            }
        })

    })

    // Tabbed content
    const tabs = document.querySelector('.tabs')
    const panels = document.querySelectorAll('.panel')

    tabs.addEventListener('click',(e)=>{
        console.log("Event is ",e);
        if(e.target.tagName == 'LI'){
            // data-target="#about" dataset is used for data and target used for target
            const  targetPanel = document.querySelector(e.target.dataset.target)
            panels.forEach(panel=>{
                console.log("Panel and target panel ",panel,targetPanel);
                if(panel == targetPanel){
                    panel.classList.add('active')
                }else{
                    panel.classList.remove('active')
                }
            })
        }
    })
})