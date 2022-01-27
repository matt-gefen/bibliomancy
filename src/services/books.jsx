
async function getBooks(subject, fiction, publishstart,publishend,size) {
  try {
    const response = await fetch(`http://openlibrary.org/search.json?subject=${subject}+${fiction}`)
    const data = response.json()
    return data.docs
  } catch(error) {
    throw error
  }
}

export default getBooks