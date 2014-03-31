from get_psychograph import *
from download_tweets import *
import sys
import json
psy = PsychoAnalyzer()
#out_data_path = ''
#for name in  psy.CLASSNAMES.keys():
    #out_data = open(out_data_path+name,'a')
def test(tweet_bio):
    result = {}	
    name  = tweet_bio['screen_name']
    result['name'] = "Twitter Username: " + tweet_bio['name']   
    print result['name'],'\t',
    out_put = open(name,"w")
    user_bio_list = []
     
    bio  = tweet_bio['bio']
    result['bio'] = "Twitter biography: "+ tweet_bio['bio']
    print bio,'\t',
    result['location'] = tweet_bio['entities']['location']
    total_number = str(len(tweet_bio['tweets']))
    count ={}
    print total_number
    result 
    tweet_result = {}
    for tweet in tweet_bio['tweets']:
        tweet = tweet.lower().strip('\n')
        count,tweet_result = psy.get_psycho_count(tweet,count,tweet_result)
    if float(count['fitness'])>=10:
	print "Yes"
	result['result']="Yes"
    else:
	print "No"
	result['result']="No"
    json.dump(result,out_put)
	

screen_name = sys.argv[1]
tweet_bio = download(screen_name) 
test(tweet_bio)
