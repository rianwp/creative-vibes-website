const getMetaDesc = (text) => {
  const regex = /<p>(.*?)<\/p>/
  const corresp = regex.exec(text)
  const firstParagraphWithoutHtml = (corresp) ? corresp[1] : ""

  return firstParagraphWithoutHtml
}

export default getMetaDesc