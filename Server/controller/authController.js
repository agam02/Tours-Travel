
// import User from "../models/User.js";
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken';
// //user registration
// export const register =async(req,res) =>{
// try {

//     //hasing password
//      const salt =bcrypt.genSaltSync(10)
//      const hash =bcrypt.hashSync(req.body.password,salt)

// const newUser =new User({
//     username:req.body.username,
//     email:req.body.email,
//     password:hash,
//     photo:req.body.photo
// })
//  await newUser.save()

//  res.status(200).json({success:true,message:'Successfully created'})

//   } catch (err) {
//     res
//     .status(500)
//     .json({success:false,message:'Failed to create .Try again'})

//   }
// };
// //user login
// export const login = async(req,res) =>{

//    const email = req.body.email

//     try {
//         const user =await User.findOne({email})

//         //if user doesn't exist

//         if(!user){
//             return res.status(404).json({success:false,message:'user not found'})
//         }

//         //if user is exist then check the password 
//         const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

//             //if passord is incorrect
//             if(!checkCorrectPassword){
//                 return res.status(401).json({success:false,message:'incorrect email or password'})
//             }

//             const{password,  role, ...rest}=user._doc

//             //creat jwt token
//             const token =jwt.sign({id:user._id,role:user.role},process.env.JWt_SECRET_KEY,{expiresIn:"15d"});

//             //set token in the browser cookies and send responce to client
//           res.cookie('accessToken',token,{
//             httpOnly:true,
//             expires:token.expiresIn
//           }).status(200)
//           .json({
//             success:true,
//             message:"successfully login",
//            data: { ...rest },
          
//         });
//       } catch (err) {
      
//         console.error('Error:', err);
//         res.status(500).json({ success: false, message: 'Failed to login' });
//       }
      
      
//     };



// import User from "../models/User.js";
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// User registration
// export const register = async (req, res) => {
//   try {
//     // Hashing password
//     const salt = bcrypt.genSalt(10);
//     const hash = bcrypt.hashSync(req.body.password, salt);

//     const newUser = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: hash
//       // photo: req.body.photo
//     });

//     await newUser.save();

//     res.status(200).json({ success: true, message: 'Successfully created' });
//   } catch (err) {
//     console.error('Error during registration:', err);
//     res.status(500).json({ success: false, message: 'Failed to create. Try again' });
//   }
// };

// // User login
// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     // If user doesn't exist
//     if (!user) {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }

//     // If user exists, then check the password
//     const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);

//     // If password is incorrect
//     if (!isPasswordCorrect) {
//       return res.status(401).json({ success: false, message: 'Incorrect email or password' });
//     }
//     res.status({success: true});

    // const { password: userPassword, role, ...rest } = user._doc;

    // Create JWT token


    // console.log('JWT_SECRET_KEY:', process.env.JWT_SECRET_KEY);
  // const token = jwt.sign({ id: user._id, role: user.role },process.env.JWT_SECRET_KEY, { expiresIn: '15d' });

    // const token = jwt.sign({ id: user._id, role: user.role },process.env.JWT_SECRET_KEY, { expiresIn: '15d' });

    // // Set token in the browser cookies and send response to the client
    // const expirationDate = new Date();
    // expirationDate.setDate(expirationDate.getDate() + 15); // Expires in 15 days

    // res.cookie('accessToken', token, {
    //   httpOnly: true,
    //   expires: expirationDate // Set the expiration date
    // }).status(200).json({
    //   success: true,
    //   message: 'Successfully logged in',
    //   data: { ...rest }
    // });
//   } catch (err) {
//     console.error('Error during login:', err);
//     res.status(500).json({ success: false, message: 'Failed to login' });
//   }
// };


// Import required modules
// Import required modules
import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Define the JWT secret key
const JWT_SECRET_KEY = 'youractualsecretkey';

// User registration
export const register = async (req, res) => {
  try {
    // Hashing password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo
    });

    await newUser.save();

    res.status(200).json({ success: true, message: 'Successfully created' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Failed to create. Try again' });
  }
};

// User login
export const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });

    // If user doesn't exist
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // If user exists, check the password
    const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password);

    // If password is incorrect
    if (!checkCorrectPassword) {
      return res.status(401).json({ success: false, message: 'Incorrect email or password' });
    }

    const { password, role, ...rest } = user._doc;

    // Create JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET_KEY, { expiresIn: "15d" });

    // Set token in the browser cookies and send response to client
    res.cookie('accessToken', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 days
    }).status(200).json({
      success: true,
      message: "Successfully login",
      data: { ...rest },
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Failed to login' });
  }
};


