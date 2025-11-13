require('dotenv').config()
const m = require('masto')
const masto = m.createRestAPIClient({
    url: "https://networked-media.itp.io/",
    accessToken: process.env.TOKEN
})


// add the request to db
async function retrieveData(){
    const url = 'http://104.248.62.159:7001/all-posts'
    const response = await fetch(url)
    const json = await response.json()
    const posts = json.posts

    randNum0 = Math.floor(Math.random() * 2)
    if(randNum0==1){//think of poem
        let poem = ""
        //num of text
        let randNum1 = Math.floor(Math.random() * 8) + 2

        for (let i = 0; i < randNum1; i++) {
        let randNum2 = Math.floor(Math.random() * posts.length)
        let textp = posts[randNum2].text

        // add each 
        randNum3 = Math.floor(Math.random() * 2)
        if (randNum3 == 1 && i<randNum1-1){
            poem += textp + "\n"
        }else{
            poem += textp
        }
    }
        //emo
        let emojis = ["🌱","🔥","✨","🌀","🐙","🍎","🍌","🍊","🍇","🍓","🚗","🚂","✈️","🚢","🚁","🌞","🌧️","❄️","🌩️","🌈","🎉","💡","📚","💰","🔑","❤️","🩹","🔔","🛡️","💎","👑","⚽","🏀","🏈","⚾","🎾","🎤","🎸","🎨","🎬","🚀","🕰️","🗺️","🔗","🗑️","💻","📱","📸","💡","🖊️"];
        let randNum4 = Math.floor(Math.random() * emojis.length)
        let randEmo = emojis[randNum4];

        makeStatus("李玉莹突然写了一首新诗: \n"+poem +" \n"+randEmo)

    }else{//think of word
        //yext
        let randNum1 = Math.floor(Math.random() * (posts.length))
        let randText = posts[randNum1].text
    
        //emo
        let emojis = ["🌱","🔥","✨","🌀","🐙","🍎","🍌","🍊","🍇","🍓","🚗","🚂","✈️","🚢","🚁","🌞","🌧️","❄️","🌩️","🌈","🎉","💡","📚","💰","🔑","❤️","🩹","🔔","🛡️","💎","👑","⚽","🏀","🏈","⚾","🎾","🎤","🎸","🎨","🎬","🚀","🕰️","🗺️","🔗","🗑️","💻","📱","📸","💡","🖊️"];
        let randNum2 = Math.floor(Math.random() * emojis.length)
        let randEmo = emojis[randNum2];
        makeStatus(randEmo +"李玉莹突然想到了一个词:"+randText+randEmo)
    }

}

async function makeStatus(textStatus){

    const status = await masto.v1.statuses.create({
        status: textStatus,
        visibility: "private",
    })

    //console.log(status.url)
}

// setInterval( ()=>{

//     retrieveData()
    
// }, 30000)

//5400000
// makeStatus()
retrieveData()