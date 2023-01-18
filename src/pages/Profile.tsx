import React from 'react'

import ImageSelector from '../components/ImageSelector/ImageSelector'

const Profile = () => {
  
  const [firstName, setFirstName] = React.useState<string>('Rezy')
  const [lastName, setLastName] = React.useState<string>('Gelashvili')
  const [age, setAge] = React.useState<number>(19)
  const [email, setEmail] = React.useState<string>('rezygelashvili@gmail.com')
  const [editing, setEditing] = React.useState<boolean>(false)
  const [imageUrl, setImageUrl] = React.useState<string | null>('./src/angel.jpg');
  
  return (
    <>
      
          <div id='profile' className='ml-auto flex flex-col gap-10 py-5 mr-auto bg-custom-hex3 w-[60%] mt-[50px] mb-[50px] rounded-lg border-b-4 border-r-4 pl-[20px] pt-[20px]'>
            <ImageSelector editing={editing} imageUrl={imageUrl} setImageUrl={setImageUrl} />
            <p>{`Name: ${firstName} ${lastName}`}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <button className='bg-custom-hex  h-[40kpx] text-white rounded-md w-[100px]' onClick={() => {
              setEditing(!editing);
              console.log(firstName);
              console.log((document.getElementById('firstName') as HTMLInputElement));
              (document.getElementById('firstName') as HTMLInputElement).value = firstName;
              (document.getElementById('lastName') as HTMLInputElement).value = lastName;
              (document.getElementById('age') as HTMLInputElement).value = age.toString();
              (document.getElementById('email') as HTMLInputElement).value = email;
              (document.getElementById('profile2') as HTMLInputElement).style.display = 'block';
              (document.getElementById('profile') as HTMLInputElement).style.display = 'none';
            }}>Edit Profile</button>
          </div>
          <div id='profile2' className='hidden ml-auto mr-auto bg-custom-hex3 w-[60%] mt-[50px] mb-[50px] rounded-lg border-b-4 border-r-4 pl-[20px] pt-[20px] pb-[100px]'>
            <div className='flex flex-col'>
              <ImageSelector editing={editing} imageUrl={imageUrl} setImageUrl={setImageUrl} />
              <input id='firstName' type='text' className='w-[200px]' placeholder='First Name'></input>
              <input id='lastName' type='text' className='w-[200px]' placeholder='Last Name'></input>
              <input id='age' type='number' className='w-[200px]' placeholder='Age'></input>
              <input id='email' type='email' className='w-[200px]' placeholder='Email'></input>
              <button className='bg-custom-hex  h-[40kpx] text-white rounded-md w-[100px]' onClick={() => {
                setEditing(!editing);
                setFirstName((document.getElementById('firstName') as HTMLInputElement).value);
                setLastName((document.getElementById('lastName') as HTMLInputElement).value);
                setAge(parseInt((document.getElementById('age') as HTMLInputElement).value));
                setEmail((document.getElementById('email') as HTMLInputElement).value);
                (document.getElementById('profile2') as HTMLInputElement).style.display = 'none';
                (document.getElementById('profile') as HTMLInputElement).style.display = 'block';
              }}>Done</button>
            </div>
          </div>
      
    </>    
  )
}

export default Profile