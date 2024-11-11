import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <section>
      <h3>Faculty Curriculum vitae</h3>
      <h4>please Enter the correct Details of your Department</h4>

      <form>
        <p>Name</p>
        <input type='text' placeholder='Faculty Name'></input>
        <p>Profile Picture <br /> <i>please upload your passport size photo & the maximum limit is 100kb</i></p>
        <input type='file' ></input>

        <p>Designation</p>
        <label for="options">
          choose an option : </label>
          <select name="options" id="">
            <option value="Chairman">Chairman</option>
            <option value="Professor">Professor</option>
            <option value="AssociateProfessor">Associate Professor</option>
            <option value="AssistantProfessor">Assistant Professor</option>
          </select>

          <p>Official Address</p>
        <input type='text'></input>

        <p>Email Id</p>
        <input type="email" placeholder='abcd@uvce.in'></input>

        <p>Contact Number</p>
        <input type='number' placeholder='998723932'></input>

        <p>About You (200-500 words)</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Education</p>
        <div>
        <label for="options">
          course: </label>
          <select name="options" id="">
            <option value="Phd">Phd</option>
            <option value="PG">PG</option>
            <option value="UG">UG</option>
          </select>
          <p>University Name:</p>
          <input type="text" placeholder='Unversity name' />
          <p>College Name:</p>
          <input type="text" placeholder='college name'/>
          <p>Year of passing:</p> 
          <input type="date"/> 
          <p>Percentage of Marks:</p>
          <input type="number" placeholder='95.02'/>
        </div>

        <div>
        <label for="options">
          course: </label>
          <select name="options" id="">
            <option value="Phd">Phd</option>
            <option value="PG">PG</option>
            <option value="UG">UG</option>
          </select>
          <p>University Name:</p>
          <input type="text" placeholder='Unversity name' />
          <p>College Name:</p>
          <input type="text" placeholder='college name'/>
          <p>Year of passing:</p> 
          <input type="date"/> 
          <p>Percentage of Marks:</p>
          <input type="number" placeholder='95.02'/>
        </div>

        <div>
        <label for="options">
          course: </label>
          <select name="options" id="">
            <option value="Phd">Phd</option>
            <option value="PG">PG</option>
            <option value="UG">UG</option>
          </select>
          <p>University Name:</p>
          <input type="text" placeholder='Unversity name' />
          <p>College Name:</p>
          <input type="text" placeholder='college name'/>
          <p>Year of passing:</p> 
          <input type="date"/> 
          <p>Percentage of Marks:</p>
          <input type="number" placeholder='95.02'/>
        </div>

        <p>Industrial Experience</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Academic Contributions</p>
        <textarea id='' rows='10' cols='55'></textarea>
        
        <p></p>
        <label for="options">
          choose an option : </label>
          <select name="options" id="">
            <option value="Chairman">Chairman</option>
            <option value="Professor">Professor</option>
            <option value="AssociateProfessor">Associate Professor</option>
            <option value="AssistantProfessor">Assistant Professor</option>
          </select>

        <p>Faculty & Academic Counsil</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Board of Appointment</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Board of Studies</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Board of Examination</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Examination Responsibilites</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Technical Comitties</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Research Interests</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Awards and Recognitions</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Notable Achievements</p>
        <textarea id='' rows='10' cols='55'></textarea>

        <p>Social & other Activities</p>
        <textarea id='' rows='10' cols='55'></textarea>
      
        <p>List of Courses Thought</p>
        <textarea id='' rows='10' cols='55'></textarea>

      </form>
    </section>
    </>
  )
}

export default App
