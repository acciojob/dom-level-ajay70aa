//your JS code here. If required.
function getDOMLevel(element){
	let level = 0;
	let current = element

	while(current.parentNode){
		current = current.parentNode
		level++
	}
	return level
}
const element = document.getElementById('level')
const level = getDOMLevel(element)
alert(`The level of the element is: ${level}`)