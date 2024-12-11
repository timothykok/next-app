import "../styles/about.css";
import Image from "next/image";



export default function About() {
  return (
    <>
       <div className="divider">
      <div className="image-container">
        <img src="/image6.jpg" alt="Connect with us" />
      </div>

      <div className="about">
        <div className="title">Let's Connect</div>
        <form className="about-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write something..."
            ></textarea>
          </div>
          <div className="button-wrapper">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </>
   
  );
}
