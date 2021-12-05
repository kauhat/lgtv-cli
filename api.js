import lgtv from 'lgtv2'

export async function setupApi() {
  console.log('Connecting to TV...')

  return new Promise((resolve, reject) => {
    const tv = lgtv({
      url: 'ws://lgwebostv:3000',
    })

    tv.on('error', function (err) {
      console.error("Failed!");

      return reject(err)
    })

    tv.on('connect', function () {
      console.log('Connected to TV...')

      return resolve(tv)
    })
  })
}
