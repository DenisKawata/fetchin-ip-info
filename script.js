const OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5a9b18605bmsh9f4a65c326341dap1785e7jsn78e8fd737d2b',
        'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
    }
}

const fetchIpInfo = ip => {
   return fetch(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/${ip}`, OPTIONS)
   .then(res  => res.json())
   .catch(err => console.error(err))
}

const $ = selector =>  document.querySelector(selector)

const $form = $('#form')
const $input = $('#input')
const $submit = $('#submit')
const $results = $('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input
    if (!value) return

    $submit.setAttribute('disabled','')
    $submit.setAttribute('aria-busy','true')

    const ipInfo = await fetchIpInfo(value)

    if (ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})