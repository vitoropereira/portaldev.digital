export function cut_text(text){
const LIMIT = 120

 const aboveLimit = text.length > LIMIT
 const dotsOrEmpty = aboveLimit ? '...' : ''
 text = text.substring(0, LIMIT) + dotsOrEmpty

 return text
}



