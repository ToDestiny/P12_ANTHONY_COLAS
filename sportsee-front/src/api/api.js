export async function fetchDataUser() {
  try {
    let response = await fetch(`http://localhost:3000/user/12`);
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

export async function fetchUserActivity() {
  try {
    let response = await fetch(`http://localhost:3000/user/12/activity`);
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

export async function fetchUserAverageSessions() {
  try {
    let response = await fetch(
      `http://localhost:3000/user/12/average-sessions`
    );
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

export async function fetchUserPerformance() {
  try {
    let response = await fetch(`http://localhost:3000/user/12/performance`);
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
