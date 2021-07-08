const $main = document.querySelector('main')
const $examples = document.querySelectorAll('.example')
$examples.forEach($example => {
  const $pre = document.createElement('pre')
  const $code = document.createElement('code')
  $code.innerHTML =
    $example.innerHTML
      .replaceAll('<','&lt;')
      .replaceAll('>','&gt;')
      .replaceAll('   ',' ')
  $pre.appendChild($code)

  const $details = document.createElement('details')
  const $summary = document.createElement('summary')
  $summary.innerHTML = 'Код'
  $details.appendChild($summary)
  $details.appendChild($pre)

  const $doc = document.createElement('div')
  $doc.classList.add('code')
  $doc.appendChild($details)

  $main.insertBefore($doc, $example.nextElementSibling)
})