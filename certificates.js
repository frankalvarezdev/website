const fs = require('fs');
const axios = require('axios');

const main = async () => {
    const result = await axios.get('https://ed.team/u/frankalvarezdev');
    let data = result.data.match(/<script id="__NEXT_DATA__" type="application\/json">.*<\/script>/);
    data = data[0].replace('<script id="__NEXT_DATA__" type="application/json">', '').replace('</script>', '');
    data = JSON.parse(data);

    const certificates = data.props.pageProps.coursesCertificates.map(certificate => {
        return {
            ...certificate,
            image: `https://edteam-media.s3.amazonaws.com/certificates/original/${certificate.image}`,
        }
    });

    if (!fs.existsSync('./out')) fs.mkdirSync('./out');

    fs.writeFile('./out/certificates.json', JSON.stringify(certificates), err => {
        if (err) return console.log(err);
    });
}

main();