---
title: "Contact Me"
date: 2023-01-28T14:00:17-07:00
---

<div class="container">
  You can contact me here!
  <form name="contact" class="contact-form width-normal" action="/thankyou/" method="POST" netlify-honeypot="bot-field" data-netlify="true" data-netlify-recaptcha="true">
      <input type="hidden" name="form-name" value="contact" />
      <p style="display: none;">
      <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
      </p>
      <label for="contact-form-name">Name</label>
      <input id="contact-form-name" name="Name" type="text" placeholder="Name" 
              required="" autocomplete="off">
      <label for="contact-form-email">Email</label>
      <input id="contact-form-email" name="Name" type="email" placeholder="Email Address" 
          required="" autocomplete="off">
      <label for="contact-form-subjec">Subject</label>
      <input id="contact-form-subject" name="Subject" type="text" placeholder="Subject" 
              required="" autocomplete="off">
      <label for="contact-form-message">Message</label>
      <textarea id="contact-form-message" name="Message" placeholder="" style="height:200px"></textarea>
      <div class="recaptcha" data-netlify-recaptcha="true"></div>
      <input type="submit" value="Submit" id="Form-submit"></button>
  </form>
</div>