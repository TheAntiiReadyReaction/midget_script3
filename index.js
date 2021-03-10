function fillForm(){
    fetch("https://i-readycentral.com/wp-admin/admin-ajax.php", {
		"headers": {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9",
			"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"sec-gpc": "1",
			"x-requested-with": "XMLHttpRequest"
		},
		"referrer": "https://i-readycentral.com/submit-idea/",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": "i_am_a=a_member+of+the+i-ready+team+at+ca+submitting+my+idea.&idea_author=TwentyFive&position=TwentyFive&state_=alaska_&email_5329103518=25TwentyFive25%40null.net&twitter_handle=&blog_url=&grades=0&grades%5B%5D=784&grades%5B%5D=785&grades%5B%5D=786&grades%5B%5D=787&post_title=TwentyFive&post_content=iReady+must+burn.+25&image_1_caption=&image_2_caption=&image_3_caption=&image_4_caption=&image_5_caption=&video_1_caption=&video_2_caption=&video_3_caption=&permission_question_idea=&preferred_followup_method=&phone_number=&permission_form%5B%5D=i_have_read_and_accepted_the_permission_form_that_describes_the_terms_for_submitting_content_to_be_shared_with_the_%3Cem%3Ei-ready%3C%2Fem%3E_community.*&accept_terms%5B%5D=_i_understand_that_i_am_subject_to_the_%3Ca_href%3D%22https%3A%2F%2Fi-readycentral.com%2Farticles%2Fterms-of-use%2F%22%3Eterms_of_use%3C%2Fa%3E_and_%3Ca_href%3D%22https%3A%2F%2Fi-readycentral.com%2Farticles%2Fprivacy-policy%2F%22%3Eprivacy_policies%3C%2Fa%3E_for_%3Cem%3Ei-ready_central%3C%2Fem%3E.*&name_options%5B%5D=i_do+not+want+my+first+and+last+name+included+when+my+idea+is+posted+on+the+%3Cem%3Ei-ready+central%3C%2Fem%3E+site.&_wpnonce=f2597f5df3&_wp_http_referer=%2Fsubmit-idea%2F&form_id=6674&page_id=6667&delete_attachments%5B%5D=&action=wpuf_submit_post&wpuf_form_status=new&",
		"method": "POST",
		"mode": "cors",
		"credentials": "include"
	}).then(response => {
    console.log("form filled.");
    fillForm();
	});
}

fillForm();
