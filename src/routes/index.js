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
     
     User.findOne({email:req.body.email },function(err,doc){
        if(!err && doc)
        {
          res.json({msg:"user exists please register with new username"});
        }
        else
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
        }


 
  
     })
   

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

     router.post('/create_departments',function(req,res) 
  {
     
         var blof = new Departments();
         blof.department_name = req.body.department_name;
         blof.doctors_count = req.body.doctors_count;
         blof.opening_at = req.opening_at;
         blof.closing_at = req.body.closing_at;
         blof.land_phone = req.body.land_phone;
         blof.tokens_per_day = req.body.tokens_per_day;
         blof.save(function (err, result){
              if(!err)
              {
              res.send('department created');
              }
 

              });

    });



export const route = router;
