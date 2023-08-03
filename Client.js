const emoji = fetch('https://emojihub.yurace.pro/api/all')
console.log(emoji)

emoji.then(res => {
    console.log(res.status)
    console.log(res.ok)
    return res.json()
}).then(d => {

    const obj = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    };

    for (const key in d) {
        if (d.hasOwnProperty(key)) {
            const value = d[key];
            console.log("what is this", key, "this is hte ", value);
            const a = document.createElement('a')
            const t = document.createTextNode("")
            a.appendChild(t)
            a.className = "emojiStyle"
            a.setAttribute("id", `new one${key} `)
            a.innerHTML = `
            <div div class="card" >
            <div class="container">
            <ul>
            ${value.htmlCode}<br>Name:  ${value.name}
            

                    
                  <br> Category: ${value.category}
                <br>Group: ${value.group}
                  
                  </ul>
                          



                        </div>
                    </div>


            `




            const w = document.getElementById('n1')
            w.appendChild(a)
        }
    }

})



// const a = document.createElement('p')
// const t = document.createTextNode('this is new')
// a.appendChild(t)
// const w = document.getElementById('n1')
// w.appendChild(a)

