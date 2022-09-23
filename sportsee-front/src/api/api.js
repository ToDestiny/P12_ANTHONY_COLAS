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
      data.data.sessions[0].day = 'L';
      data.data.sessions[1].day = 'M';
      data.data.sessions[2].day = 'M';
      data.data.sessions[3].day = 'J';
      data.data.sessions[4].day = 'V';
      data.data.sessions[5].day = 'S';
      data.data.sessions[6].day = 'D';
      return data.data.sessions;
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
      data?.data?.data.reverse();
      data.data.data[0].kind = 'Intensité';
      data.data.data[1].kind = 'Vitesse';
      data.data.data[2].kind = 'Force';
      data.data.data[3].kind = 'Endurance';
      data.data.data[4].kind = 'Energie';
      data.data.data[5].kind = 'Cardio';
      return data.data;
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log('Error', err);
  }
}
