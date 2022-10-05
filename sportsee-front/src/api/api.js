import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/mockData';

const isMockedData = false;

export async function fetchUserInfo(id) {
  if (isMockedData) {
    const data = USER_MAIN_DATA.find((user) => user.id === id);
    return data;
  }
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
  if (isMockedData) {
    const data = USER_ACTIVITY.find((user) => user.userId === id);
    let formattedDate = [];
    let date;
    data.sessions.forEach((session) => {
      date = new Date(session.day);
      formattedDate.push({
        day: date.getDate(),
        kilogram: session.kilogram,
        calories: session.calories,
      });
    });
    return formattedDate;
  }
  try {
    let response = await fetch(`http://localhost:3000/user/${id}/activity`);
    if (response.status === 200) {
      let data = await response.json();
      let formattedDate = [];
      let date;
      data.data.sessions.forEach((session) => {
        date = new Date(session.day);
        formattedDate.push({
          day: date.getDate(),
          kilogram: session.kilogram,
          calories: session.calories,
        });
      });
      return formattedDate;
    } else {
      throw new Error();
    }
  } catch (err) {
    console.log('Error', err);
  }
}

export async function fetchUserAverageSessions(id) {
  if (isMockedData) {
    const data = USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
    data.sessions[0].day = 'L';
    data.sessions[1].day = 'M';
    data.sessions[2].day = 'M';
    data.sessions[3].day = 'J';
    data.sessions[4].day = 'V';
    data.sessions[5].day = 'S';
    data.sessions[6].day = 'D';
    console.log(data);
    return data.sessions;
  }
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
  if (isMockedData) {
    const data = USER_PERFORMANCE.find((user) => user.userId === id);
    data?.data.reverse();
    data.data[0].kind = 'Intensité';
    data.data[1].kind = 'Vitesse';
    data.data[2].kind = 'Force';
    data.data[3].kind = 'Endurance';
    data.data[4].kind = 'Energie';
    data.data[5].kind = 'Cardio';
    console.log(data.data);
    return data.data;
  }
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
