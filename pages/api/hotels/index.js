// pages/api/items/index.js
import dbConnect from '../../../lib/dbConnect' ;
import Hotel from '../../../models/Hotel'


export default async function handler(req, res) {
  
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const hotels = await Hotel.find({});
        res.status(200).json({ success: true, data: hotels });
      } 
      catch (error) { 
        res.status(400).json({ success: false });
      }
      break;

    case 'POST':
      try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json({ success: true, data: hotel });
      } 
      catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
