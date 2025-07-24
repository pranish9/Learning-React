import React from "react";

const Article = () => {
  return (
    <div style={{ maxWidth: "900px", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 16px #e5e7eb", padding: "32px" }}>
      <h1 style={{ textAlign: "center", color: "#2563eb", marginBottom: "8px" }}>
        Company Profile Website<br />for<br />Kathmandu Repairing Center Pvt. Ltd.
      </h1>
      <h3 style={{ textAlign: "center", color: "#374151", marginBottom: "18px" }}>
        React Training &mdash; Semester 6th
      </h3>
      <div style={{ textAlign: "center", marginBottom: "18px" }}>
        <strong>BY:</strong> Pranish Raj Tuladhar (C30109220142)<br />
        <span>Bachelor of Information & Communication Technology</span><br />
        <span>School of Science & Technology, Asia e University</span>
      </div>
      <hr style={{ margin: "24px 0" }} />
      <h2 style={{ color: "#2563eb", marginBottom: "10px" }}>Contents</h2>
      <ol style={{ marginBottom: "24px", paddingLeft: "20px", color: "#374151" }}>
        <li>INTRODUCTION</li>
        <li>LITERATURE REVIEW</li>
        <li>PROBLEM STATEMENT</li>
        <li>OBJECTIVE</li>
        <li>TECH STACK</li>
        <li>FEATURES</li>
        <li>GANTT CHART</li>
      </ol>
      <hr style={{ margin: "24px 0" }} />

      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ color: "#2563eb" }}>1. INTRODUCTION</h3>
        <p>
          In today's digital era, having an online presence is essential for businesses to remain competitive and accessible.
          Kathmandu Repairing Center Pvt. Ltd. (KRC), a company specializing in electrical engineering services, system maintenance,
          and the sale of related products, currently lacks a dedicated website. This absence hinders its ability to reach new customers,
          showcase completed projects, and streamline communication.
        </p>
        <p>
          This project aims to design and develop a responsive static website using React.js for Kathmandu Repairing Center Pvt. Ltd.
          The website will serve as a professional digital platform that highlights the company’s expertise, allows potential clients to explore services and products,
          and provides a convenient way to book appointments or submit inquiries online.
        </p>
        <p>
          The website will be developed as part of the Semester 6 React Training Project under the Bachelor of Information & Communication Technology program at Asia e University.
          The development process will follow modern web design principles, using tools like React.js, Tailwind CSS, and Figma, and will be completed within a 1-month timeframe.
        </p>
        <p>
          This proposal outlines the objectives, problem statement, tech stack, features, and development timeline for the project.
        </p>
      </section>

      <hr style={{ margin: "24px 0" }} />

      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ color: "#2563eb" }}>2. LITERATURE REVIEW</h3>
        <ul style={{ color: "#374151", marginLeft: "18px" }}>
          <li>
            <strong>Importance of Website for Service-Based Businesses:</strong> According to Servgrow (2024), electrical service companies with professional websites see up to 40% more inquiries compared to those without one. A website acts as a digital storefront that operates 24/7, allowing businesses to display their services, past work, and customer reviews. It also improves searchability on Google, enabling new customers to discover the company organically.
          </li>
          <li>
            <strong>Benefits of Static Websites:</strong> Static websites are highly suitable for small and medium service businesses as they offer faster loading speeds, higher security, and lower hosting and maintenance costs (W3Techs, 2023).
          </li>
          <li>
            <strong>Role of React.js in Modern Web Development:</strong> React.js is a modern JavaScript library used for building dynamic and responsive user interfaces. It promotes the use of reusable components, making the codebase more maintainable and scalable. React applications are also compatible with static site generation tools like Vite or Next.js (Meta, 2024).
          </li>
          <li>
            <strong>Mobile-First & SEO-Oriented Design:</strong> With over 60% of web searches happening on mobile devices (Statista, 2024), building mobile-responsive websites is no longer optional. Tools like Tailwind CSS help in building fully responsive layouts quickly. Implementing SEO best practices ensures better visibility in search engine results (Moz, 2024).
          </li>
          <li>
            <strong>User Experience & Accessibility:</strong> A study by Nielsen Norman Group (2022) emphasizes that users judge a website's credibility within the first few seconds. Clean navigation, visible contact points, testimonials, and visual cues significantly impact trust.
          </li>
        </ul>
      </section>

      <hr style={{ margin: "24px 0" }} />

      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ color: "#2563eb" }}>3. PROBLEM STATEMENT</h3>
        <ul style={{ color: "#374151", marginLeft: "18px" }}>
          <li>Limited Visibility: Without a website, the company is virtually invisible to potential customers searching for services online.</li>
          <li>Inefficient Communication: All customer interactions occur through phone calls or walk-ins, making the process time-consuming and prone to delays or misunderstandings.</li>
          <li>Lack of Service Showcase: The company has completed several high-quality projects, but there is no portfolio or testimonial section to demonstrate their credibility and attract new clients.</li>
          <li>No Online Booking System: Customers cannot book appointments or request service quotes online, resulting in missed opportunities and poor user convenience.</li>
          <li>Competitive Disadvantage: Competing businesses with even basic websites are more likely to gain trust and attract clients, placing KRC at a disadvantage in the digital marketplace.</li>
        </ul>
        <p>
          These issues highlight the urgent need for a responsive, professional, and SEO-friendly website that reflects the company’s capabilities, enhances communication, and builds digital credibility.
        </p>
      </section>

      <hr style={{ margin: "24px 0" }} />

      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ color: "#2563eb" }}>4. OBJECTIVE</h3>
        <p>
          The primary objective of this project is to design and develop a static, responsive website using React.js for Kathmandu Repairing Center Pvt. Ltd. to enhance its digital presence, improve customer communication, and support business growth.
        </p>
        <ol style={{ color: "#374151", marginLeft: "18px" }}>
          <li>Establish an Online Presence</li>
          <li>Showcase Services and Portfolio</li>
          <li>Enable Online Appointment and Inquiry System</li>
          <li>Ensure Mobile Responsiveness and Accessibility</li>
          <li>Maintain Brand Consistency</li>
          <li>Optimize for SEO and Performance</li>
          <li>Support Future Scalability</li>
        </ol>
      </section>

      <hr style={{ margin: "24px 0" }} />

      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ color: "#2563eb" }}>5. TECH STACK</h3>
        <ul style={{ color: "#374151", marginLeft: "18px" }}>
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap, jQuery, Adobe XD/Figma/Photoshop</li>
          <li><strong>Backend:</strong> Java, Spring Boot, Hibernate ORM, Apache Tomcat, Spring Tool Suite 4</li>
          <li><strong>Database:</strong> MySQL</li>
          <li><strong>Version Control:</strong> Git</li>
          <li><strong>Project Management:</strong> Milanote/Notion, Microsoft Teams</li>
          <li><strong>Additional:</strong> Spring MVC, JUnit, Maven/Gradle</li>
        </ul>
        <p>
          This tech stack ensures a reliable, secure, and scalable freelance web application to streamline the process of connecting freelancers with clients and managing projects effectively.
        </p>
      </section>

      <hr style={{ margin: "24px 0" }} />

      <section style={{ marginBottom: "32px" }}>
        <h3 style={{ color: "#2563eb" }}>6. FEATURES</h3>
        <ol style={{ color: "#374151", marginLeft: "18px" }}>
          <li>Home Page: Professionally designed landing page with key services and calls-to-action.</li>
          <li>About Us Page: Company background, mission, vision, and team.</li>
          <li>Services Page: Detailed descriptions of all services offered.</li>
          <li>Portfolio Page: Visual gallery of completed projects.</li>
          <li>Product Page: List of products with specifications and quote request option.</li>
          <li>Testimonials Section: Client feedback to build trust.</li>
          <li>Appointment Booking Form: Schedule appointments or request quotes online.</li>
          <li>Contact Us Page: Contact details, Google Map, and inquiry form.</li>
          <li>Responsive Design: Mobile-friendly and fully responsive.</li>
          <li>SEO Optimization: Meta tags, headings, image optimization, sitemap.</li>
          <li>Branding Consistency: Logo, colors, typography throughout the site.</li>
          <li>
            Admin Panel (Planned): Secure dashboard for content management, including:
            <ul>
              <li>Administrator login</li>
              <li>Add/edit/delete services</li>
              <li>Update portfolio</li>
              <li>Manage testimonials</li>
              <li>View appointment/quote requests</li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  );
};

export default Article;