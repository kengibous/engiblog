---
title: "Contact Me"
date: 2023-01-28T14:00:17-07:00
---

You can contact me here!

<form name="contact" class="contact-form width-normal" action="/thankyou/" method="POST" netlify-honeypot="bot-field" data-netlify="true" data-netlify-recaptcha="true">
    <input type="hidden" name="form-name" value="contact" />
    <p style="display: none;">
      <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
    </p>
    <!-- Text input-->
    <div class="form-group">
        <label class="col-md-4 control-label" for="Name"></label>
        <div class="col-md-4">
            <input id="contact-form-name" name="Name" type="text" placeholder="Name" 
            class="form-control input-md" required="" autocomplete="off">
        </div>
    </div>
    <!-- Text input-->
    <div class="form-group">
        <label class="col-md-4 control-label" for="Email"></label>
        <div class="col-md-4">
            <input id="contact-form-email" name="Email" type="email" placeholder="Email Address" class="form-control input-md" required="" autocomplete="off">
        </div>
    </div>
    <!-- Text input-->
    <div class="form-group">
        <label class="col-md-4 control-label" for="Subject"></label>
        <div class="col-md-4">
            <input id="contact-form-subject" name="Subject" type="text" placeholder="Subject" class="form-control input-md" required="" autocomplete="off">
        </div>
    </div>
    <!-- Textarea -->
    <div class="form-group">
        <label class="col-md-4 control-label" for=""></label>
        <textarea class="form-control" id="contact-form-message" name="Message" placeholder="" rows="8"></textarea>
    </div>
    <!-- Button -->
    <div class="form-group">
        <button type="submit" value="Submit" id="Form-submit">Submit</button>
    </div>
</form>
