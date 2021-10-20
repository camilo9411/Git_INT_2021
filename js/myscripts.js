function addStyles() {

    try {

        for (let index = 0; index < 3; index++) {
        

            document.write('<link rel="stylesheet" type="text/css"' + 
            'href="./css/style_'+ index +'.css">')
            
        }
        
    } catch (error) {
        
    }



}
addStyles()