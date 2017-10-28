import moment from 'moment';
import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };
  // child_removed
  // database.ref('expenses').on('child_removed', (snapShot) => {
  //   console.log(snapShot.key, snapShot.val());
  // });

  // child_changed
  //database.ref('expenses').on('child_changed', (snapShot) => {
  //  console.log(snapShot.key, snapShot.val());
  //});


    // child_added
  //database.ref('expenses').on('child_added', (snapShot) => {
  //  console.log(snapShot.key, snapShot.val());
  //});

  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     });
  //   });
  //   console.log(expenses);
  // });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });
// database.ref('expenses').push({
//   description: 'rent',
//   note: 'monthly rent',
//   amount: 109500,
//   createdAt: moment.now()
// });

  // database.ref('notes').push({
  //   title: 'Course Topics',
  //   body: 'React Native, Angular, Python'
  // });

  // setTimeout(() => {
  //   database.ref('age').set(31);
  // }, 3500);

  // setTimeout(() => {
  //   database.ref().off(onValueChange);
  // }, 7000);

  // setTimeout(() => {
  //   database.ref('age').set(33);
  // }, 10500);
  // database.ref('location')
  //   .once('value')
  //   .then((snapshot) =>{
  //     const val = snapshot.val();
  //     console.log(val);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
//   database.ref().set({
//     name: 'Greg Clark',
//     age: 26,
//     job: 'Software Developer',
//     location: {
//         city: 'Waukee',
//         state: 'Iowa'
//     }
//   }).then(() => {
//     console.log('Data is saved');
//   }).catch((e) => {
//     console.log('this failed: ',e);
//   });

// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software developer',
//     isSingle: null
// });
// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Single removed');
//     }).catch((e) => {
//         console.log("Remove error: ",e);
//     })