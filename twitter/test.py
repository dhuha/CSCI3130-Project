from get_psychograph import *
from download_tweets import *
import sys
psy = PsychoAnalyzer()
#out_data_path = ''
#for name in  psy.CLASSNAMES.keys():
    #out_data = open(out_data_path+name,'a')
def test(tweet_bio):

    name = tweet_bio['screen_name']    
    print name,'\t',
    user_bio_list = []

    bio = tweet_bio['bio']
    print bio,'\t',
        
    total_number = str(len(tweet_bio['tweets']))
    count ={}
    print total_number

    tweet_result = {}
    for tweet in tweet_bio['tweets']:
        tweet = tweet.lower().strip('\n')
        count,tweet_result = psy.get_psycho_count(tweet,count,tweet_result)
    if float(count['fitness'])>=10:
	print "Yes"
    else:
	print "No"
	

screen_name = sys.argv[1]
tweet_bio = download(screen_name) 
test(tweet_bio)
