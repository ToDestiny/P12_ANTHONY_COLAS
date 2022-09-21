export async function fetchDataUser() {
  try {
    let response = await fetch(`http://localhost:3000/user/13`);
    if (response.status === 200) {
      let data = await response.json();
      return data.data;
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log('Error', err);
  }
}
