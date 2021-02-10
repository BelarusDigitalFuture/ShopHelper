/** Global configs
 */
const API_BASE_URL = 'https://shop-helperer.herokuapp.com/api'

function registration () {
  const button = document.getElementById('u25')
  button.addEventListener('click', (event) => {
    // event.stopPropagation()
    event.preventDefault()

    // console.log('registration')
    const login = document.getElementById('u19_input').value
    const password = document.getElementById('u21_input').value
    const email = document.getElementById('u23_input').value
    fetch(`${API_BASE_URL}/auth/register`, {
      // method: 'POST',
      method: 'GET',
      // body: JSON.stringify({ login, password, email })
    })
    return false
  })
}

(function () {
  'use strict'

  function bindEvents () {
    console.log('bindEvents')
    registration()
  }

  // addEventListener wrapper:
  window.$on = function (target, type, callback, useCapture) {
    target.addEventListener(type, callback, !!useCapture)
  }

  $on(window, 'load', () => {
	  bindEvents()
	  // console.log('window::load')
  })

})()

