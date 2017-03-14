import { Router } from 'express';

import { User } from '../models';
import { Departments } from '../models/departments';
import { Token } from '../models/token';

const router = Router();

router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/api', (req, res) => {
  User.find({}, (err, users) => {
    if(err) throw err;
    res.end(JSON.stringify(users));
  });
});



router.post('/create_user',function(req,res)
  {
     var anx = new User();
   anx.email=req.body.email;
   anx.password=req.body.password;
  
   
   anx.save(function (err, result){
    if(!err)
    {
     res.send('user creation completed');
    }
 

   });

 });
   router.post('/user_login',function(req,res) 
  {
     User.findOne({email:req.body.email ,password:req.body.password},function(err,doc){
        if(!err && doc)
        {
          res.json({msg:"sucess"});
        }
        else
        {
           res.json({msg:"login failed"});
        }


     })
    });

     router.post('/update_blogs',function(req,res) 
  {
     
         var blof = new Blog();
         blof.title = req.body.title;
         blof.author = req.body.author;
         blof.body = req.body.body;
         blof.comments.body = req.body.comments;
         
         blof.save(function (err, result){
              if(!err)
              {
              res.send('blog updated');
              }
 

              });

    });



export const route = router;
