export async function fetchUserInfo(id) {
  try {
    let response = await fetch(`http://localhost:3000/user/${id}`);
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

export async function fetchUserActivity(id) {
  try {
    let response = await fetch(`http://localhost:3000/user/${id}/activity`);
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

export async function fetchUserAverageSessions(id) {
  try {
    let response = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
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

export async function fetchUserPerformance(id) {
  try {
    let response = await fetch(`http://localhost:3000/user/${id}/performance`);
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
