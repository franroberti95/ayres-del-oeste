const fs = require("fs");
const request = require("request");
const data = require("./src/data/buildings")

// This is a sample list from your question.
const list = data.reduce( (acum, next) => {
    const title = next.title.replaceAll(" ", "-");
    const imgs = next.images.map( (img,index) => ({
        name: title + "-" + img.value,
        photoUrl: img.photo
    }))
    const planes = next.floorPlan.map ( (img, index) =>
    ({
        name: title + "-" + index,
        photoUrl: img.photo
    }))

    return [...acum, ...imgs, ...planes]
}, []);

async function main() {
    const download = ({ name, url }) =>
        new Promise((resolve, reject) => {
            request({ url: url, encoding: null }, (err, res, buf) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (res.headers["content-type"].includes("text/html")) {
                    console.log(`This file (${url}) is not publicly shared.`);
                    resolve(null);
                    return;
                }

                // When you use the following script, you can save the downloaded image data as the file.
                fs.writeFile(
                    name,
                    buf,
                    {
                        flag: "a",
                    },
                    (err) => {
                        if (err) reject(err);
                    }
                );

                resolve(buf);
            });
        });


    // 1. Create filename and convert the URL for downloading.
    const reqs = list.map(({ name, photoUrl }) => ({
        name: `${name}.jpg`,
        url: `https://drive.google.com/uc?export=download&id=${
            photoUrl.split("=")[2]
        }`,
    }));

    // 2. Download the files.
    const buffers = await Promise.all(reqs.map((obj) => download(obj)));
    console.log(buffers);
}

main();
