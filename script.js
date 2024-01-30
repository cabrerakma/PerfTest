import http from 'k6/http';
import { check, sleep } from 'k6';

// export const options = {
//   // A number specifying the number of VUs to run concurrently.
//   vus: 10,
//   // A string specifying the total duration of the test run.
//   duration: '30s',

// export default function() {
//   http.get('https://test.k6.io');
//   sleep(1);
// }

export const options = {
  stages: [
    { duration: '2s', target: 10 },
    { duration: '10s', target: 5 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts/1/comments/');
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}