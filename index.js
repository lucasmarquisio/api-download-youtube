const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();

app.use(cors());


app.get('/download', async (req,res) => {
const isUrlYoutube = /yout+/
const { MP3, URL} = req.query //use query MP3 to donwload or not format mp3

if(URL == '' || URL == undefined) return res.status(400).send({error: 'url not found, use query "URL" to send url youtube download'})
if(!isUrlYoutube.test(URL)) return res.status(406).send({error: "url not acepted"})
if(MP3 == undefined) return res.status(400).send({error: "send query 'MP3' true or false"})

try{
  const info = await ytdl.getInfo(URL)
  const info_name = info.videoDetails.title

  if(MP3 == 'true'){
    
    res.header('Content-Disposition', `attachment; filename="${info_name}.mp3"`);
           ytdl(URL, {
              quality: "140",
              format: "mp3"
              }).pipe(res);
    
           return   
      }else{
           res.header('Content-Disposition', `attachment; filename="${info_name}.mp4"`);
           ytdl(URL, { format: "mp4", quality: "135"}).pipe(res);
  }
}catch(e){
   res.status(404).send({error: 'url not acepted'})
}

});

app.listen(3001);

