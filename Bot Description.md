# The ChatBot

## AIM:-
	This chat aims in reducing the work of the HR Manager, and scheduling the interview in no time.

## Body:-

### Step 1:
	 
   In this step the HR Manager interacts with the candidate through skype. So he could know a little about the candidate. The Manger receives the candidate’s resume and any one of the id for verification. This step is followed just to gain some knowledge to get a look at the candidate. So he doesn’t cheat in the future process.
  Then after knowing about the candidate. The candidate is told that he would be receiving the details about his interview and a link for the online interviewing platform through his mail and that, if he is not present in the interviewing platform at the appointed date and time, then his interview will be canceled and he won’t be able to attend the interview again.
 
### Step 2:
  This chat bot mainly uses Google dialogue flow for creating and configuring the chat bot. It uses node js and MongoDB in the backend for the Web hook process. It also uses Google analytics for analyzing the users. As the main Goal of this product is to make work easier for the HR Manager. This also helps you to make online interviewing must simpler and secure. The Manger doesn’t have to go to the website and schedule manually, instead the bot schedules the interview without any hard work. The manager just has to sit down relaxed, open the bot just using google assistant and just tell the required information. 

  After the bot has acquired the required information, it triggers a fulfillment request. The bot then sends the acquired information as a filament request to the web hook which is nothing but, it sends some JSON data to the api, this api is nothing but the web hook. The web hook receives the data sent by the bot and validates the data.

### Here are some things the api Layer validates:-

->	Validate weather the email is in email format.

->	Validates if or not the email exists in the real world.

->	Validates the date and time.

If all the above data is actually valid. The data is directly sent into the data base, which is the MongoDB. Then with the help of the received data. An Email regarding the interview is sent both to the interviewer and the candidate. Both of these people are provide with a link and the date and time of the interview. The link will be activated on the particular date and time so the candidate will be evaluated by the interviewer in the online interviewing platform through the link.

## Step 3:
  This step consists of the interview. Once on the particular date and time the interviewer and the candidate has successfully entered the interviewing platform. The interview will begin. At first the candidate will be checked if he is the correct candidate through image mapping algorithm and then, the interaction between the interviewer and the candidate will begin. The candidate will be asked interviewed like in a normal interview and he will also be given question and asked to code if necessary, for this reason the online platform has the place for coding too.
  The candidate can write the code and can upload in the online platform itself. Which will then be evaluated by the interviewer. The interviewer evaluates the candidate according to his performance. The hits the finish the interview button, which send the result back to the bot. If the candidate is not present before 5mins of the interview, the interviewer can also contact the candidate. The candidate can also been contacted in the middle of the interview if the connection is really very slow. None of the data of the interviewer is exposed as even the call is made with the help of a bridge. 

## Step 4:
  The data from the online interviewing platform is processed and the bot itself evaluates and gives the candidate a grade value according to the result given by the interviewer. The bot also evaluates the candidate according to:

	 Candidate’s Confidence level.

	 Candidate’s expressions.

	 Candidate’s Coding Style and how many times the candidate has erased and rewritten the code.

  Thus, the final result is finalized by the bot is saved in the Data Base. Which is then retrieved when the HR Manager enquires the bot about, performs of the candidates and, about which candidate did the best. The Manager can also retrieve the interview results of a specific candidate. If the Manager has a doubt about the best candidate he can also verify it by asking the bot to show the entire interview. If there was any misbehavior of the candidate or the interviewer, the HR Manager can verify it by view the whole interview process again. Thus making the work of the HR Manger easier, i.e. he just has to sit and talk with the bot, and the rest will be handled by the bot.
