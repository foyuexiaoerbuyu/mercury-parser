import paragraphize from './paragraphize'

// ## NOTES:
// Another good candidate for refactoring/optimizing.
// Very imperative code, I don't love it. - AP


//  Given cheerio object, convert consecutive <br /> tags into
//  <p /> tags instead.
//
//  :param $: A cheerio object

export default function brsToPs($) {
  let collapsing = false
  $('br').each((index, element) => {
    let nextElement = $(element).next().get(0)

    if (nextElement && nextElement.tagName === 'br') {
      collapsing = true
      $(element).remove()
    } else if (collapsing) {
      collapsing = false
      // $(element).replaceWith('<p />')
      paragraphize(element, $, true)
    }
  })

  return $
}